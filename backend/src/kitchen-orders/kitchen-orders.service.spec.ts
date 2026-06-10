import { BadRequestException, NotFoundException } from '@nestjs/common';
import { KitchenOrderStatus } from '@prisma/client';
import { KitchenOrdersService } from './kitchen-orders.service';

describe('KitchenOrdersService', () => {
  it('moves a pending order to preparing without deducting inventory', async () => {
    const tx = {
      $queryRaw: jest.fn().mockResolvedValue([]),
      kitchenOrder: {
        findFirst: jest.fn().mockResolvedValue({
          id: 'order-1',
          status: KitchenOrderStatus.PENDING,
          recipeId: 'recipe-1',
        }),
        update: jest.fn().mockResolvedValue({}),
        findUnique: jest.fn().mockResolvedValue({
          id: 'order-1',
          status: KitchenOrderStatus.PREPARING,
        }),
      },
      inventoryItem: { update: jest.fn() },
      stockMovement: { create: jest.fn() },
    };
    const prisma = {
      $transaction: jest.fn(
        async (callback: (client: typeof tx) => unknown) => callback(tx),
      ),
    };
    const service = new KitchenOrdersService(prisma as any);

    await service.updateStatus(
      'order-1',
      KitchenOrderStatus.PREPARING,
      'business-1',
      'user-1',
    );

    expect(tx.kitchenOrder.update).toHaveBeenCalledWith({
      where: { id: 'order-1' },
      data: { status: KitchenOrderStatus.PREPARING },
    });
    expect(tx.inventoryItem.update).not.toHaveBeenCalled();
    expect(tx.stockMovement.create).not.toHaveBeenCalled();
  });

  it('rejects skipped kitchen-order status transitions', async () => {
    const tx = {
      $queryRaw: jest.fn().mockResolvedValue([]),
      kitchenOrder: {
        findFirst: jest.fn().mockResolvedValue({
          id: 'order-1',
          status: KitchenOrderStatus.PENDING,
          recipeId: 'recipe-1',
        }),
      },
    };
    const prisma = {
      $transaction: jest.fn(
        async (callback: (client: typeof tx) => unknown) => callback(tx),
      ),
    };
    const service = new KitchenOrdersService(prisma as any);

    await expect(
      service.updateStatus(
        'order-1',
        KitchenOrderStatus.READY,
        'business-1',
        'user-1',
      ),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('rejects a dining table outside the current business', async () => {
    const tx = {
      location: { findFirst: jest.fn() },
      diningTable: { findFirst: jest.fn().mockResolvedValue(null) },
    };
    const prisma = {
      $transaction: jest.fn(
        async (callback: (client: typeof tx) => unknown) => callback(tx),
      ),
    };
    const service = new KitchenOrdersService(prisma as any);

    await expect(
      service.complete(
        {
          receiptNo: 'R-1',
          recipeId: 'recipe-1',
          quantity: 1,
          tableId: 'other-business-table',
          status: KitchenOrderStatus.PENDING,
        },
        'business-1',
        'user-1',
      ),
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});

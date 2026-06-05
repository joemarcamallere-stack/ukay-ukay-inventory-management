import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventoryDto: CreateInventoryDto) {
    return this.prisma.inventoryItem.create({
      data: createInventoryDto,
      include: { location: true },
    });
  }

  async findAll(search?: string) {
    return this.prisma.inventoryItem.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search, mode: 'insensitive' } },
              { category: { contains: search, mode: 'insensitive' } },
              { subcategory: { contains: search, mode: 'insensitive' } },
            ],
          }
        : undefined,
      include: { location: true },
      orderBy: { dateAdded: 'desc' },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.inventoryItem.findUnique({
      where: { id },
      include: { location: true },
    });
    if (!item) throw new NotFoundException(`Inventory item #${id} not found`);
    return item;
  }

  async update(id: string, updateInventoryDto: UpdateInventoryDto) {
    await this.findOne(id);
    return this.prisma.inventoryItem.update({
      where: { id },
      data: updateInventoryDto,
      include: { location: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.inventoryItem.delete({ where: { id } });
  }

  async getStats() {
    const items = await this.prisma.inventoryItem.findMany();
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const availableStock = items
      .filter((i) => i.condition !== 'Damaged')
      .reduce((sum, i) => sum + i.quantity, 0);
    const damagedItems = items
      .filter((i) => i.condition === 'Damaged')
      .reduce((sum, i) => sum + i.quantity, 0);
    const totalValue = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const lowStockItems = items.filter(
      (i) => i.quantity <= 3 && i.condition !== 'Damaged',
    );
    return {
      totalItems,
      availableStock,
      damagedItems,
      totalValue,
      stockAlerts: lowStockItems.map((i) => ({
        id: i.id,
        itemName: i.name,
        currentStock: i.quantity,
        threshold: 5,
        severity: i.quantity <= 1 ? 'critical' : 'low',
      })),
    };
  }
}

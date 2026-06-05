import 'dotenv/config';
import * as bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
} as any);

async function main() {
  const adminPasswordHash = await bcrypt.hash('admin123', 12);
  const staffPasswordHash = await bcrypt.hash('staff123', 12);

  await prisma.user.upsert({
    where: { email: 'admin@ukayukay.com' },
    update: {
      name: 'Admin User',
      role: 'Admin',
      status: 'Active',
      passwordHash: adminPasswordHash,
    },
    create: {
      name: 'Admin User',
      email: 'admin@ukayukay.com',
      role: 'Admin',
      status: 'Active',
      passwordHash: adminPasswordHash,
    },
  });

  await prisma.user.upsert({
    where: { email: 'staff@ukayukay.com' },
    update: {
      name: 'Staff User',
      role: 'Staff',
      status: 'Active',
      passwordHash: staffPasswordHash,
    },
    create: {
      name: 'Staff User',
      email: 'staff@ukayukay.com',
      role: 'Staff',
      status: 'Active',
      passwordHash: staffPasswordHash,
    },
  });

  const mainStore = await prisma.location.upsert({
    where: { name: 'Main Store' },
    update: {
      address: 'Downtown Branch',
      manager: 'Admin User',
      phone: '+63 900 000 0001',
    },
    create: {
      name: 'Main Store',
      address: 'Downtown Branch',
      manager: 'Admin User',
      phone: '+63 900 000 0001',
    },
  });

  const warehouse = await prisma.location.upsert({
    where: { name: 'Warehouse' },
    update: {
      address: 'Storage Facility',
      manager: 'Warehouse Manager',
      phone: '+63 900 000 0002',
    },
    create: {
      name: 'Warehouse',
      address: 'Storage Facility',
      manager: 'Warehouse Manager',
      phone: '+63 900 000 0002',
    },
  });

  await prisma.location.upsert({
    where: { name: 'Branch 1' },
    update: {
      address: 'Branch Location',
      manager: 'Branch Manager',
      phone: '+63 900 000 0003',
    },
    create: {
      name: 'Branch 1',
      address: 'Branch Location',
      manager: 'Branch Manager',
      phone: '+63 900 000 0003',
    },
  });

  const existingItems = await prisma.inventoryItem.count();
  if (existingItems === 0) {
    await prisma.inventoryItem.createMany({
      data: [
        {
          name: 'Vintage Band T-Shirt',
          category: 'Tops',
          targetCustomer: 'Unisex',
          subcategory: 'T-Shirts',
          size: 'M',
          condition: 'Good',
          quantity: 8,
          price: 180,
          locationId: mainStore.id,
        },
        {
          name: 'Classic Denim Jeans',
          category: 'Bottoms',
          targetCustomer: 'Unisex',
          subcategory: 'Jeans',
          size: '30',
          condition: 'Excellent',
          quantity: 5,
          price: 250,
          locationId: mainStore.id,
        },
        {
          name: 'Mixed Clothing Bale',
          category: 'Bales',
          targetCustomer: 'Unisex',
          subcategory: 'Mixed Clothing',
          size: 'Assorted',
          condition: 'Good',
          quantity: 20,
          price: 120,
          locationId: warehouse.id,
        },
      ],
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

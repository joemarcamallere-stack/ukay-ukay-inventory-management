"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const bcrypt = __importStar(require("bcryptjs"));
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
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
//# sourceMappingURL=seed.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryService = class InventoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInventoryDto) {
        return this.prisma.inventoryItem.create({
            data: createInventoryDto,
            include: { location: true },
        });
    }
    async findAll(search) {
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
    async findOne(id) {
        const item = await this.prisma.inventoryItem.findUnique({
            where: { id },
            include: { location: true },
        });
        if (!item)
            throw new common_1.NotFoundException(`Inventory item #${id} not found`);
        return item;
    }
    async update(id, updateInventoryDto) {
        await this.findOne(id);
        return this.prisma.inventoryItem.update({
            where: { id },
            data: updateInventoryDto,
            include: { location: true },
        });
    }
    async remove(id) {
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
        const lowStockItems = items.filter((i) => i.quantity <= 3 && i.condition !== 'Damaged');
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
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createInventoryDto: CreateInventoryDto): Promise<{
        location: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            manager: string;
            phone: string;
            itemCount: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        locationId: string;
        category: string;
        targetCustomer: string;
        subcategory: string;
        size: string;
        condition: string;
        quantity: number;
        price: number;
        dateAdded: Date;
    }>;
    findAll(search?: string): Promise<({
        location: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            manager: string;
            phone: string;
            itemCount: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        locationId: string;
        category: string;
        targetCustomer: string;
        subcategory: string;
        size: string;
        condition: string;
        quantity: number;
        price: number;
        dateAdded: Date;
    })[]>;
    findOne(id: string): Promise<{
        location: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            manager: string;
            phone: string;
            itemCount: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        locationId: string;
        category: string;
        targetCustomer: string;
        subcategory: string;
        size: string;
        condition: string;
        quantity: number;
        price: number;
        dateAdded: Date;
    }>;
    update(id: string, updateInventoryDto: UpdateInventoryDto): Promise<{
        location: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            manager: string;
            phone: string;
            itemCount: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        locationId: string;
        category: string;
        targetCustomer: string;
        subcategory: string;
        size: string;
        condition: string;
        quantity: number;
        price: number;
        dateAdded: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        locationId: string;
        category: string;
        targetCustomer: string;
        subcategory: string;
        size: string;
        condition: string;
        quantity: number;
        price: number;
        dateAdded: Date;
    }>;
    getStats(): Promise<{
        totalItems: number;
        availableStock: number;
        damagedItems: number;
        totalValue: number;
        stockAlerts: {
            id: string;
            itemName: string;
            currentStock: number;
            threshold: number;
            severity: string;
        }[];
    }>;
}

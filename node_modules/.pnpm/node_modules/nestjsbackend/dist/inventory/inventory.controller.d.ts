import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InventoryService } from './inventory.service';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAll(): Promise<import("./product.entity").Product[]>;
    create(createProductDto: CreateProductDto): Promise<import("./product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("./product.entity").Product>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}

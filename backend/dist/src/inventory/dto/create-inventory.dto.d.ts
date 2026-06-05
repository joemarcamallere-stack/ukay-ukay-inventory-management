export declare enum TargetCustomer {
    Male = "Male",
    Female = "Female",
    Unisex = "Unisex"
}
export declare enum InventoryCondition {
    Excellent = "Excellent",
    Good = "Good",
    Fair = "Fair",
    Damaged = "Damaged"
}
export declare class CreateInventoryDto {
    name: string;
    category: string;
    targetCustomer: TargetCustomer;
    subcategory: string;
    size: string;
    condition: InventoryCondition;
    quantity: number;
    price: number;
    locationId: string;
}

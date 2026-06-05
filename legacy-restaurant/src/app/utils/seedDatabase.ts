import { writeLocalStorage } from "../lib/localStorage";
import {
  sampleUsers,
  sampleSuppliers,
  sampleProducts,
  samplePurchaseOrders,
  sampleGoodsReceived,
  sampleRecipes,
  samplePOSOrders,
  sampleTransfers,
  sampleAdjustments,
  sampleWasteLogs,
  sampleInventoryMovements
} from "../data/seedData";

export const seedDatabase = () => {
  try {
    // Seed Users
    writeLocalStorage("users.records", sampleUsers);

    // Seed Suppliers
    const suppliers = sampleSuppliers.map((supplier, index) => ({
      id: `SUP-${String(index + 1).padStart(3, '0')}`,
      ...supplier
    }));
    writeLocalStorage("purchaseOrders.suppliers", suppliers);

    // Seed Products (Inventory) - Add IDs to each product
    const productsWithIds = sampleProducts.map((product, index) => ({
      ...product,
      id: index + 1
    }));
    writeLocalStorage("inventory.products", productsWithIds);

    // Seed Global Products
    const globalProducts = productsWithIds.map((product, index) => ({
      id: `PROD-${String(index + 1).padStart(4, '0')}`,
      inventoryId: index + 1,
      name: product.name,
      sku: product.sku,
      category: product.category.split('>')[0].trim(),
      subCategory: product.category.split('>')[1]?.trim() || '',
      unit: product.unit
    }));
    writeLocalStorage("purchaseOrders.globalProducts", globalProducts);

    // Seed Purchase Orders
    writeLocalStorage("purchaseOrders.orders", samplePurchaseOrders);

    // Seed Goods Received
    writeLocalStorage("goodsReceived.records", sampleGoodsReceived);

    // Seed Recipes
    writeLocalStorage("recipes.records", sampleRecipes);

    // Seed POS Orders
    writeLocalStorage("pos.orders", samplePOSOrders);

    // Seed Transfers
    writeLocalStorage("transfers.records", sampleTransfers);

    // Seed Adjustments
    writeLocalStorage("transfers.adjustments", sampleAdjustments);

    // Seed Waste Logs
    writeLocalStorage("transfers.wasteLogs", sampleWasteLogs);

    // Seed Inventory Movements
    writeLocalStorage("inventory.movements", sampleInventoryMovements);

    // Seed Dashboard Pending Orders (empty for now as admin can approve new ones)
    writeLocalStorage("dashboard.pendingOrders", []);

    // Update data version
    writeLocalStorage("cocoders.dataVersion", "seeded-v1");

    return {
      success: true,
      message: "Database seeded successfully with sample data!",
      stats: {
        users: sampleUsers.length,
        suppliers: suppliers.length,
        products: productsWithIds.length,
        purchaseOrders: samplePurchaseOrders.length,
        goodsReceived: sampleGoodsReceived.length,
        recipes: sampleRecipes.length,
        posOrders: samplePOSOrders.length,
        transfers: sampleTransfers.length
      }
    };
  } catch (error) {
    console.error("Error seeding database:", error);
    return {
      success: false,
      message: "Failed to seed database",
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
};

export const clearDatabase = () => {
  try {
    const dataKeys = [
      "inventory.products",
      "purchaseOrders.orders",
      "purchaseOrders.suppliers",
      "purchaseOrders.globalProducts",
      "goodsReceived.records",
      "pos.orders",
      "inventory.movements",
      "dashboard.pendingOrders",
      "recipes.records",
      "transfers.records",
      "transfers.adjustments",
      "transfers.wasteLogs",
      "users.records",
    ];

    dataKeys.forEach((key) => writeLocalStorage(key, []));
    writeLocalStorage("cocoders.dataVersion", "empty-v1");

    return {
      success: true,
      message: "Database cleared successfully!"
    };
  } catch (error) {
    console.error("Error clearing database:", error);
    return {
      success: false,
      message: "Failed to clear database",
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
};

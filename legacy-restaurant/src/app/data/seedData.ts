// Comprehensive Sample Data for Food Inventory System
// This file contains interconnected sample data for all modules

export const sampleUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "admin@cocoders.com",
    phone: "09171234567",
    role: "admin",
    status: "active",
    lastLogin: "2026-06-03T08:30:00",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@cocoders.com",
    phone: "09187654321",
    role: "manager",
    status: "active",
    lastLogin: "2026-06-03T07:15:00",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Maria Santos",
    email: "staff@cocoders.com",
    phone: "09191234567",
    role: "staff",
    status: "active",
    lastLogin: "2026-06-03T09:00:00",
    avatar: "MS"
  },
  {
    id: 4,
    name: "John Reyes",
    email: "john.reyes@cocoders.com",
    phone: "09195678901",
    role: "staff",
    status: "active",
    lastLogin: "2026-06-02T16:45:00",
    avatar: "JR"
  }
];

export const sampleSuppliers = [
  {
    name: "Fresh Harvest Farms",
    contact: "Roberto Garcia",
    email: "sales@freshharvestfarms.ph",
    phone: "09171112222",
    address: "123 Agricultural Road, Laguna",
    products: [
      { name: "Romaine Lettuce", price: 45.00 },
      { name: "Cherry Tomatoes", price: 120.00 },
      { name: "Carrots", price: 35.00 },
      { name: "Bell Peppers", price: 85.00 },
      { name: "Cucumber", price: 40.00 }
    ]
  },
  {
    name: "Premium Meats Co.",
    contact: "Lisa Tan",
    email: "orders@premiummeats.ph",
    phone: "09182223333",
    address: "456 Industrial Ave, Bulacan",
    products: [
      { name: "Chicken Breast", price: 185.00 },
      { name: "Beef Tenderloin", price: 650.00 },
      { name: "Pork Chops", price: 220.00 },
      { name: "Ground Beef", price: 280.00 },
      { name: "Bacon Strips", price: 320.00 }
    ]
  },
  {
    name: "Ocean Fresh Seafood",
    contact: "Carlos Mendoza",
    email: "info@oceanfreshseafood.ph",
    phone: "09193334444",
    address: "789 Coastal Highway, Batangas",
    products: [
      { name: "Fresh Salmon", price: 580.00 },
      { name: "Tuna Steaks", price: 450.00 },
      { name: "Shrimp", price: 380.00 },
      { name: "Squid", price: 180.00 },
      { name: "Mussels", price: 150.00 }
    ]
  },
  {
    name: "Golden Grains Supply",
    contact: "Anna Reyes",
    email: "sales@goldengrains.ph",
    phone: "09204445555",
    address: "321 Market Street, Pampanga",
    products: [
      { name: "Jasmine Rice", price: 52.00 },
      { name: "White Bread", price: 48.00 },
      { name: "Whole Wheat Flour", price: 65.00 },
      { name: "Pasta", price: 75.00 },
      { name: "Oats", price: 95.00 }
    ]
  },
  {
    name: "Dairy Delights Inc.",
    contact: "Patricia Cruz",
    email: "orders@dairydelights.ph",
    phone: "09215556666",
    address: "654 Dairy Farm Road, Batangas",
    products: [
      { name: "Fresh Milk", price: 85.00 },
      { name: "Cheddar Cheese", price: 180.00 },
      { name: "Butter", price: 145.00 },
      { name: "Greek Yogurt", price: 95.00 },
      { name: "Cream Cheese", price: 165.00 }
    ]
  },
  {
    name: "Tropical Fruits Market",
    contact: "Ramon Santos",
    email: "sales@tropicalfruits.ph",
    phone: "09226667777",
    address: "987 Fruit Plaza, Davao",
    products: [
      { name: "Bananas", price: 55.00 },
      { name: "Mangoes", price: 120.00 },
      { name: "Apples", price: 95.00 },
      { name: "Oranges", price: 75.00 },
      { name: "Strawberries", price: 180.00 }
    ]
  }
];

export const sampleProducts = [
  // Vegetables
  { name: "Romaine Lettuce", category: "Vegetables > Leafy Greens", sku: "VEG-001", unit: "kg", price: 45.00, stock: 15, maxStock: 30, minStock: 5, reorderPoint: 8, expiry: "2026-06-10", location: "Cold Storage A" },
  { name: "Cherry Tomatoes", category: "Vegetables > Tomatoes", sku: "VEG-002", unit: "kg", price: 120.00, stock: 8, maxStock: 20, minStock: 4, reorderPoint: 6, expiry: "2026-06-08", location: "Cold Storage A" },
  { name: "Carrots", category: "Vegetables > Root Vegetables", sku: "VEG-003", unit: "kg", price: 35.00, stock: 25, maxStock: 40, minStock: 10, reorderPoint: 12, expiry: "2026-06-15", location: "Cold Storage A" },
  { name: "Bell Peppers", category: "Vegetables > Peppers", sku: "VEG-004", unit: "kg", price: 85.00, stock: 12, maxStock: 25, minStock: 5, reorderPoint: 8, expiry: "2026-06-12", location: "Cold Storage A" },
  { name: "Cucumber", category: "Vegetables > Cucurbitaceae", sku: "VEG-005", unit: "kg", price: 40.00, stock: 18, maxStock: 30, minStock: 8, reorderPoint: 10, expiry: "2026-06-11", location: "Cold Storage A" },
  { name: "Broccoli", category: "Vegetables > Cruciferous", sku: "VEG-006", unit: "kg", price: 95.00, stock: 10, maxStock: 20, minStock: 4, reorderPoint: 6, expiry: "2026-06-09", location: "Cold Storage A" },
  { name: "Spinach", category: "Vegetables > Leafy Greens", sku: "VEG-007", unit: "kg", price: 55.00, stock: 7, maxStock: 15, minStock: 3, reorderPoint: 5, expiry: "2026-06-07", location: "Cold Storage A" },
  { name: "Onions", category: "Vegetables > Allium", sku: "VEG-008", unit: "kg", price: 42.00, stock: 30, maxStock: 50, minStock: 15, reorderPoint: 20, expiry: "2026-07-01", location: "Dry Storage" },
  { name: "Garlic", category: "Vegetables > Allium", sku: "VEG-009", unit: "kg", price: 125.00, stock: 8, maxStock: 15, minStock: 3, reorderPoint: 5, expiry: "2026-06-25", location: "Dry Storage" },
  { name: "Potatoes", category: "Vegetables > Root Vegetables", sku: "VEG-010", unit: "kg", price: 38.00, stock: 45, maxStock: 60, minStock: 20, reorderPoint: 25, expiry: "2026-07-10", location: "Dry Storage" },

  // Meat & Poultry
  { name: "Chicken Breast", category: "Meat & Poultry > Chicken", sku: "MEAT-001", unit: "kg", price: 185.00, stock: 20, maxStock: 35, minStock: 8, reorderPoint: 12, expiry: "2026-06-06", location: "Freezer A" },
  { name: "Beef Tenderloin", category: "Meat & Poultry > Beef", sku: "MEAT-002", unit: "kg", price: 650.00, stock: 12, maxStock: 20, minStock: 5, reorderPoint: 7, expiry: "2026-06-08", location: "Freezer A" },
  { name: "Pork Chops", category: "Meat & Poultry > Pork", sku: "MEAT-003", unit: "kg", price: 220.00, stock: 15, maxStock: 25, minStock: 6, reorderPoint: 9, expiry: "2026-06-07", location: "Freezer A" },
  { name: "Ground Beef", category: "Meat & Poultry > Beef", sku: "MEAT-004", unit: "kg", price: 280.00, stock: 18, maxStock: 30, minStock: 8, reorderPoint: 10, expiry: "2026-06-05", location: "Freezer A" },
  { name: "Bacon Strips", category: "Meat & Poultry > Pork", sku: "MEAT-005", unit: "kg", price: 320.00, stock: 10, maxStock: 18, minStock: 4, reorderPoint: 6, expiry: "2026-06-15", location: "Freezer B" },
  { name: "Chicken Thighs", category: "Meat & Poultry > Chicken", sku: "MEAT-006", unit: "kg", price: 165.00, stock: 22, maxStock: 35, minStock: 10, reorderPoint: 12, expiry: "2026-06-06", location: "Freezer A" },
  { name: "Pork Belly", category: "Meat & Poultry > Pork", sku: "MEAT-007", unit: "kg", price: 245.00, stock: 14, maxStock: 25, minStock: 6, reorderPoint: 8, expiry: "2026-06-07", location: "Freezer A" },
  { name: "Beef Ribs", category: "Meat & Poultry > Beef", sku: "MEAT-008", unit: "kg", price: 420.00, stock: 8, maxStock: 15, minStock: 3, reorderPoint: 5, expiry: "2026-06-09", location: "Freezer B" },

  // Seafood
  { name: "Fresh Salmon", category: "Seafood > Fish", sku: "SEA-001", unit: "kg", price: 580.00, stock: 10, maxStock: 18, minStock: 4, reorderPoint: 6, expiry: "2026-06-05", location: "Freezer C" },
  { name: "Tuna Steaks", category: "Seafood > Fish", sku: "SEA-002", unit: "kg", price: 450.00, stock: 12, maxStock: 20, minStock: 5, reorderPoint: 7, expiry: "2026-06-06", location: "Freezer C" },
  { name: "Shrimp", category: "Seafood > Shellfish", sku: "SEA-003", unit: "kg", price: 380.00, stock: 15, maxStock: 25, minStock: 6, reorderPoint: 9, expiry: "2026-06-04", location: "Freezer C" },
  { name: "Squid", category: "Seafood > Mollusks", sku: "SEA-004", unit: "kg", price: 180.00, stock: 8, maxStock: 15, minStock: 3, reorderPoint: 5, expiry: "2026-06-05", location: "Freezer C" },
  { name: "Mussels", category: "Seafood > Shellfish", sku: "SEA-005", unit: "kg", price: 150.00, stock: 6, maxStock: 12, minStock: 3, reorderPoint: 4, expiry: "2026-06-04", location: "Freezer C" },
  { name: "Crab Meat", category: "Seafood > Shellfish", sku: "SEA-006", unit: "kg", price: 520.00, stock: 5, maxStock: 10, minStock: 2, reorderPoint: 3, expiry: "2026-06-05", location: "Freezer C" },

  // Grains & Bakery
  { name: "Jasmine Rice", category: "Grains & Bakery > Rice", sku: "GRAIN-001", unit: "kg", price: 52.00, stock: 100, maxStock: 150, minStock: 40, reorderPoint: 50, expiry: "2027-01-15", location: "Dry Storage" },
  { name: "White Bread", category: "Grains & Bakery > Bread", sku: "GRAIN-002", unit: "loaves", price: 48.00, stock: 30, maxStock: 50, minStock: 15, reorderPoint: 20, expiry: "2026-06-08", location: "Bakery Shelf" },
  { name: "Whole Wheat Flour", category: "Grains & Bakery > Flour", sku: "GRAIN-003", unit: "kg", price: 65.00, stock: 40, maxStock: 60, minStock: 20, reorderPoint: 25, expiry: "2026-12-01", location: "Dry Storage" },
  { name: "Pasta", category: "Grains & Bakery > Pasta", sku: "GRAIN-004", unit: "kg", price: 75.00, stock: 35, maxStock: 50, minStock: 15, reorderPoint: 20, expiry: "2027-03-01", location: "Dry Storage" },
  { name: "Oats", category: "Grains & Bakery > Cereals", sku: "GRAIN-005", unit: "kg", price: 95.00, stock: 25, maxStock: 40, minStock: 10, reorderPoint: 15, expiry: "2026-11-15", location: "Dry Storage" },
  { name: "Croissants", category: "Grains & Bakery > Pastries", sku: "GRAIN-006", unit: "pcs", price: 35.00, stock: 24, maxStock: 40, minStock: 12, reorderPoint: 15, expiry: "2026-06-06", location: "Bakery Shelf" },
  { name: "Dinner Rolls", category: "Grains & Bakery > Bread", sku: "GRAIN-007", unit: "dozen", price: 55.00, stock: 18, maxStock: 30, minStock: 10, reorderPoint: 12, expiry: "2026-06-07", location: "Bakery Shelf" },

  // Dairy
  { name: "Fresh Milk", category: "Dairy > Milk", sku: "DAIRY-001", unit: "liters", price: 85.00, stock: 40, maxStock: 60, minStock: 20, reorderPoint: 25, expiry: "2026-06-10", location: "Cold Storage B" },
  { name: "Cheddar Cheese", category: "Dairy > Cheese", sku: "DAIRY-002", unit: "kg", price: 180.00, stock: 15, maxStock: 25, minStock: 6, reorderPoint: 9, expiry: "2026-07-01", location: "Cold Storage B" },
  { name: "Butter", category: "Dairy > Butter", sku: "DAIRY-003", unit: "kg", price: 145.00, stock: 12, maxStock: 20, minStock: 5, reorderPoint: 7, expiry: "2026-06-20", location: "Cold Storage B" },
  { name: "Greek Yogurt", category: "Dairy > Yogurt", sku: "DAIRY-004", unit: "kg", price: 95.00, stock: 20, maxStock: 35, minStock: 10, reorderPoint: 12, expiry: "2026-06-15", location: "Cold Storage B" },
  { name: "Cream Cheese", category: "Dairy > Cheese", sku: "DAIRY-005", unit: "kg", price: 165.00, stock: 10, maxStock: 18, minStock: 4, reorderPoint: 6, expiry: "2026-06-25", location: "Cold Storage B" },
  { name: "Heavy Cream", category: "Dairy > Cream", sku: "DAIRY-006", unit: "liters", price: 125.00, stock: 18, maxStock: 30, minStock: 8, reorderPoint: 10, expiry: "2026-06-12", location: "Cold Storage B" },
  { name: "Mozzarella", category: "Dairy > Cheese", sku: "DAIRY-007", unit: "kg", price: 195.00, stock: 14, maxStock: 22, minStock: 6, reorderPoint: 8, expiry: "2026-06-18", location: "Cold Storage B" },

  // Fruits
  { name: "Bananas", category: "Fruits > Tropical", sku: "FRUIT-001", unit: "kg", price: 55.00, stock: 30, maxStock: 50, minStock: 15, reorderPoint: 20, expiry: "2026-06-09", location: "Fruit Rack" },
  { name: "Mangoes", category: "Fruits > Tropical", sku: "FRUIT-002", unit: "kg", price: 120.00, stock: 18, maxStock: 30, minStock: 8, reorderPoint: 12, expiry: "2026-06-11", location: "Fruit Rack" },
  { name: "Apples", category: "Fruits > Pomaceous", sku: "FRUIT-003", unit: "kg", price: 95.00, stock: 25, maxStock: 40, minStock: 12, reorderPoint: 15, expiry: "2026-06-20", location: "Fruit Rack" },
  { name: "Oranges", category: "Fruits > Citrus", sku: "FRUIT-004", unit: "kg", price: 75.00, stock: 22, maxStock: 35, minStock: 10, reorderPoint: 14, expiry: "2026-06-18", location: "Fruit Rack" },
  { name: "Strawberries", category: "Fruits > Berries", sku: "FRUIT-005", unit: "kg", price: 180.00, stock: 8, maxStock: 15, minStock: 4, reorderPoint: 6, expiry: "2026-06-06", location: "Cold Storage A" },
  { name: "Watermelon", category: "Fruits > Melons", sku: "FRUIT-006", unit: "kg", price: 45.00, stock: 35, maxStock: 50, minStock: 15, reorderPoint: 20, expiry: "2026-06-14", location: "Fruit Rack" },
  { name: "Pineapple", category: "Fruits > Tropical", sku: "FRUIT-007", unit: "pcs", price: 65.00, stock: 20, maxStock: 30, minStock: 10, reorderPoint: 12, expiry: "2026-06-13", location: "Fruit Rack" },
  { name: "Blueberries", category: "Fruits > Berries", sku: "FRUIT-008", unit: "kg", price: 280.00, stock: 5, maxStock: 10, minStock: 2, reorderPoint: 4, expiry: "2026-06-07", location: "Cold Storage A" },

  // Condiments & Spices
  { name: "Olive Oil", category: "Condiments & Spices > Oils", sku: "COND-001", unit: "liters", price: 320.00, stock: 15, maxStock: 25, minStock: 6, reorderPoint: 9, expiry: "2027-06-01", location: "Pantry" },
  { name: "Soy Sauce", category: "Condiments & Spices > Sauces", sku: "COND-002", unit: "liters", price: 85.00, stock: 20, maxStock: 35, minStock: 10, reorderPoint: 12, expiry: "2027-01-15", location: "Pantry" },
  { name: "Black Pepper", category: "Condiments & Spices > Spices", sku: "COND-003", unit: "kg", price: 450.00, stock: 3, maxStock: 8, minStock: 2, reorderPoint: 3, expiry: "2027-12-01", location: "Spice Rack" },
  { name: "Sea Salt", category: "Condiments & Spices > Salt", sku: "COND-004", unit: "kg", price: 45.00, stock: 25, maxStock: 40, minStock: 10, reorderPoint: 15, expiry: "2028-01-01", location: "Pantry" },
  { name: "Tomato Sauce", category: "Condiments & Spices > Sauces", sku: "COND-005", unit: "kg", price: 95.00, stock: 18, maxStock: 30, minStock: 8, reorderPoint: 12, expiry: "2026-12-15", location: "Pantry" },
  { name: "Honey", category: "Condiments & Spices > Sweeteners", sku: "COND-006", unit: "kg", price: 280.00, stock: 8, maxStock: 15, minStock: 3, reorderPoint: 5, expiry: "2027-06-01", location: "Pantry" },
  { name: "Basil (Dried)", category: "Condiments & Spices > Herbs", sku: "COND-007", unit: "kg", price: 520.00, stock: 2, maxStock: 5, minStock: 1, reorderPoint: 2, expiry: "2027-03-01", location: "Spice Rack" },
  { name: "Paprika", category: "Condiments & Spices > Spices", sku: "COND-008", unit: "kg", price: 380.00, stock: 3, maxStock: 6, minStock: 1, reorderPoint: 2, expiry: "2027-09-01", location: "Spice Rack" },

  // Beverages
  { name: "Orange Juice", category: "Beverages > Juices", sku: "BEV-001", unit: "liters", price: 125.00, stock: 24, maxStock: 40, minStock: 12, reorderPoint: 15, expiry: "2026-06-15", location: "Cold Storage B" },
  { name: "Coffee Beans", category: "Beverages > Coffee", sku: "BEV-002", unit: "kg", price: 450.00, stock: 12, maxStock: 20, minStock: 5, reorderPoint: 7, expiry: "2027-01-01", location: "Pantry" },
  { name: "Green Tea", category: "Beverages > Tea", sku: "BEV-003", unit: "kg", price: 280.00, stock: 8, maxStock: 15, minStock: 3, reorderPoint: 5, expiry: "2026-12-01", location: "Pantry" },
  { name: "Sparkling Water", category: "Beverages > Water", sku: "BEV-004", unit: "liters", price: 45.00, stock: 48, maxStock: 72, minStock: 24, reorderPoint: 30, expiry: "2027-03-01", location: "Dry Storage" },
  { name: "Apple Juice", category: "Beverages > Juices", sku: "BEV-005", unit: "liters", price: 115.00, stock: 20, maxStock: 35, minStock: 10, reorderPoint: 12, expiry: "2026-06-18", location: "Cold Storage B" },

  // Frozen Foods
  { name: "French Fries", category: "Frozen Foods > Potatoes", sku: "FROZEN-001", unit: "kg", price: 125.00, stock: 30, maxStock: 50, minStock: 15, reorderPoint: 20, expiry: "2027-06-01", location: "Freezer D" },
  { name: "Ice Cream (Vanilla)", category: "Frozen Foods > Desserts", sku: "FROZEN-002", unit: "liters", price: 280.00, stock: 15, maxStock: 25, minStock: 6, reorderPoint: 9, expiry: "2026-12-01", location: "Freezer D" },
  { name: "Frozen Vegetables Mix", category: "Frozen Foods > Vegetables", sku: "FROZEN-003", unit: "kg", price: 95.00, stock: 25, maxStock: 40, minStock: 12, reorderPoint: 15, expiry: "2027-03-01", location: "Freezer D" },
  { name: "Frozen Berries", category: "Frozen Foods > Fruits", sku: "FROZEN-004", unit: "kg", price: 185.00, stock: 12, maxStock: 20, minStock: 5, reorderPoint: 8, expiry: "2027-01-01", location: "Freezer D" },
];

export const samplePurchaseOrders = [
  {
    id: "PO-2026-001",
    supplier: "Fresh Harvest Farms",
    date: "2026-05-28",
    expectedDelivery: "2026-05-30",
    status: "received",
    items: 5,
    total: 13750.00,
    createdBy: "staff@cocoders.com",
    createdByRole: "staff",
    createdByUserId: 3,
    createdAt: "2026-05-28T09:30:00",
    orderItems: [
      { productName: "Romaine Lettuce", quantity: 30, unitPrice: 45.00, unit: "kg", category: "Vegetables", subCategory: "Leafy Greens", sku: "VEG-001" },
      { productName: "Cherry Tomatoes", quantity: 20, unitPrice: 120.00, unit: "kg", category: "Vegetables", subCategory: "Tomatoes", sku: "VEG-002" },
      { productName: "Carrots", quantity: 40, unitPrice: 35.00, unit: "kg", category: "Vegetables", subCategory: "Root Vegetables", sku: "VEG-003" },
      { productName: "Bell Peppers", quantity: 25, unitPrice: 85.00, unit: "kg", category: "Vegetables", subCategory: "Peppers", sku: "VEG-004" },
      { productName: "Cucumber", quantity: 30, unitPrice: 40.00, unit: "kg", category: "Vegetables", subCategory: "Cucurbitaceae", sku: "VEG-005" }
    ]
  },
  {
    id: "PO-2026-002",
    supplier: "Premium Meats Co.",
    date: "2026-05-29",
    expectedDelivery: "2026-05-31",
    status: "received",
    items: 4,
    total: 18750.00,
    createdBy: "michael.chen@cocoders.com",
    createdByRole: "manager",
    createdByUserId: 2,
    createdAt: "2026-05-29T10:15:00",
    orderItems: [
      { productName: "Chicken Breast", quantity: 35, unitPrice: 185.00, unit: "kg", category: "Meat & Poultry", subCategory: "Chicken", sku: "MEAT-001" },
      { productName: "Beef Tenderloin", quantity: 10, unitPrice: 650.00, unit: "kg", category: "Meat & Poultry", subCategory: "Beef", sku: "MEAT-002" },
      { productName: "Pork Chops", quantity: 20, unitPrice: 220.00, unit: "kg", category: "Meat & Poultry", subCategory: "Pork", sku: "MEAT-003" },
      { productName: "Ground Beef", quantity: 15, unitPrice: 280.00, unit: "kg", category: "Meat & Poultry", subCategory: "Beef", sku: "MEAT-004" }
    ]
  },
  {
    id: "PO-2026-003",
    supplier: "Ocean Fresh Seafood",
    date: "2026-05-30",
    expectedDelivery: "2026-06-01",
    status: "approved",
    items: 4,
    total: 16850.00,
    createdBy: "staff@cocoders.com",
    createdByRole: "staff",
    createdByUserId: 3,
    createdAt: "2026-05-30T08:45:00",
    orderItems: [
      { productName: "Fresh Salmon", quantity: 15, unitPrice: 580.00, unit: "kg", category: "Seafood", subCategory: "Fish", sku: "SEA-001" },
      { productName: "Tuna Steaks", quantity: 12, unitPrice: 450.00, unit: "kg", category: "Seafood", subCategory: "Fish", sku: "SEA-002" },
      { productName: "Shrimp", quantity: 10, unitPrice: 380.00, unit: "kg", category: "Seafood", subCategory: "Shellfish", sku: "SEA-003" },
      { productName: "Squid", quantity: 8, unitPrice: 180.00, unit: "kg", category: "Seafood", subCategory: "Mollusks", sku: "SEA-004" }
    ]
  },
  {
    id: "PO-2026-004",
    supplier: "Dairy Delights Inc.",
    date: "2026-06-01",
    expectedDelivery: "2026-06-03",
    status: "pending",
    items: 5,
    total: 13450.00,
    createdBy: "staff@cocoders.com",
    createdByRole: "staff",
    createdByUserId: 3,
    createdAt: "2026-06-01T11:20:00",
    orderItems: [
      { productName: "Fresh Milk", quantity: 60, unitPrice: 85.00, unit: "liters", category: "Dairy", subCategory: "Milk", sku: "DAIRY-001" },
      { productName: "Cheddar Cheese", quantity: 15, unitPrice: 180.00, unit: "kg", category: "Dairy", subCategory: "Cheese", sku: "DAIRY-002" },
      { productName: "Butter", quantity: 10, unitPrice: 145.00, unit: "kg", category: "Dairy", subCategory: "Butter", sku: "DAIRY-003" },
      { productName: "Greek Yogurt", quantity: 25, unitPrice: 95.00, unit: "kg", category: "Dairy", subCategory: "Yogurt", sku: "DAIRY-004" },
      { productName: "Heavy Cream", quantity: 20, unitPrice: 125.00, unit: "liters", category: "Dairy", subCategory: "Cream", sku: "DAIRY-006" }
    ]
  },
  {
    id: "PO-2026-005",
    supplier: "Golden Grains Supply",
    date: "2026-06-02",
    expectedDelivery: "2026-06-04",
    status: "pending",
    items: 4,
    total: 13500.00,
    createdBy: "john.reyes@cocoders.com",
    createdByRole: "staff",
    createdByUserId: 4,
    createdAt: "2026-06-02T14:30:00",
    orderItems: [
      { productName: "Jasmine Rice", quantity: 150, unitPrice: 52.00, unit: "kg", category: "Grains & Bakery", subCategory: "Rice", sku: "GRAIN-001" },
      { productName: "Whole Wheat Flour", quantity: 40, unitPrice: 65.00, unit: "kg", category: "Grains & Bakery", subCategory: "Flour", sku: "GRAIN-003" },
      { productName: "Pasta", quantity: 30, unitPrice: 75.00, unit: "kg", category: "Grains & Bakery", subCategory: "Pasta", sku: "GRAIN-004" },
      { productName: "White Bread", quantity: 40, unitPrice: 48.00, unit: "loaves", category: "Grains & Bakery", subCategory: "Bread", sku: "GRAIN-002" }
    ]
  }
];

export const sampleGoodsReceived = [
  {
    id: "GR-2026-001",
    poId: "PO-2026-001",
    supplier: "Fresh Harvest Farms",
    receivedDate: "2026-05-30",
    status: "completed",
    receivedBy: "Maria Santos",
    items: 5,
    totalValue: 13750.00,
    notes: "All items in good condition. Fresh and properly packaged.",
    receivedItems: [
      { productName: "Romaine Lettuce", quantity: 30, unitPrice: 45.00, unit: "kg", category: "Vegetables", subCategory: "Leafy Greens", condition: "good", sku: "VEG-001" },
      { productName: "Cherry Tomatoes", quantity: 20, unitPrice: 120.00, unit: "kg", category: "Vegetables", subCategory: "Tomatoes", condition: "good", sku: "VEG-002" },
      { productName: "Carrots", quantity: 40, unitPrice: 35.00, unit: "kg", category: "Vegetables", subCategory: "Root Vegetables", condition: "good", sku: "VEG-003" },
      { productName: "Bell Peppers", quantity: 25, unitPrice: 85.00, unit: "kg", category: "Vegetables", subCategory: "Peppers", condition: "good", sku: "VEG-004" },
      { productName: "Cucumber", quantity: 30, unitPrice: 40.00, unit: "kg", category: "Vegetables", subCategory: "Cucurbitaceae", condition: "good", sku: "VEG-005" }
    ]
  },
  {
    id: "GR-2026-002",
    poId: "PO-2026-002",
    supplier: "Premium Meats Co.",
    receivedDate: "2026-05-31",
    status: "completed",
    receivedBy: "John Reyes",
    items: 4,
    totalValue: 18750.00,
    notes: "All meat products properly frozen. Quality inspection passed.",
    receivedItems: [
      { productName: "Chicken Breast", quantity: 35, unitPrice: 185.00, unit: "kg", category: "Meat & Poultry", subCategory: "Chicken", condition: "good", sku: "MEAT-001" },
      { productName: "Beef Tenderloin", quantity: 10, unitPrice: 650.00, unit: "kg", category: "Meat & Poultry", subCategory: "Beef", condition: "good", sku: "MEAT-002" },
      { productName: "Pork Chops", quantity: 20, unitPrice: 220.00, unit: "kg", category: "Meat & Poultry", subCategory: "Pork", condition: "good", sku: "MEAT-003" },
      { productName: "Ground Beef", quantity: 15, unitPrice: 280.00, unit: "kg", category: "Meat & Poultry", subCategory: "Beef", condition: "good", sku: "MEAT-004" }
    ]
  }
];

export const sampleRecipes = [
  {
    id: "RCP-001",
    name: "Classic Caesar Salad",
    category: "Salads",
    servings: 4,
    prepTime: "15 minutes",
    status: "active",
    ingredients: [
      { id: "ING-001-1", name: "Romaine Lettuce", quantity: 0.3, unit: "kg", unitCost: 45.00, totalCost: 13.50 },
      { id: "ING-001-2", name: "Cheddar Cheese", quantity: 0.1, unit: "kg", unitCost: 180.00, totalCost: 18.00 },
      { id: "ING-001-3", name: "Chicken Breast", quantity: 0.4, unit: "kg", unitCost: 185.00, totalCost: 74.00 },
      { id: "ING-001-4", name: "Olive Oil", quantity: 0.05, unit: "liters", unitCost: 320.00, totalCost: 16.00 },
      { id: "ING-001-5", name: "Garlic", quantity: 0.02, unit: "kg", unitCost: 125.00, totalCost: 2.50 }
    ],
    totalCost: 124.00,
    costPerServing: 31.00
  },
  {
    id: "RCP-002",
    name: "Grilled Salmon with Vegetables",
    category: "Main Course",
    servings: 2,
    prepTime: "25 minutes",
    status: "active",
    ingredients: [
      { id: "ING-002-1", name: "Fresh Salmon", quantity: 0.4, unit: "kg", unitCost: 580.00, totalCost: 232.00 },
      { id: "ING-002-2", name: "Broccoli", quantity: 0.2, unit: "kg", unitCost: 95.00, totalCost: 19.00 },
      { id: "ING-002-3", name: "Bell Peppers", quantity: 0.15, unit: "kg", unitCost: 85.00, totalCost: 12.75 },
      { id: "ING-002-4", name: "Olive Oil", quantity: 0.03, unit: "liters", unitCost: 320.00, totalCost: 9.60 },
      { id: "ING-002-5", name: "Sea Salt", quantity: 0.01, unit: "kg", unitCost: 45.00, totalCost: 0.45 }
    ],
    totalCost: 273.80,
    costPerServing: 136.90
  },
  {
    id: "RCP-003",
    name: "Beef Burger Deluxe",
    category: "Main Course",
    servings: 4,
    prepTime: "20 minutes",
    status: "active",
    ingredients: [
      { id: "ING-003-1", name: "Ground Beef", quantity: 0.6, unit: "kg", unitCost: 280.00, totalCost: 168.00 },
      { id: "ING-003-2", name: "White Bread", quantity: 4, unit: "loaves", unitCost: 48.00, totalCost: 192.00 },
      { id: "ING-003-3", name: "Cheddar Cheese", quantity: 0.2, unit: "kg", unitCost: 180.00, totalCost: 36.00 },
      { id: "ING-003-4", name: "Romaine Lettuce", quantity: 0.1, unit: "kg", unitCost: 45.00, totalCost: 4.50 },
      { id: "ING-003-5", name: "Cherry Tomatoes", quantity: 0.2, unit: "kg", unitCost: 120.00, totalCost: 24.00 },
      { id: "ING-003-6", name: "Onions", quantity: 0.1, unit: "kg", unitCost: 42.00, totalCost: 4.20 }
    ],
    totalCost: 428.70,
    costPerServing: 107.18
  },
  {
    id: "RCP-004",
    name: "Tropical Fruit Smoothie",
    category: "Beverages",
    servings: 2,
    prepTime: "5 minutes",
    status: "active",
    ingredients: [
      { id: "ING-004-1", name: "Bananas", quantity: 0.3, unit: "kg", unitCost: 55.00, totalCost: 16.50 },
      { id: "ING-004-2", name: "Mangoes", quantity: 0.2, unit: "kg", unitCost: 120.00, totalCost: 24.00 },
      { id: "ING-004-3", name: "Fresh Milk", quantity: 0.5, unit: "liters", unitCost: 85.00, totalCost: 42.50 },
      { id: "ING-004-4", name: "Greek Yogurt", quantity: 0.2, unit: "kg", unitCost: 95.00, totalCost: 19.00 },
      { id: "ING-004-5", name: "Honey", quantity: 0.05, unit: "kg", unitCost: 280.00, totalCost: 14.00 }
    ],
    totalCost: 116.00,
    costPerServing: 58.00
  }
];

export const samplePOSOrders = [
  {
    id: "POS-001",
    receiptNo: "RCP-20260601-001",
    recipeName: "Classic Caesar Salad",
    recipeId: "RCP-001",
    quantity: 8,
    completedDate: "2026-06-01T12:30:00",
    completedBy: "Maria Santos",
    status: "completed",
    ingredients: [
      { item: "Romaine Lettuce", quantityNeeded: 2.4, currentStock: 15, unit: "kg", hasEnoughStock: true },
      { item: "Cheddar Cheese", quantityNeeded: 0.8, currentStock: 15, unit: "kg", hasEnoughStock: true },
      { item: "Chicken Breast", quantityNeeded: 3.2, currentStock: 20, unit: "kg", hasEnoughStock: true },
      { item: "Olive Oil", quantityNeeded: 0.4, currentStock: 15, unit: "liters", hasEnoughStock: true },
      { item: "Garlic", quantityNeeded: 0.16, currentStock: 8, unit: "kg", hasEnoughStock: true }
    ]
  },
  {
    id: "POS-002",
    receiptNo: "RCP-20260601-002",
    recipeName: "Grilled Salmon with Vegetables",
    recipeId: "RCP-002",
    quantity: 5,
    completedDate: "2026-06-01T13:45:00",
    completedBy: "John Reyes",
    status: "completed",
    ingredients: [
      { item: "Fresh Salmon", quantityNeeded: 2.0, currentStock: 10, unit: "kg", hasEnoughStock: true },
      { item: "Broccoli", quantityNeeded: 1.0, currentStock: 10, unit: "kg", hasEnoughStock: true },
      { item: "Bell Peppers", quantityNeeded: 0.75, currentStock: 12, unit: "kg", hasEnoughStock: true },
      { item: "Olive Oil", quantityNeeded: 0.15, currentStock: 15, unit: "liters", hasEnoughStock: true }
    ]
  },
  {
    id: "POS-003",
    receiptNo: "RCP-20260602-001",
    recipeName: "Beef Burger Deluxe",
    recipeId: "RCP-003",
    quantity: 12,
    completedDate: "2026-06-02T14:20:00",
    completedBy: "Maria Santos",
    status: "completed",
    ingredients: [
      { item: "Ground Beef", quantityNeeded: 7.2, currentStock: 18, unit: "kg", hasEnoughStock: true },
      { item: "White Bread", quantityNeeded: 48, currentStock: 30, unit: "loaves", hasEnoughStock: false },
      { item: "Cheddar Cheese", quantityNeeded: 2.4, currentStock: 15, unit: "kg", hasEnoughStock: true },
      { item: "Romaine Lettuce", quantityNeeded: 1.2, currentStock: 15, unit: "kg", hasEnoughStock: true }
    ]
  }
];

export const sampleTransfers = [
  {
    id: "TRF-001",
    date: "2026-06-01",
    fromLocation: "Cold Storage A",
    toLocation: "Kitchen Prep Area",
    transferredBy: "Maria Santos",
    items: [
      { productName: "Romaine Lettuce", quantity: 5, unit: "kg", notes: "For lunch service" },
      { productName: "Cherry Tomatoes", quantity: 3, unit: "kg", notes: "For lunch service" }
    ],
    status: "completed",
    notes: "Transferred for daily meal preparation"
  },
  {
    id: "TRF-002",
    date: "2026-06-02",
    fromLocation: "Freezer A",
    toLocation: "Kitchen Main",
    transferredBy: "John Reyes",
    items: [
      { productName: "Chicken Breast", quantity: 8, unit: "kg", notes: "Thawing for dinner service" },
      { productName: "Ground Beef", quantity: 6, unit: "kg", notes: "For burger prep" }
    ],
    status: "completed",
    notes: "Daily protein transfer for evening service"
  }
];

export const sampleAdjustments = [
  {
    id: "ADJ-001",
    date: "2026-06-01",
    item: "Romaine Lettuce",
    quantity: 2,
    type: "damage",
    reason: "Wilted during storage",
    adjustedBy: "Maria Santos"
  },
  {
    id: "ADJ-002",
    date: "2026-06-01",
    item: "Cherry Tomatoes",
    quantity: 1.5,
    type: "shrinkage",
    reason: "Natural moisture loss",
    adjustedBy: "John Reyes"
  },
  {
    id: "ADJ-003",
    date: "2026-06-02",
    item: "Spinach",
    quantity: 1,
    type: "waste",
    reason: "Expired - past use date",
    adjustedBy: "Maria Santos"
  }
];

export const sampleWasteLogs = [
  {
    id: "WASTE-001",
    date: "2026-06-01",
    item: "Spinach",
    quantity: 1,
    unit: "kg",
    reason: "Expired",
    loggedBy: "Maria Santos"
  },
  {
    id: "WASTE-002",
    date: "2026-06-02",
    item: "Strawberries",
    quantity: 0.5,
    unit: "kg",
    reason: "Mold development",
    loggedBy: "John Reyes"
  }
];

export const sampleInventoryMovements = [
  {
    item: "Romaine Lettuce",
    quantity: 2.4,
    type: "pos-consumption",
    date: "2026-06-01",
    reference: "POS-001"
  },
  {
    item: "Chicken Breast",
    quantity: 3.2,
    type: "pos-consumption",
    date: "2026-06-01",
    reference: "POS-001"
  },
  {
    item: "Fresh Salmon",
    quantity: 2.0,
    type: "pos-consumption",
    date: "2026-06-01",
    reference: "POS-002"
  },
  {
    item: "Ground Beef",
    quantity: 7.2,
    type: "pos-consumption",
    date: "2026-06-02",
    reference: "POS-003"
  },
  {
    item: "Romaine Lettuce",
    quantity: 2,
    type: "damage",
    date: "2026-06-01",
    reference: "ADJ-001"
  },
  {
    item: "Spinach",
    quantity: 1,
    type: "waste",
    date: "2026-06-01",
    reference: "WASTE-001"
  }
];

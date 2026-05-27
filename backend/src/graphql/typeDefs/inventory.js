const inventoryType = `#graphql

type Inventory {
  id: ID!
  itemName: String!
  category: String
  quantity: Float
  unit: String
  buyingPrice: Float
  sellingPrice: Float
  minimumStockLevel: Float
  supplier: String
  notes: String
  createdBy: User
  createdAt: String
  updatedAt: String
}

type StockMovement {
  id: ID!
  inventoryItem: Inventory
  movementType: String
  quantity: Float
  reason: String
  project: Project
  notes: String
  recordedBy: User
  createdAt: String
  updatedAt: String
}

type Query {
  inventoryItems: [Inventory]
  inventoryItem(id: ID!): Inventory
  lowStockItems: [Inventory]
  stockMovements: [StockMovement]
  stockMovementsByItem(inventoryItem: ID!): [StockMovement]
}

type Mutation {
  createInventoryItem(
    itemName: String!
    category: String
    quantity: Float
    unit: String
    buyingPrice: Float
    sellingPrice: Float
    minimumStockLevel: Float
    supplier: String
    notes: String
  ): Inventory

  updateInventoryItem(
    id: ID!
    itemName: String
    category: String
    quantity: Float
    unit: String
    buyingPrice: Float
    sellingPrice: Float
    minimumStockLevel: Float
    supplier: String
    notes: String
  ): Inventory

  stockIn(
    inventoryItem: ID!
    quantity: Float!
    reason: String
    notes: String
  ): Inventory

  stockOut(
    inventoryItem: ID!
    quantity: Float!
    reason: String
    project: ID
    notes: String
  ): Inventory

  deleteInventoryItem(id: ID!): String
}

`;

export default inventoryType;
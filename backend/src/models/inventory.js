import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      enum: ["PIPE", "PAINT", "ROD", "HINGE", "SHEET", "TOOLS", "OTHER"],
      default: "OTHER"
    },

    quantity: {
      type: Number,
      default: 0
    },

    unit: {
      type: String,
      default: "pcs"
    },

    buyingPrice: {
      type: Number,
      default: 0
    },

    sellingPrice: {
      type: Number,
      default: 0
    },

    minimumStockLevel: {
      type: Number,
      default: 5
    },

    supplier: String,

    notes: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Inventory = mongoose.model("Inventory", InventorySchema);

export default Inventory;
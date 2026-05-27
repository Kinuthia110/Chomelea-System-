import mongoose from "mongoose";

const StockMovementSchema = new mongoose.Schema(
  {
    inventoryItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
      required: true
    },

    movementType: {
      type: String,
      enum: ["IN", "OUT"],
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    reason: {
      type: String,
      enum: ["PURCHASE", "PROJECT_USAGE", "ADJUSTMENT", "RETURN", "DAMAGE"],
      default: "ADJUSTMENT"
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    notes: String,

    recordedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const StockMovement = mongoose.model("StockMovement", StockMovementSchema);

export default StockMovement;
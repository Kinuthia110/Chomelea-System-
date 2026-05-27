import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    quotationNumber: {
      type: String,
      unique: true
    },

    items: [
      {
        itemName: String,

        quantity: Number,

        unitPrice: Number,

        total: Number
      }
    ],

    laborCost: {
      type: Number,
      default: 0
    },

    transportCost: {
      type: Number,
      default: 0
    },

    subtotal: {
      type: Number,
      default: 0
    },

    tax: {
      type: Number,
      default: 0
    },

    grandTotal: {
      type: Number,
      default: 0
    },

    status: {
      type: String,

      enum: [
        "PENDING",
        "APPROVED",
        "REJECTED"
      ],

      default: "PENDING"
    },

    notes: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Quotation = mongoose.model(
  "Quotation",
  QuotationSchema
);

export default Quotation;
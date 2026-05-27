import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: String,
      unique: true
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    quotation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation"
    },

    items: [
      {
        itemName: String,

        quantity: Number,

        unitPrice: Number,

        total: Number
      }
    ],

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

    amountPaid: {
      type: Number,
      default: 0
    },

    balance: {
      type: Number,
      default: 0
    },

    paymentStatus: {
      type: String,

      enum: [
        "UNPAID",
        "PARTIAL",
        "PAID"
      ],

      default: "UNPAID"
    },

    invoiceStatus: {
      type: String,

      enum: [
        "DRAFT",
        "SENT",
        "COMPLETED",
        "CANCELLED"
      ],

      default: "DRAFT"
    },

    dueDate: Date,

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

const Invoice = mongoose.model(
  "Invoice",
  InvoiceSchema
);

export default Invoice;
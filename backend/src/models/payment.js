import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    paymentNumber: {
      type: String,
      unique: true
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true
    },

    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice"
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },

    amount: {
      type: Number,
      required: true
    },

    paymentMethod: {
      type: String,
      enum: ["MPESA", "CASH", "BANK"],
      default: "CASH"
    },

    transactionCode: String,

    notes: String,

    receivedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
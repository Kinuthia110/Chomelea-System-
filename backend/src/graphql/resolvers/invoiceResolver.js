import generateInvoicePDF from "../../utils/generateInvoicePDF.js";
const invoiceType = `#graphql

type InvoiceItem {

  itemName: String

  quantity: Float

  unitPrice: Float

  total: Float

}

input InvoiceItemInput {

  itemName: String!

  quantity: Float!

  unitPrice: Float!

}

type Invoice {

  id: ID!

  invoiceNumber: String

  customer: Customer

  project: Project

  quotation: Quotation

  items: [InvoiceItem]

  subtotal: Float

  tax: Float

  grandTotal: Float

  amountPaid: Float

  balance: Float

  paymentStatus: String

  invoiceStatus: String

  dueDate: String

  notes: String

  createdBy: User

  createdAt: String

}

type Query {

  invoices: [Invoice]

  invoice(id: ID!): Invoice

}

type Mutation {

  createInvoice(

    customer: ID!

    quotation: ID

    project: ID

    items: [InvoiceItemInput!]!

    tax: Float

    dueDate: String

    notes: String

  ): Invoice


  recordInvoicePayment(

    id: ID!

    amount: Float!

  ): Invoice


  updateInvoiceStatus(

    id: ID!

    status: String!

  ): Invoice

generateInvoicePDF: async (_, { id }, { req }) => {
  const user = await auth(req);

  authorize("ADMIN", "MANAGER")(user);

  const invoice = await Invoice.findById(id)
    .populate("customer")
    .populate("project")
    .populate("quotation")
    .populate("createdBy");

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const pdfUrl = await generateInvoicePDF(invoice);

  return pdfUrl;
},
  deleteInvoice(id: ID!): String

}

`;

export default invoiceType;
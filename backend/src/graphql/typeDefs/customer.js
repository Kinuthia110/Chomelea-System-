const customerType = `#graphql

type Customer {
  id: ID!
  fullName: String!
  phone: String!
  email: String
  location: String
  notes: String
  createdBy: User
  createdAt: String
  updatedAt: String
}

type Query {
  customers: [Customer]
  customer(id: ID!): Customer
}

type Mutation {
  createCustomer(
    fullName: String!
    phone: String!
    email: String
    location: String
    notes: String
  ): Customer

  updateCustomer(
    id: ID!
    fullName: String
    phone: String
    email: String
    location: String
    notes: String
  ): Customer

  deleteCustomer(id: ID!): String
}

`;

export default customerType;
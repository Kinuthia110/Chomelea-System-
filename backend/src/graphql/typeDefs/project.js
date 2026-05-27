const projectType = `#graphql

type Measurements {
  width: Float
  height: Float
  unit: String
}

type Project {
  id: ID!
  customer: Customer!
  projectTitle: String!
  description: String
  category: String
  status: String
  measurements: Measurements
  totalCost: Float
  depositPaid: Float
  balance: Float
  assignedWorkers: [User]
  startDate: String
  deadline: String
  completionDate: String
  images: [String]
  createdBy: User
  createdAt: String
  updatedAt: String
}

type Query {
  projects: [Project]
  project(id: ID!): Project
  projectsByStatus(status: String!): [Project]
}

type Mutation {
  createProject(
    customer: ID!
    projectTitle: String!
    description: String
    category: String
    width: Float
    height: Float
    unit: String
    totalCost: Float
    depositPaid: Float
    startDate: String
    deadline: String
  ): Project

  updateProject(
    id: ID!
    projectTitle: String
    description: String
    category: String
    status: String
    width: Float
    height: Float
    unit: String
    totalCost: Float
    depositPaid: Float
    startDate: String
    deadline: String
    completionDate: String
  ): Project

  updateProjectStatus(
    id: ID!
    status: String!
  ): Project

  assignWorkersToProject(
    id: ID!
    workerIds: [ID!]!
  ): Project

  deleteProject(id: ID!): String
}

`;

export default projectType;
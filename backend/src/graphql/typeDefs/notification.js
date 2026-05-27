const notificationType = `#graphql

type Notification {
  type: String
  title: String
  message: String
  severity: String
  createdAt: String
}

type Query {
  notifications: [Notification]
}

`;

export default notificationType;
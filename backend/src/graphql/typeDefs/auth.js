const authType = `#graphql

type AuthResponse {

  token: String!

  user: User!

}

type Mutation {

  register(

    fullName: String!

    email: String!

    phone: String

    password: String!

  ): AuthResponse


  login(

    email: String!

    password: String!

  ): AuthResponse

}

`;

export default authType;
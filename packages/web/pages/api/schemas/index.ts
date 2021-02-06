import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type User {
    _id: ID
    login: String
    email: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
  }

  type Mutation {
    createUser(user: UserInput): String
  }
`;

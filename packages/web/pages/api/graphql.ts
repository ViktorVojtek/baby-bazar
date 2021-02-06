import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import connectToDb from "./db";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

(async function establishDbConnection() {
  await connectToDb();
})();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });

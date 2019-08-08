import { ApolloServer } from "apollo-server-express";
import { WebApp } from "meteor/webapp";

import resolvers from "/imports/api/server/resolvers";

// import { GraphQLDate, GraphQLDateTime, GraphQLTime } from "graphql-iso-date";
import { schema as baseSchema } from "/imports/api/server/schema";
import "./db-connection";

const server = new ApolloServer({
  typeDefs: [
    baseSchema,
  ],
  resolvers: { ...resolvers },
  // schemaDirectives: {
  //   constraint: ConstraintDirective,
  // },
  // context: async ({ req }) => ({
  //   user: await getUser(req.headers.authorization),
  // }),
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql",
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});

console.log("Apollo server started");

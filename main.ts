import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import { Resolvers } from "./resolvers-types";

const typeDefs = readFileSync("./schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: {
    // typed resolvers!
  },
};

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.log("GraphQL Server is listening on http://localhost:4000/graphql");
});

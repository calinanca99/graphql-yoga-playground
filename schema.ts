import { readFileSync } from "fs";
import { createSchema } from "graphql-yoga";
import { Resolvers } from "./resolvers-types";
import { queryResolvers, authorResolvers, postResolvers } from "./queries";

const typeDefs = readFileSync("./schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: queryResolvers,
  Author: authorResolvers,
  Post: postResolvers,
};

export const schema = createSchema({ typeDefs, resolvers });

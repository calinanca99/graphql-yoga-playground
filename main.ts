import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const yoga = createYoga({ schema });
const server = createServer(yoga);

server.listen(4000, () => {
  console.log("GraphQL Server is listening on http://localhost:4000/graphql");
});

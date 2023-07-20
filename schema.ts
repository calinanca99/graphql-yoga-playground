import { readFileSync } from "fs";
import { createSchema } from "graphql-yoga";
import {
  getAuthorById,
  getPostById,
  getAuthorPosts,
  getAuthorByPostId,
} from "./query";
import { Resolvers } from "./resolvers-types";

const typeDefs = readFileSync("./schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: {
    author: (_root, args, _ctx) => {
      console.log("Calling `author` resolver");
      const author = getAuthorById(args.id);
      return {
        __typename: "Author",
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
      } as any;
    },
    post: (_root, args, _ctx) => {
      console.log("Calling `post` resolver");
      const post = getPostById(args.id);
      return {
        __typename: "Post",
        id: post.id,
        title: post.title,
      } as any;
    },
  },
  Author: {
    posts: (root, _args, _ctx) => {
      console.log("Calling `author.posts` resolver");
      const authorPosts = getAuthorPosts(root.id);
      return authorPosts.map((authorPost) => {
        return {
          __typename: "Post",
          ...authorPost,
        } as any;
      });
    },
  },
  Post: {
    author: (root, _args, _ctx) => {
      console.log("Calling `post.author` resolver");
      const postAuthor = getAuthorByPostId(root.id);
      return {
        __typename: "Author",
        id: postAuthor.id,
        firstName: postAuthor.firstName,
        lastName: postAuthor.lastName,
      } as any;
    },
  },
};

export const schema = createSchema({ typeDefs, resolvers });

import {
  getAuthorById,
  getPostById,
  getAuthorPosts,
  getAuthorByPostId,
} from "./query";
import {
  QueryResolvers,
  Resolvers,
  AuthorResolvers,
  PostResolvers,
} from "./resolvers-types";

/**
 * `Query` resolvers
 */
const authorResolver: QueryResolvers["author"] = (_root, args, _ctx) => {
  console.log("Calling `author` resolver");
  const author = getAuthorById(args.id);
  return {
    __typename: "Author",
    id: author.id,
    firstName: author.firstName,
    lastName: author.lastName,
  } as any;
};

const postResolver: QueryResolvers["post"] = (_root, args, _ctx) => {
  console.log("Calling `post` resolver");
  const post = getPostById(args.id);
  return {
    __typename: "Post",
    id: post.id,
    title: post.title,
  } as any;
};

export const queryResolvers: Resolvers["Query"] = {
  author: authorResolver,
  post: postResolver,
};

/**
 * `Author` resolvers
 */
const authorPostsResolver: AuthorResolvers["posts"] = (root, _args, _ctx) => {
  console.log("Calling `author.posts` resolver");
  const authorPosts = getAuthorPosts(root.id);
  return authorPosts.map((authorPost) => {
    return {
      __typename: "Post",
      ...authorPost,
    } as any;
  });
};

export const authorResolvers: Resolvers["Author"] = {
  posts: authorPostsResolver,
};

/**
 * `Post` resolvers
 */
const postAuthorResolver: PostResolvers["author"] = (root, _args, _ctx) => {
  console.log("Calling `post.author` resolver");
  const postAuthor = getAuthorByPostId(root.id);
  return {
    __typename: "Author",
    id: postAuthor.id,
    firstName: postAuthor.firstName,
    lastName: postAuthor.lastName,
  } as any;
};

export const postResolvers: Resolvers["Post"] = {
  author: postAuthorResolver,
};

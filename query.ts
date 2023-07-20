export const getAuthorById = (authorId: string) => {
  return {
    id: "author-1",
    firstName: "First Name",
    lastName: "Last Name",
  };
};

export const getPostById = (postId: string) => {
  return {
    id: "post-1",
    title: "Title",
  };
};

export const getAuthorPosts = (authorId: string) => {
  return [
    {
      id: "post-1",
      title: "Title",
    },
  ];
};

export const getAuthorByPostId = (postId: string) => {
  return {
    id: "author-1",
    firstName: "First Name",
    lastName: "Last Name",
  };
};

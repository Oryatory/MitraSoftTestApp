import axios from "axios";

export const getPosts = async () => {
  const request = await axios("https://jsonplaceholder.typicode.com/posts");
  return await request.data;
};

export const getComments = async (id: number) => {
  const request = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return await request.data;
};

export const getUserPosts = async (id: number) => {
  const request = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  return await request.data;
};

export const getUserInfo = async (id: number) => {
  const request = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await request.data;
};

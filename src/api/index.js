import axios from "axios";

export const getPosts = async () => {
  const request = await axios("https://jsonplaceholder.typicode.com/posts");
  return await request.data;
};

export const getComments = async (id) => {
  const request = await axios(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return await request.data;
};

import axios from "axios";

const url = "http://localhost:3000/posts";

export const fetchPosts = async () => await axios.get(url);
export const createPost = async (newPost) => await axios.post(url, newPost);
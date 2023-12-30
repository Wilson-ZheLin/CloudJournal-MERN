import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use((req) => {
   if(localStorage.getItem('profile')) {
       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
   }
   return req;
});

export const fetchPosts = async () => await API.get('/posts');
export const fetchPostBySearch = async (searchQuery) => await API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = async (newPost) => await API.post('/posts', newPost);
export const updatePost = async (id, updatedPost) => await API.patch(`/posts/${id}`, updatedPost);
export const deletePost = async (id) => await API.delete(`/posts/${id}`);
export const likePost = async (id) => await API.patch(`/posts/${id}/likePost`);

export const signIn = async (formData) => await API.post('/user/signin', formData);
export const signUp = async (formData) => await API.post('/user/signup', formData);
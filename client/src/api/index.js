import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');
    if (profile) {
        const parsedProfile = JSON.parse(profile);
        const token = parsedProfile.token || parsedProfile.credential;
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
    }
    return req;
});

export const fetchPost = async (id) => await API.get(`/posts/${id}`);
export const fetchPosts = async (page) => await API.get(`/posts?page=${page}`);
export const fetchPostBySearch = async (searchQuery) => await API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = async (newPost) => await API.post('/posts', newPost);
export const updatePost = async (id, updatedPost) => await API.patch(`/posts/${id}`, updatedPost);
export const deletePost = async (id) => await API.delete(`/posts/${id}`);
export const likePost = async (id) => await API.patch(`/posts/${id}/likePost`);
export const comment = async (value, id) => await API.post(`/posts/${id}/commentPost`, { value });

export const signIn = async (formData) => await API.post('/user/signin', formData);
export const signUp = async (formData) => await API.post('/user/signup', formData);
export const getUser = async (id) => await API.get(`/user/${id}`);
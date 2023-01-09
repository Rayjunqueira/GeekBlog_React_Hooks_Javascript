import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API
});

export const useApi = () => ({
    getAllPosts: async () => {
        const response = await api.get('/post');
        return response.data;
    },
    getAllCategories: async () => {
        const response = await api.get('/category');
        return response.data;
    },
    getPostById: async (id) => {
        const response = await api.get(`/post/${id}`);
        return response.data;
    },
    getPopularById: async (id) => {
        const response = await api.get(`/popular/${id}`);
        return response.data;
    },
    getCategoryById: async (id) => {
        const response = await api.get(`/category/${id}`);
        return response.data;
    },
}); 
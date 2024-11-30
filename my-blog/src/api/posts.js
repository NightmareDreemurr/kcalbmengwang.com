// api/posts.js
import axios from 'axios';

// 获取所有文章
export const getAllPosts = async () => {
    try {
        const response = await axios.get('/api/posts'); // 假设后端接口是 /api/posts
        return response.data; // 返回文章列表
    } catch (error) {
        throw error;
    }
};

// 删除文章
export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`/api/posts/${id}`); // 假设后端接口是 /api/posts/:id
        return response.data; // 返回删除操作结果
    } catch (error) {
        throw error;
    }
};

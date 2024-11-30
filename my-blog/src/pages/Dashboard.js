import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, deletePost } from '../api/posts'; // 假设已经有 API 函数用于获取所有文章和删除文章
import { useHistory } from 'react-router-dom'; // 用于页面跳转

const Dashboard = () => {
    const [posts, setPosts] = useState([]); // 存储文章列表
    const [isLoading, setIsLoading] = useState(true); // 加载状态
    const [error, setError] = useState(null); // 错误状态
    const history = useHistory(); // 页面跳转功能

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getAllPosts(); // 获取所有文章
                setPosts(response.data); // 假设返回的文章数据存在 `data` 字段
            } catch (err) {
                setError('加载文章失败');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deletePost(id); // 删除文章
            setPosts(posts.filter(post => post._id !== id)); // 更新文章列表
        } catch (err) {
            setError('删除失败');
        }
    };

    if (isLoading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="dashboard">
            <h1>后台管理</h1>
            <Link to="/create-post" className="btn btn-primary">创建新文章</Link>

            <h2>文章列表</h2>
            <table>
                <thead>
                <tr>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {posts.length === 0 ? (
                    <tr>
                        <td colSpan="3">暂无文章</td>
                    </tr>
                ) : (
                    posts.map(post => (
                        <tr key={post._id}>
                            <td>{post.title}</td>
                            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                            <td>
                                <Link to={`/edit-post/${post._id}`} className="btn btn-secondary">编辑</Link>
                                <button onClick={() => handleDelete(post._id)} className="btn btn-danger">删除</button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;

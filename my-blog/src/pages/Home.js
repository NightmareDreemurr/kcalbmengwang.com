import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

// Home 页面（或者 Posts 页面）
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // 假设你有一个 API 请求获取文章数据
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="home-page">
            <h1>最新文章</h1>
            <div className="post-cards">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Home;

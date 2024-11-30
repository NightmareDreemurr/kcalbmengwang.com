import React from 'react';
import { Link } from 'react-router-dom';

// PostCard 组件，用于展示每篇文章的卡片
const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            {/* 文章标题，点击后跳转到文章详情页 */}
            <h2 className="post-title">
                <Link to={`/post/${post.id}`} className="post-link">
                    {post.title}
                </Link>
            </h2>

            {/* 文章摘要 */}
            <p className="post-summary">{post.summary}</p>

            {/* 文章作者和发布时间 */}
            <div className="post-meta">
                <span className="post-author">By {post.author}</span>
                <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
            </div>

            {/* 文章分类标签 */}
            <div className="post-tags">
                {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag">
            <Link to={`/tag/${tag}`} className="post-tag-link">{tag}</Link>
          </span>
                ))}
            </div>
        </div>
    );
};

export default PostCard;

// post 数据结构应该是这样的：
// {
//     id: 1, // 文章的唯一ID
//         title: '如何使用 React 创建博客', // 文章标题
//     summary: '本文将教你如何使用 React 创建一个简单的博客应用...', // 文章摘要
//     author: '张三', // 文章作者
//     date: '2024-10-25T12:00:00Z', // 文章发布时间，ISO 格式日期字符串
//     tags: ['React', 'JavaScript', 'Web Development'] // 文章标签
// }

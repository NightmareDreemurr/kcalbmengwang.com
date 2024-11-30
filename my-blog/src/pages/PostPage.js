import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // 用于获取路由中的参数
import { getPostById } from '../api/posts'; // 假设你已经实现了获取单篇文章的API
import Markdown from 'react-markdown'; // 用于渲染Markdown
import remarkGfm from 'remark-gfm'; // 支持表情、任务列表等扩展语法

const PostPage = () => {
    const { id } = useParams(); // 获取URL中的文章ID
    const [post, setPost] = useState(null); // 存储文章数据
    const [isLoading, setIsLoading] = useState(true); // 加载状态
    const [error, setError] = useState(null); // 错误状态

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getPostById(id);
                setPost(response.data); // 假设返回的文章数据存在 `data` 字段
            } catch (err) {
                setError('文章加载失败，请稍后再试');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id]); // 每次id变化时重新请求文章

    if (isLoading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="post-page">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p><strong>作者：</strong>{post.author}</p>
                    <p><strong>发布时间：</strong>{new Date(post.createdAt).toLocaleDateString()}</p>

                    <div className="post-content">
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </Markdown>
                    </div>
                </>
            )}
        </div>
    );
};

export default PostPage;

import React, { useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import { useHistory } from 'react-router-dom';
import { createPost } from '../api/posts'; // 假设你已经实现了与后端的交互API

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory(); // 用于重定向用户
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (markdownContent) => {
        setIsSaving(true);
        try {
            const newPost = {
                title,
                content: markdownContent,
                createdAt: new Date().toISOString(), // 文章创建时间
            };

            // 调用API将文章保存到后台
            await createPost(newPost);

            // 重定向到文章列表或首页
            history.push('/posts');
        } catch (error) {
            console.error('保存文章失败:', error);
            alert('保存文章失败，请稍后再试');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="create-post">
            <h1>创建新文章</h1>

            <div className="input-group">
                <label htmlFor="title">标题</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="请输入文章标题"
                />
            </div>

            <MarkdownEditor initialContent={content} onSave={handleSave} />

            <div className="save-button-container">
                <button
                    onClick={() => handleSave(content)}
                    disabled={isSaving}
                    className="save-button">
                    {isSaving ? '保存中...' : '保存文章'}
                </button>
            </div>
        </div>
    );
};

export default CreatePost;

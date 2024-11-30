import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; // 用来渲染 Markdown
import { Editor } from 'react-markdown-editor-lite'; // Markdown 编辑器
import 'react-markdown-editor-lite/lib/index.css'; // 样式

// 使用 markdown-it 来解析 Markdown 内容
import markdownIt from 'markdown-it';
const mdParser = new markdownIt();

// MarkdownEditor 组件
const MarkdownEditor = ({ initialContent, onSave }) => {
    const [content, setContent] = useState(initialContent || ''); // 存储编辑内容

    useEffect(() => {
        if (initialContent) {
            setContent(initialContent); // 如果传入了初始内容，设置到编辑器中
        }
    }, [initialContent]);

    // 处理编辑器内容变化
    const handleEditorChange = ({ text }) => {
        setContent(text);
    };

    // 处理保存
    const handleSave = () => {
        if (onSave) {
            onSave(content); // 调用父组件传入的保存函数
        }
    };

    return (
        <div className="markdown-editor">
            <div className="editor-container">
                <h3>编辑文章</h3>
                {/* Markdown 编辑器 */}
                <Editor
                    value={content}
                    onChange={handleEditorChange}
                    renderHTML={(text) => mdParser.render(text)} // 渲染 Markdown 内容
                />
            </div>

            <div className="preview-container">
                <h3>预览</h3>
                {/* Markdown 预览区域 */}
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            <div className="save-button-container">
                <button onClick={handleSave} className="save-button">保存</button>
            </div>
        </div>
    );
};

export default MarkdownEditor;

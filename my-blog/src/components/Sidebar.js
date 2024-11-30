import React from 'react';
import { Link } from 'react-router-dom'; // 用于路由跳转

// 侧边栏组件
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>最新文章</h3>
                <ul className="sidebar-list">
                    <li><Link to="/post/1" className="sidebar-link">如何使用 React 创建博客</Link></li>
                    <li><Link to="/post/2" className="sidebar-link">前端性能优化技巧</Link></li>
                    <li><Link to="/post/3" className="sidebar-link">Git 和 GitHub 基础教程</Link></li>
                    <li><Link to="/post/4" className="sidebar-link">JavaScript 异步编程概述</Link></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>分类</h3>
                <ul className="sidebar-list">
                    <li><Link to="/category/web-development" className="sidebar-link">前端开发</Link></li>
                    <li><Link to="/category/backend" className="sidebar-link">后端开发</Link></li>
                    <li><Link to="/category/tutorials" className="sidebar-link">教程</Link></li>
                    <li><Link to="/category/other" className="sidebar-link">其他</Link></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>标签</h3>
                <ul className="sidebar-list">
                    <li><Link to="/tag/react" className="sidebar-link">React</Link></li>
                    <li><Link to="/tag/javascript" className="sidebar-link">JavaScript</Link></li>
                    <li><Link to="/tag/git" className="sidebar-link">Git</Link></li>
                    <li><Link to="/tag/css" className="sidebar-link">CSS</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

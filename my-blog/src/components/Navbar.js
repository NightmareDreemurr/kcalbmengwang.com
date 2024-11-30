import React from 'react';
import { Link } from 'react-router-dom'; // 用于路由跳转

// 导航栏组件
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    我的博客
                </Link>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">首页</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/posts" className="navbar-link">博客</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="navbar-link">关于我</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">联系我们</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

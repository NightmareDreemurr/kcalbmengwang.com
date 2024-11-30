import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; // 引入 Sidebar 组件
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Contact from './pages/Contact';
import PostPage from './pages/PostPage'; // 单篇文章页面
import Dashboard from './pages/Dashboard'; // 后台管理页面
import CreatePost from './pages/CreatePost'; // 创建新文章页面
import EditPost from './pages/EditPost';   // 编辑文章页面

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* 顶部导航栏 */}
                <Navbar />
                <div className="main-container">
                    {/* 左侧侧边栏 */}
                    <Sidebar />

                    {/* 右侧内容区 */}
                    <div className="content">
                        <Switch>
                            {/* 路由配置 */}
                            <Route path="/" exact component={Home} /> {/* 首页 */}
                            <Route path="/posts" component={Posts} /> {/* 文章列表页 */}
                            <Route path="/about" component={About} /> {/* 关于页面 */}
                            <Route path="/contact" component={Contact} /> {/* 联系页面 */}
                            <Route path="/post/:id" component={PostPage} /> {/* 单篇文章页 */}

                            {/* 后台管理相关路由 */}
                            <Route path="/dashboard" component={Dashboard} /> {/* 后台管理页 */}
                            <Route path="/create-post" component={CreatePost} /> {/* 创建文章页 */}
                            <Route path="/edit-post/:id" component={EditPost} /> {/* 编辑文章页 */}
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/auth'; // 你需要在api文件夹中创建auth.js，处理登录请求

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory(); // 使用useHistory来跳转到其他页面

    // 处理表单提交
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('用户名和密码不能为空');
            return;
        }

        try {
            const response = await login({ username, password });
            if (response.status === 200) {
                // 登录成功，跳转到后台管理或首页
                history.push('/dashboard'); // 假设成功后跳转到后台管理页面
            } else {
                setError('登录失败，请检查用户名和密码');
            }
        } catch (err) {
            setError('发生了错误，请稍后再试');
        }
    };

    return (
        <div className="login-container">
            <h2>登录</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="btn">登录</button>
            </form>
        </div>
    );
}

export default Login;

// pages/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรงนี้จะเป็นโค้ดสำหรับการล็อกอินจริง
    console.log('Login attempt with:', { username, password });
  };

  return (
    <div className="login-container">
      <h1>เข้าสู่ระบบ</h1>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">ชื่อผู้ใช้:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">รหัสผ่าน:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="login-button">เข้าสู่ระบบ</button>
      </form>
      
      <div className="login-footer">
        <p>ยังไม่มีบัญชี? <Link to="/register">สมัครสมาชิก</Link></p>
      </div>
    </div>
  );
}

export default Login;
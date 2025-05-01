// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">หน้าหลัก</Link></li>
            <li><Link to="/contact">ติดต่อเรา</Link></li>
            <li><Link to="/login">เข้าสู่ระบบ</Link></li>
            <li><Link to="/register">สมัครสมาชิก</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
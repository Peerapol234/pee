// pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>ยินดีต้อนรับ</h1>
      <div>
        <p>ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา</p>
        <img 
          src="/images/welcome.jpg" 
          alt="ภาพต้อนรับ" 
          className="welcome-image" 
        />
      </div>
    </div>
  );
}

export default Home;
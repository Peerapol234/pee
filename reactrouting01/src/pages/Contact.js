// pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>ติดต่อเรา แสงทอง168</h1>
      <div className="contact-info">
        <p><strong>ที่อยู่:</strong> 10/3 ถนนตัวอย่าง ยุดยา 13110</p>
        <p><strong>อีเมล:</strong> peerapol@example.com</p>
        <p><strong>เบอร์โทรศัพท์:</strong> 02-123-4567</p>
        
        <div className="contact-map">
          <img 
            src="/images/map.jpg" 
            alt="แผนที่ตั้งของบริษัท" 
            className="map-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
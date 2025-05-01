import { useState,useEffect } from "react";
// สร้ำงคอมโพเนนต์ UserList เพื่อแสดงรำยชื่อผู้ใช้งำนจำก API
const UserList = () => {
    // สร้ำง state ส ำหรับเก็บข้อมูลผู้ใช้งำน
const [users, setUsers] = useState([]);
// สร้ำง state ส ำหรับกำรโหลดข้อมูล
const [loading, setLoading] = useState(true);
// สร้ำง state ส ำหรับเก็บข้อควำม error
const [error, setError] = useState(null);
// สร้ำงฟังก์ชัน fetchData ส ำหรับดึงข้อมูลจำก API
const fetchData = async () => {
try {
// เริ่มกำรโหลดข้อมูล
setLoading(true);
// ดึงข้อมูลจำก API
const response = await fetch('https://jsonplaceholder.typicode.com/users');
// ตรวจสอบสถำนะกำรตอบกลับ
if (!response.ok) {
throw new Error(`เกิดข้อผิดพลำด: ${response.status}`);
}
// แปลงข้อมูลเป็น JSON
const data = await response.json();
// เก็บข้อมูลที่ได้ลงใน state
setUsers(data);
// สิ้นสุดกำรโหลดข้อมูล
setLoading(false);
} catch (err) {
// จัดกำรกับข้อผิดพลำด
setError(err.message);
setLoading(false);
}
};
// ใช้ useEffect เพื่อเรียกใช้ fetchData เมื่อคอมโพเนนต์ถูกโหลด
useEffect(() => {
fetchData();
}, []); // empty dependency array หมำยควำมว่ำจะท ำงำนเพียงครั้งเดียวเมื่อคอมโพเนนต์ถูกเรนเดอร์
// แสดงข้อควำมโหลดหำกอยู่ในสถำนะโหลดข้อมูล
if (loading) {
return <div>ก ำลังโหลดข้อมูล...</div>;
}
// แสดงข้อควำม error หำกเกิดข้อผิดพลำด
if (error) {
return <div>เกิดข้อผิดพลำด: {error}</div>;
}
return (
    <div className="user-list">
    <h2 className="nav1">รายชื่อผู้ใช้งาน</h2>
    <table className='table' border={1}>
            <thead className="thead">
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>WEBSITE</th>
            </thead>
    {users.map(user => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
        </tr>
    ))}
    </table>
    </div>
    );
    };
    export default UserList;
import React, { useEffect, useState } from 'react';

function ExampleComponent() {
const [data, setData] = useState(null);
// useEffect ที่ถูกใช้เมื่อ component ถูกเรนเดอร์
useEffect(() => {
// โค้ดที่จะท ำงำนเมื่อ component ถูกเรนเดอร์
fetchData();
// ฟังก์ชัน clean-up
return () => {
// โค้ดที่จะท ำงำนเมื่อ component ถูกท ำลำย
// เช่น กำรยกเลิก subscription, กำรลบ event listener
console.log('Component is unmounted.');
};
}, []); 
const fetchData = async () => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    setData(result);
    } catch (error) {
    console.error('Error fetching data:', error);
    }
    };
    return (
    <div>
        {
            <h2>แสดงข้อมูลที่ได้จาก API</h2>
        }
    {data && (
    <ul>
        <table className='table'>
            <thead className='thead'>
                <th>ID</th>
                <th>TIRLE</th>
            </thead>
    {data.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
        </tr>
    ))}
    </table>
    </ul>
    )}
    </div>
    );
    }
    export default ExampleComponent;
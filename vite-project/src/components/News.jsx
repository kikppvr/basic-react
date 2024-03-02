import "./News.css";
import Post from "./Post";
import { useState } from "react";

const posts = [
   {
      id: 0,
      title: "Microsoft Edge ออกอัพเดตแก้ไขบั๊ก Out of Memory ที่พบในผู้ใช้งานหลายคน",
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/edge_0.png?itok=UxGmWjpn",
      content: `ไมโครซอฟท์ออกอัพเดตฉุกเฉินเบราว์เซอร์ Microsoft Edge เวอร์ชัน 122.0.2365.66 หลังมีรายงานจากผู้ใช้งานว่าไม่สามารถโหลดหน้าเว็บไซต์ได้ 
      พร้อมข้อความเตือนว่า Out of Memory ก่อนหน้านี้ไมโครซอฟท์ออกอัพเดตย่อย Edge เวอร์ชัน 122.0.2365. ไมโครซอฟท์ออกอัพเดตฉุกเฉินเบราว์เซอร์ Microsoft Edge เวอร์ชัน 122.0.2365.66 หลังมีรายงานจากผู้ใช้งานว่าไม่สามารถโหลดหน้าเว็บไซต์ได้ 
      พร้อมข้อความเตือนว่า Out of Memory ก่อนหน้านี้ไมโครซอฟท์ออกอัพเดตย่อย Edge เวอร์ชัน`,
   },
   {
      id: 1,
      title: `เคส FineWoven ของ iPhone 15 Pro Max ถูกแปะป้าย "สินค้าถูกขอคืนเงินบ่อย" บน Amazon`,
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/apple.png?itok=qzSYiiGr",
      content: `การเปลี่ยนแปลงหนึ่งในตอนที่แอปเปิลเปิดตัว iPhone 15 และ Apple Watch รุ่นใหม่ คือ<a href="https://www.blognone.com/node/135710">การหยุดขายอุปกรณ์เสริมทั้งหมด</a>ที่ทำจากหนัง 
      ด้วยเหตุผลเพื่อสนับสนุนความเป็นกลางทางคาร์บอน (Carbon Neutral) ใช้วัสดุที่มีผลกระทบต่อสิ่งแวดล้อมในการผลิตน้อยที่สุด 
      จึงออกมาเป็นเคส iPhone และสาย Apple Watch วัสดุที่เรียกว่าผ้า FineWoven แทน`,
   },
   {
      id: 2,
      title: `เพื่อความปลอดภัยของผู้ใช้ - Google บล็อก RCS บน Android หากพบเครื่องมีการรูท`,
      img: "https://www.blognone.com/sites/default/files/styles/thumbnail/public/topics-images/rcs.png?itok=BKNr1jof",
      content: `มีรายงานจากผู้ใช้ Android ที่เครื่องมีการรูทหลายคน พบว่าไม่สามารถใช้ฟีเจอร์ RCS ใน Google Messages ได้ โดยไม่สามารถใช้ได้ทั้งรับและส่งข้อความ พร้อมข้อความเตือนว่า RCS ไม่ทำงาน
      กูเกิลยืนยันการบล็อก RCS นี้ แต่ใช้ข้อความแบบอ้อม ๆ ว่า กูเกิลต้องการให้การทำงานของ RCS อยู่บนระบบปฏิบัติการที่เป็นไปตามมาตรฐานของ RCS อย่างไรก็ตามเพื่อให้ผู้ใช้งานสามารถติดต่อสื่อสารได้ตามปกติ 
      กูเกิลยืนยันว่าจะมีโปรโตคอลอื่นใน Android ที่ยังสามารถใช้งานแทนได้เช่น SMS หรือ MMS การควบคุม RCS บนอุปกรณ์ Android ที่ปรับแต่งนั้น เป็นประเด็นที่กูเกิลพยายามแก้ไขมานาน ก่อนหน้านี้`,
   },
];

function News() {
   
   const [filterPosts, setFilterPosts] = useState(posts)

   const handleOnSearch = (event) => {
      
      const value = event.target.value;

      const filterItem = posts.filter((post) => {
         return post.title.toLowerCase().includes(value)
      })

      setFilterPosts(filterItem)
   }
   
   return (
      <div className="news">
         <input type="text" name="search-box" placeholder="ค้นหาข่าว" className="search-box" onChange={handleOnSearch}/>

         {filterPosts.map((post) => (
            <Post key={post.id} title={post.title} img={post.img}>
               {post.content}
            </Post>
         ))}
         
         <div>{filterPosts.length ? `พบผลลัพธ์ทั้งหมด ${filterPosts.length} รายการ` : "ไม่พบผลลัพธ์"}</div>
      </div>
   );
}

export default News;

import "./Post.css";
import { useState } from "react";

function Post(props) {
   const [like, setLike] = useState(null);
   const [love, setLove] = useState(null);
   const onClickLike = () => {
      setLike((prevState) => {
         return prevState + 1;
      });
   };

   const onClickLove = () => {
      setLove((prevState) => {
         return prevState + 1;
      });
   };
   // const onClickLike = (message) => alert(message);
   return (
      <div className="post">
         <div className="title">
            <h3>{props.title}</h3>
         </div>
         <div className="content">
            <img src={props.img} alt="" />
            <p>{props.children}</p>
         </div>

         <div className="reaction">
            <button className="like" onClick={onClickLike}>
               👍 {like}
            </button>
            <button className="love" onClick={onClickLove}>
               ❤️ {love}
            </button>
         </div>
      </div>
   );
}

export default Post;

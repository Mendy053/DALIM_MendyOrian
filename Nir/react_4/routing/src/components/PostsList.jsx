import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link, useParams } from "react-router-dom";

export default function PostsList(props) {
   const [posts, setPosts] = useState([]);
   const param = useParams()

   useEffect(() => {
      fetchData(`https://jsonplaceholder.typicode.com/posts${param.userId ? `?userId=${param.userId}` : ""}`).then((result) => {
         setPosts(result);
      });
   }, []);

   return (
      <div>
         {posts.map((post) => {
            return (
               <p key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>;
               </p>
            );
         })}
      </div>
   );
}

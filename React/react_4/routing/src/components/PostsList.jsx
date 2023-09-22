import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function PostsList(props) {
   const [posts, setPosts] = useState([]);
   const [param] = useSearchParams();

   useEffect(() => {
      fetchData(`https://jsonplaceholder.typicode.com/posts${param.get("userId") ? `?userId=${param.get("userId")}` : ""}`).then((result) => {
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

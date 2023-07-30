import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchData } from "../utils/fetchData";

export default function Post() {
   const params = useParams();
   const [post, setPost] = useState({});

   useEffect(() => {
      fetchData("https://jsonplaceholder.typicode.com/posts/" + params.postId).then((result) => {
         setPost(result);
      });
   }, []);

   return <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
   </>;
}

import React from "react";

export default function PostItem({ post }) {
  return (
    <div className="post">
      <h3>User ID: {post.userId}</h3>
      <h2>Post ID: {post.id}</h2>
      <h1>Post Title: {post.title}</h1>
      <h2>Post contents: {post.body}</h2>
    </div>
  );
}

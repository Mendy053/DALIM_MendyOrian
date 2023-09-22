import React from "react";
import PostItem from "./PostItem";

export default function PostsList(props) {
  return (
    <div className="posts-results">
      {props.posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

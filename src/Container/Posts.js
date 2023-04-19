import React from "react";
import Post from "../Component/Post";

function Posts(props) {
  return (
    <>
      {props.data.map((post) => {
        return (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            author={post.author}
            setPostDetails={()=>{props.postSelector(post)}}
          />
        );
      })}
    </>
  );
}

export default Posts;

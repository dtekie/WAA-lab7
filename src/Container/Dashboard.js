import React, { useState } from "react";
import Posts from "./Posts";
import PostDetails from "../Component/PostDetails";

function Dashboard() {
  const [posts, setPosts] = useState([
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Dean" },
    { id: 113, title: "Enjoy Life", author: "Jasmine" },
  ]);

  const [title, setTitle] = useState("");

  const changeTitle = () => {
    const postList = [...posts];
    postList[0].title = title;
    setPosts(postList);
  };

  const [postDetails, setPostDetails] = useState(null);
  const postSelector = (post)=>{
    setPostDetails(post);
    // console.log(post);
  }
  

  return (
    <div>
      <Posts data={posts} postSelector={postSelector} />
      <div>
        <input
          type="text"
          id="text"
          title="title"
          onChange={(title) => setTitle(title.target.value)}
        />
        <br />
        <button onClick={changeTitle}>Change Title </button>
      </div>
    
      { postDetails && <PostDetails postDetails={postDetails} />}
    </div>
  );
}

export default Dashboard;

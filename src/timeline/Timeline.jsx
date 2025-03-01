import React, { useState } from "react";
import "./Timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "userid",
      postImage:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      likes: 12,
      timestamp: "3시간",
    },
    {
      user: "userid2",
      postImage:
        "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      likes: 15,
      timestamp: "3시간",
    },
    {
      user: "userid3",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 22,
      timestamp: "3시간",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;

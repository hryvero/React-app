import React from "react";
import s from "./Posts.module.css";

export default function Posts() {
  return (
    <div className={s.posts}>
      <h1>My Posts</h1>

      <div>
        <textarea placeholder="write here"></textarea>
      </div>
      <button>Add Post</button>
    </div>
  );
}

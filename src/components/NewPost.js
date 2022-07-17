import { useState } from "react";
import styles from "../components/styles/NewPost.css"

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onAddPostHandler = () => {
    const post = {
      id: props.allPosts.length + 1,
      userId: props.posts[0].userId,
      title: title,
      body: body,
    };

    props.update(post);
  };
  return (
    <div className="new-post">
      <h4>New Post - User {props.posts[0].userId} </h4>
      Title:{" "}
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <br></br>
      Body:{" "}
      <input
        type="text"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      ></input>
      <div className="new-post-btns">
      <button className="new-post-btn" onClick={props.cancel}>Cancel</button>
      <button className="new-post-btn" onClick={onAddPostHandler}>Add</button>
        
      </div>
    </div>
  );
};

export default NewPost;

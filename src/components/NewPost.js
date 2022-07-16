import { useState } from "react";

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
    <div>
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
      <div>
        <button onClick={onAddPostHandler}>Add</button>
        <button onClick={props.cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NewPost;

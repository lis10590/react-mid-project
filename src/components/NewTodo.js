import { useState } from "react";

const NewTodo = (props) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onAddTodoHandler = () => {
    const todo = {
      title: title,
      userId: props.tasks[0].userId,
      completed: false,
      id: props.allTasks.length + 1,
    };

    props.update(todo);
  };

  return (
    <div>
      <h4>New Todo - User {props.tasks[0].userId}</h4>
      Title:{" "}
      <input type="text" onChange={titleChangeHandler} value={title}></input>
      <div>
        <button onClick={onAddTodoHandler}>Add</button>
        <button onClick={props.cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NewTodo;

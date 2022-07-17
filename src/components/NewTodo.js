import { useState } from "react";
import styles from "../components/styles/NewTodo.css"

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
    <div className="new-todo">
      <h4>New Todo - User {props.tasks[0].userId}</h4>
      Title:{" "}
      <input type="text" onChange={titleChangeHandler} value={title}></input>
      <div className="new-todo-btns">
       <button className="new-todo-btn" onClick={props.cancel}>Cancel</button>
        <button className="new-todo-btn" onClick={onAddTodoHandler}>Add</button>
        
      </div>
    </div>
  );
};

export default NewTodo;

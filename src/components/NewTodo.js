import { useState } from "react";

const NewTodo = (props) =>{

    
    const [tasks, setTasks] = useState([props.tasks]);
    const [title, setTitle] = useState("");

    let tasksArr = [];

    const titleChangeHandler = (e)=>{
        setTitle(e.target.value);
    }

    const addTodoHandler = () =>{
        const todos = {
            userId: props.tasks[0].userId,
            title,
            completed: false
        }
        
        tasksArr = props.tasks;

        tasksArr.push(todos)
        console.log(tasksArr);

        setTasks(tasksArr);
       
    }


   console.log(tasks);
    return(
        <div>
            <h4>New Todo - User {props.tasks[0].userId}</h4>
            Title: <input type="text" onChange={titleChangeHandler} value={title} ></input>
            <div>
            <button onClick={addTodoHandler}>Add</button>
            <button>Cancel</button>
            </div>
            
        </div>
    )
}


export default NewTodo;
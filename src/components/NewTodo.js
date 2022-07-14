import { useState } from "react";

const NewTodo = (props) =>{

    
    const [tasks, setTasks] = useState([props.tasks]);
    const [title, setTitle] = useState("");



    const titleChangeHandler = (e)=>{
        setTitle(e.target.value);
    }




   console.log(tasks);
    return(
        <div>
            <h4>New Todo - User {props.tasks[0].userId}</h4>
            Title: <input type="text" onChange={titleChangeHandler} value={title} ></input>
            <div>
            <button onClick={props.update} >Add</button>
            <button onClick={props.cancel}>Cancel</button>
            </div>
            
        </div>
    )
}


export default NewTodo;
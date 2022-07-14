import { useState } from "react"
import NewTodo from "./NewTodo";


const Todos = (props) =>{
    const [title, setTitle] = useState("");

    const titleChangeHandler = (e)=>{
        setTitle(e.target.value);
    }


    
    return (
        <div>
        <div>
            <h4>Todos- User {props.tasks ? props.tasks[0].userId: null}</h4>
            <button >Add</button>
            {
                props.tasks.map(task=>{
                    return (
                        <div key={task.id}>
            <p> Title: {task.title}</p>
            <p>Completed:{task.completed}</p>
                        </div>
                    )
                })
            }
            
           
        </div>
        <div>
         {/* <NewTodo tasks={props.tasks} />  */}

         <h4>New Todo - User {props.tasks[0].userId}</h4>
            Title: <input type="text" onChange={titleChangeHandler} value={title} ></input>
            <div>
            <button >Add</button>
            <button>Cancel</button>
            </div>

        </div>
        </div>
    )
}



export default Todos;
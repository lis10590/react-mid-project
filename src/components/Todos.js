import { useState } from "react";

const Todos = (props) =>{

    const [tasksList, setTasksList] = useState([]);

    const onIdClickHandler = (id) =>{
        const tasks = props.tasks.filter(task=> task.userId === id);
        console.log(tasks)
       setTasksList(tasks);
    }

    
    return (
        <div>
            <h4>Todos- User {tasksList.userId}</h4>
            <p> Title: {tasksList.title}</p>
            <p>Completed:{tasksList.completed}</p>
        </div>
    )
}



export default Todos;
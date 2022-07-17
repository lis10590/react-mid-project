import styles from "../components/styles/Todos.css"


const Todos = (props) => {
  return (
    
      <div >
        <h4>Todos- User {props.tasks ? props.tasks[0].userId : null}</h4>

        {props.tasks.map((task) => {
          return (
            <div className="todos" key={task.id}>
              <p> Title: {task.title}</p>
              <p>Completed:{task.completed ? "True" : "False"}</p>
            </div>
          );
        })}
      </div>
    
    
  );
};

export default Todos;

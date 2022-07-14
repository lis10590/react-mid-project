import { useEffect, useState } from "react";
import OtherData from "./OtherData";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import NewPost from "./NewPost";
import NewUser from "./NewUser";
import styles from "./styles/HomePage.css";
import axios from "axios";
import Posts from "./Posts";

const HomePage = ()=>{

    const [users,setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");
    const [otherData,setOtherData] = useState([]);
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [tasksList, setTasksList] = useState([]);
    const [postsList, setPostsList] = useState([]);
    const [isUpdateClicked,setIsUpdateClicked] = useState(false);
    const [isPost, setIsPost] = useState(false)
    const [isAddTodoClicked, setIsAddTodoClicked] = useState(false);
    const [isAddPostClicked, setIsAddPostClicked] = useState(false);
    const [isAddUserClicked, setIsAddUserClicked] = useState(false);
    const [todosUpdate, setTodosUpdate] = useState([todos]);
    
   
    


   const getUsers = async() =>{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    let usersData = resp.data;
    let len = usersData.length;
    setOtherData(new Array(len).fill(false));
    setUsers(usersData);
    console.log(otherData)
   }

   const getTodos = async() =>{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    let todosData = resp.data; 
    setTodos(todosData);
   }

   const getPosts = async() =>{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let postsData = resp.data; 
    setPosts(postsData);
   }



   
   useEffect(()=>{
    getUsers();
    getTodos();
    getPosts();
 
    
 },[])

const search = (e)=>{
    setQuery(e.target.value);
}




const HandleOnClick = (position) =>{
    const updatedClickStage = otherData.map((item,index)=>{
       return index === position ? !item : item
    })

    setOtherData(updatedClickStage)
}

const onNameChangeHandler = (e) =>{
    setName(e.target.value);
}

const onEmailChangeHandler = (e)=>{
    setEmail(e.target.value);
}

const onIdClickHandler = (id) =>{
    const tasks = todos.filter(task=> task.userId === id);
    console.log(tasks)
   setTasksList(tasks);
   const postsDataList = posts.filter(post=> post.userId === id);
   console.log(postsList);
   setPostsList(postsDataList);
   setIsUpdateClicked(!isUpdateClicked);
   setIsPost(!isPost);
}

const onAddTodoHandler = () =>{
    setIsAddTodoClicked(true);
    setIsUpdateClicked(false);
    setIsPost(false);
}

const onAddPostHandler = () =>{
    setIsAddPostClicked(true);
    setIsUpdateClicked(false);
    setIsPost(false);

}

const onCancelTodo = () =>{
    setIsAddTodoClicked(false);
    setIsUpdateClicked(true);
    setIsPost(true);

}

const onCancelPost = () =>{
    setIsAddPostClicked(false);
    setIsUpdateClicked(true);
    setIsPost(true);

}

const onAddUserHandler = () =>{
    setIsAddUserClicked(true);
}

const updateTodos = (title) =>{
    const todos = {
        
    }
}




   return(
       <div>
        
      <div className="row">
          <div className="column">
          Search <input type="text" value={query} onChange={search}></input> &nbsp; 
           <button onClick={onAddUserHandler}>Add</button>
          {
              users.filter(item=>item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) )
          .map(user=>{
              return <div key={user.id}>
   <label onClick={()=>{onIdClickHandler(user.id)}}> ID:</label> {users?user.id:null} <br></br>
          Name: <input type="text" placeholder={users? user.name : null} value={name} onChange={onNameChangeHandler} ></input> <br></br>
          Email: <input type="text" value={ email} placeholder={users? user.email : null} onChange={onEmailChangeHandler}></input> <br></br>
          <button onClick={()=>{HandleOnClick(user.id)}} >Other Data</button>&nbsp; <br></br>
         {otherData[user.id] && <OtherData details={user}/>}
          <button>Update</button>
          <button>Delete</button>
              </div>
          })}
          </div>
          <div className="column">
          {isUpdateClicked &&  
          <div>
            <button onClick={onAddTodoHandler}>Add</button>
            <Todos tasks={tasksList} />
          </div>
           
          }

          {
            isAddTodoClicked && <NewTodo tasks={tasksList} cancel={onCancelTodo} update={updateTodos}/>
          }

          {
             isPost &&
             <div>
                <button onClick={onAddPostHandler}>Add</button>
                 <Posts posts={postsList} /> 
             </div>
            
          }

          {
            isAddPostClicked && <NewPost cancel={onCancelPost}/>
          }

          {
            isAddUserClicked && <NewUser />
          }
        
  
          </div>

      </div>
      </div>
   )
}



export default HomePage;
import { useEffect, useState } from "react";
import styles from "./styles/HomePage.css";

import axios from "axios";

const HomePage = ()=>{

    const [users,setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [query, setQuery] = useState("");


   const getUsers = async() =>{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    let usersData = resp.data;
    setUsers(usersData);
   }

   const getTodos = async() =>{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    let todosData = resp.data; 
    setTodos(todosData);
   }

   
   useEffect(()=>{
    getUsers();
    getTodos();
 },[])

const search = (e)=>{
    setQuery(e.target.value);
}

console.log(users.filter(item=>item.name.toLowerCase().includes(query)))

   return(
       <div>
        
      <div className="row">
          <div className="column">
          Search <input type="text" value={query} onChange={search}></input> &nbsp; 
           <button>Add</button>
          {
              users.filter(item=>item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) )
          .map(user=>{
              return <div>
    ID: {users?user.id:null} <br></br>
          Name: <input type="text" value={users? user.name : null}></input> <br></br>
          Email: <input type="text" value={users? user.email : null}></input> <br></br>
          <button>Other Data</button>&nbsp;
          <button>Update</button>
          <button>Delete</button>
              </div>
          })}
          </div>
          <div className="column">
<h1>Column 2</h1>
          </div>

      </div>
      </div>
   )
}



export default HomePage;
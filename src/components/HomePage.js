import { useEffect, useState } from "react";
import OtherData from "./OtherData";
import styles from "./styles/HomePage.css";

import axios from "axios";

const HomePage = ()=>{

    const [users,setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [query, setQuery] = useState("");
    const[otherData,setOtherData] = useState([]);
    
  
   
 
 
    


  


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



   
   useEffect(()=>{
    getUsers();
    getTodos();
 
    
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





   return(
       <div>
        
      <div className="row">
          <div className="column">
          Search <input type="text" value={query} onChange={search}></input> &nbsp; 
           <button>Add</button>
          {
              users.filter(item=>item.name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) )
          .map(user=>{
              return <div key={user.id}>
    ID: {users?user.id:null} <br></br>
          Name: <input type="text" value={users? user.name : null} readOnly></input> <br></br>
          Email: <input type="text" value={users? user.email : null} readOnly></input> <br></br>
          <button onClick={()=>{HandleOnClick(user.id)}} >Other Data</button>&nbsp; <br></br>
         {otherData[user.id] && <OtherData details={user}/>}
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
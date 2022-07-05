import { useEffect, useState } from "react";
import styles from "./styles/HomePage.css";

import axios from "axios";

const HomePage = ()=>{

    const [users,setUsers] = useState([]);


   const getUsers = async() =>{
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    let usersData = resp.data;
    setUsers(usersData);
   }

   
   useEffect(()=>{
    getUsers();
 },[])



   return(
       <div>
        
      <div className="row">
          <div className="column">
          Search <input type="text"></input> &nbsp; 
           <button>Add</button>
          {users.map(user=>{
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
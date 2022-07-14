import { useState } from "react";

const NewUser = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h4>Add New User</h4>
            Name:<input type="text" onChange={e=>setName(e.target.value)} value={name} ></input><br></br>
            Email:<input type="text" onChange={e=>setEmail(e.target.value)} value={email}></input><br></br>
            <button>Add</button>
            <button>Cancel</button>
        </div>
    )

}


export default NewUser;
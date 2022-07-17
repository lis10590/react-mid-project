import { useState } from "react";
import styles from "../components/styles/NewUser.css"

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onAddUserHandler = () => {
    const user = {
      id: props.users.length + 1,
      name: name,
      email: email,
    };

    props.update(user);
  };

  return (
    <div className="new-user">
      <h4>Add New User</h4>
      Name:
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <br></br>
      Email:
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <br></br>
      <div className="new-user-btns">
      <button className="new-user-btn" onClick={props.cancel}>Cancel</button>
      <button className="new-user-btn" onClick={onAddUserHandler}>Add</button>
      
      </div>
     
    </div>
  );
};

export default NewUser;

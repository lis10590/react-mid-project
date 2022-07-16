import { useState } from "react";

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
    <div>
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
      <button onClick={onAddUserHandler}>Add</button>
      <button onClick={props.cancel}>Cancel</button>
    </div>
  );
};

export default NewUser;

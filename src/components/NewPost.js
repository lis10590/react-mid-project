import { useState } from "react";

const NewPost = (props) =>{

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    return (
        <div>
                  <h4>New Post - User </h4>
            Title: <input type="text" onChange={e=>setTitle(e.target.value)} value={title} ></input><br></br>
            Body: <input type="text" onChange={e=>setBody(e.target.value)} value={body} ></input>
            <div>
            <button >Add</button>
            <button onClick={props.cancel}>Cancel</button>
            </div>
        </div>
    )

}



export default NewPost;
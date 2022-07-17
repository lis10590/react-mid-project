import styles from "../components/styles/Posts.css"
const Posts = (props)=>{
    return (
        <div>
        <h4>Posts- User {props.posts ?props.posts[0].userId : null}</h4>
      
        {
            props.posts.map(post=>{
                return (
                    <div className="posts" key={post.id}>
        <p> Title: {post.title}</p>
        <p>Body:{post.body}</p>
                    </div>
                )
            })
        }
        
       
    </div>
    )
}


export default Posts;
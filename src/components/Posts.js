
const Posts = (props)=>{
    return (
        <div>
        <h4>Posts- User {props.posts ?props.posts[0].userId : null}</h4>
        <button>Add</button>
        {
            props.posts.map(post=>{
                return (
                    <div key={post.id}>
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
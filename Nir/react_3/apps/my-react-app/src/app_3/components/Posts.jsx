function Post(props) {
    return <div>
        <span>{props.title}</span>
        <p>{props.body}</p>
    </div>;
}

export default function Posts(props) {
    return props.posts.map((post) => {
     return   <Post key={post.id} title={post.title} body={props.body}></Post>;
    });
}

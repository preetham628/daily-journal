import React from "react";
import Post from "./Post";
import CreateIcon from '@material-ui/icons/Create';

function Home(props){
    return (
        <div>
            <h1>Home</h1>
            {props.posts.map((post) => {
                <Post title={post.title} content={post.content} />
            })}
            
        </div>)
}

export default Home
import React from "react";
import Post from "./Post";
import axios from "axios";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useHistory } from "react-router-dom";

function Home(props){
    const posts = props.allPosts;

    let history = useHistory();

    return (
        <div>
            <h1>Home</h1>
            
            {posts.map((post) =>{
            return (<div className="post">
                <h1>{post.title}</h1>
                <p>{post.content.slice(0,20)}</p>
                <button onClick={()=> {
                    history.push("/posts/"+post._id)
                }} name={post._id}><KeyboardArrowDownIcon /></button>
                </div>)}
            )}
        </div>)
}

export default Home
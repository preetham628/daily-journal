import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import App from "./App"

function ComposePost(props){

    const [post,setPost] = React.useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target;

        setPost((prevValue) => {
            return {...prevValue,[name]:value}
        });
    }

    function handleSubmit(event){
        props.addPost(post);
        setPost({
            title:"",
            content:""
        });
        //event.preventDefault();

    }

    return (
        <div>
            <h1>Compose</h1>
                <form onSubmit={handleSubmit} action="/">
                    <div class="form-group">
                    <label>Title</label>
                    <input onChange={handleChange} class="form-control" type="text" name="title" value={post.title}/>
                    <label>Post</label>
                    <textarea onChange={handleChange} class="form-control" name="content" rows="5" cols="30" value={post.content}></textarea>
                    </div>
            <button class="btn btn-primary" type="submit" name="button">Publish</button>
                </form>
        </div>
    )
}

export default ComposePost
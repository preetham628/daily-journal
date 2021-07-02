import axios from "axios";
import React from "react";
import {useParams,Redirect} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";

function Post(props) {

  let history = useHistory();

  let { postId } = useParams();

  const [post,setPost] = React.useState({
    title:"",
    content:""
  })

 fetch("http://localhost:8000/posts/"+postId)
      .then(res => res.json())
      .then(
        (result) => {
          setPost({title:result.title,content:result.content});
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )

  return (
    <div className="eachPost">
      <button onClick={()=>{
          props.onDelete(postId);
          history.push("/")
      }}><DeleteIcon /></button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
    </div>
  );
}

export default Post;
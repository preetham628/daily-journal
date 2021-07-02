import React ,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import axios from "axios";
import Home from "./Home";
import Post from "./Post";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import ComposePost from "./ComposePost";



function App(){
    
    const [posts,setPostList] = React.useState([]);

    function insertPost(newPost){
      axios
      .post('http://localhost:8000/compose', newPost)
      .then(() => console.log('post created'))
      .catch(err => {
        console.error(err);
      });

    }

    function deletePost(id){
        axios
      .delete('http://localhost:8000/delete',{data:{delId:id}})
      .then((res) => console.log(res))
      .catch(err => {
        console.error(err);
      });
    }


    useEffect(() => {
      fetch("http://localhost:8000/posts")
        .then(res => res.json())
        .then(
          (result) => {
            setPostList(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
          }
        )
    }, [])
    console.log(posts);


    return (
    <Router>
    <Header />
    <div className="container">
    
      <Switch>
        <Route exact path="/"><Home allPosts={posts}/></Route>
        <Route path="/compose"><ComposePost addPost={insertPost}/></Route>
        <Route path="/contact" ><Contact /></Route>
        <Route path="/posts/:postId"><Post onDelete={deletePost}/></Route>
      </Switch>
    </div>
    <Footer />
    </Router>)
}

export default App
import React  from "react";
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import ComposePost from "./ComposePost";

function App(){

    const [posts,setPostList] = React.useState([]);

    function insertPost(post){
        setPostList((prevValue) => {
            return [...prevValue,post]
        })
    }

    return (
    <Router>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path="/"><Home posts={posts}/></Route>
        <Route path="/compose"><ComposePost addPost={insertPost}/></Route>
        <Route path="/contact" ><Contact /></Route>
      </Switch>
    </div>
    <Footer />
    </Router>)
}

export default App
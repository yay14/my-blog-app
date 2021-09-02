import './App.css';
import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom' 
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import ReadPost from './components/ReadPost'
import EditPost from './components/EditPost'

function App() {
  const [posts,setPosts]= useState([]);
  useEffect(()=>{
    axios.get("/posts")
    .then(res=> setPosts(res.data))
    .catch(e=> console.log(e))
  })
  return (
    <div className="App">
     <Header/>
     <Route exact path="/" 
     render={()=> <Posts posts={posts}/>}/>
     
     <Route path="/add" 
     component={AddPost}/>

     <Route path="/posts/:id" 
     render={props => <ReadPost {...props} posts={posts}/>}/>
     
     <Route path="/edit/:id"
     render={props => <EditPost {...props} posts={posts}/>}/>
     <Footer/> 
    </div>
  );
}

export default App;

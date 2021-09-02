import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '90vh',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      background: '#B27883'
    },
    form:{
        width: '90%',
        marginLeft: '20%',
        marginRight: '20%',
    },
    label:{
        color: '#FFFFFF',
        display:'flex',
        alignItems: 'left',
    },
    alert: {
        color: '#00FF00',
    }
  }));

const AddPost = () => {
const classes=useStyles();
    const [title,setTitle] =useState("");
    const [content,setContent] =useState("");
    const [author,setAuthor] =useState("");
    const [message,setMessage]= useState("");

    const onClickSubmit = e  => {
        e.preventDefault();

        const posts = {
            title,
            author,
            content
        }
        
        axios.post("/posts/add",posts)
        .then(res => setMessage(res.data))
        .catch(e=> console.log(e))

        setTitle("");
        setAuthor("");
        setContent("");

    }

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={onClickSubmit}>
                <br/>
                
            <span className={classes.alert}>{message}</span>
            <div className="form-group">
                <label htmlFor="author" className={classes.label}>Author Name</label>
                <input 
                type="text" 
                value={author}
                className="form-control" 
                id="author" 
                placeholder="Enter your name"
                onChange= {e=> setAuthor(e.target.value)}/>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="title" className={classes.label}>Blog Title</label>
                <input 
                type="text"
                value={title} 
                className="form-control" 
                id="title" 
                placeholder="Enter the title of blog"
                onChange= {e=> setTitle(e.target.value)}/>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="content" className={classes.label}>Write a post</label>
                <textarea 
                type="text" 
                value={content}
                className="form-control" 
                id="content" 
                placeholder="Write a post here"
                onChange= {e=> setContent(e.target.value)}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Create Post</button>

            </form>
        </div>
    )
}

export default AddPost

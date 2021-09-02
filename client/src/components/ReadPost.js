import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import GridLoader from 'react-spinners/GridLoader';

const useStyles= makeStyles({
root: {
    height: '100%',
    minHeight: '100vh',
    width: '80%',
    display: 'block',
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
},
container:{
    width: '100%',
    textAlign: 'left',
    border: 'solid 2px #B27883',
    padding: '10px',
},
badge:{
    color: '#B27883',
}
})

const ReadPost =  props => {
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [content,setContent]=useState("");
    const classes=useStyles();

    useEffect(()=>{
        axios.get(`/posts/${props.match.params.id}`)
        .then(res => [
         setTitle(res.data.title),
         setAuthor(res.data.author),
         setContent(res.data.content)   
        ])
        .catch(e=> console.log(e))
    },[props] );

    return (
        <div className={classes.root}>
            {(!title || !author || !content)?<GridLoader/>:
            <>
            <div className={classes.container}>
            <h1>{title}</h1>
            <p>{content}</p>
            <h5 className={classes.badge}>{author}</h5>
            
            </div>
            </>}
            
        </div>
    )
}

export default ReadPost

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { Link,useHistory } from "react-router-dom";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import img from '../assets/blog_header.jpeg'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import HashLoader from "react-spinners/HashLoader"

const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        display: 'block',
        paddingTop: '50px',
    },
  card: {
    height: '100%',
    width: 500,
  },
  cards: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  delete: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  deleteOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#F4C8A9',
  },
}));

const Posts = ({posts}) => {
    const classes = useStyles();
    const [post,setPost]= useState([])
    const [deleteed, setdeleteed] = useState(false);

    const deletePost = id => {
      axios.delete( `/posts/delete/${id}`)
      .then(res => alert(res.data))

      setPost(post.filter(elem => (elem._id != id)));
      
      setdeleteed(!deleteed);
    }
  
    const history = useHistory();
    
    return (
        <div  className={classes.root}>
            { !posts.length? <HashLoader/> :
            <>
            
            {posts.map((article,key) => (
                    <div className={classes.cards} key={key}>
                    <Card className={classes.card}>
                    <Link to ={{
                      pathname:  `/posts/${article._id}`
                    }}
                    ><CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                      B
                      </Avatar>
                    }
                    action={
                      <IconButton 
                      onClick= {() =>{ 
                        let path = `/posts/${article._id}`; 
                        history.push(path);
                      }}
                      aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={article.title}
                    subheader="September 2, 2021"
                    
                  /></Link>
                    
                    <CardMedia
                      className={classes.media}
                      image={img}
                      title="blog"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                          {article.content}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <Link to={{
                          pathname: `edit/${article._id}`
                        }}>
                        <EditIcon />
                        </Link>
                      </IconButton>
                      
                      <IconButton
                        className={clsx(classes.delete, {
                          [classes.deleteOpen]: deleteed,
                        })}
                        onClick={() => deletePost(article._id)}
                      >
                      <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                    
                  <br/>
                  </div>
                  
                ))}
                
            </>}
        </div>
    )
}

export default Posts

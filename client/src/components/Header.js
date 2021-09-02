import React from 'react'
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#B27883'
    },
    add:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
  }));

const Header = () => {

    const classes = useStyles();
    const history = useHistory();

    const routeChange = () =>{ 
      let path = '/add'; 
      history.push(path);
    }
    
    return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
            <div className={classes.add}>
            <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={routeChange}
            color="inherit"
            aria-label="open drawer"
          >
            <AddBoxOutlinedIcon />
          </IconButton>
        <Typography variant="h6" >
            Blog it
          </Typography>
          </div>
          
          <Typography className={classes.title} variant="h5" noWrap>
            Welcome to the world of Blogging!
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar> 
        </div>
    )
}

export default Header

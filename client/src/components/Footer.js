import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles= makeStyles({
    root: {
        height: '10%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        color: '#FFFFFF'
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <a href="https://www.linkedin.com/in/shreya-raj-193827169/"
            ><LinkedInIcon fontSize="large" /></a>
            
            <a href="https://github.com/yay14"
            ><GitHubIcon fontSize="medium" /></a>
        </div>
    )
}

export default Footer

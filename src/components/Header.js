import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import sensegrass from "../images/sensegrass.svg"
import Typed from "react-typed"

// Styles
const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

// <Typed strings={["Felipe Cunha"]} typedSpeed={40}></Typed>  from Typography

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={sensegrass} alt="icon"></Avatar>
            </Grid>
            <Typography className={classes.title} variant="h4">
                 Felipe Cunha             
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                strings={["Web Design", "Web Development", "Python Development"]} typedSpeed={40}
                typeSpeed={40}
                backSpeed={60}
                loop
                ></Typed> 
            </Typography>
        </Box>
    )
}

export default Header

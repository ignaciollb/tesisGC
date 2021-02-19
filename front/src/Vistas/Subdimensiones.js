import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from "./Post";
import Footer from "./Footer";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Nav_Button: {
    marginRight: theme.spacing(2),
    color: "",
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: "",
    color: "",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  Paper_Button: {
    marginRight: theme.spacing(2),
    color: "red",
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
  },
}));
export default function Subdimensiones(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Button className={classes.Nav_Button} color="inherit">
            Mis Procesos
          </Button>
          <Typography variant="h6" align="left" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" className={classes.Nav_Button}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <MainFeaturedPost post={mainFeaturedPost} />
      <MainFeaturedPost post={mainFeaturedPost} />
      <MainFeaturedPost post={mainFeaturedPost} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

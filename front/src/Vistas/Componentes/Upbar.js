import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from 'axios'

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
    backgroundColor: "#243238",
    color: "#90caf9",
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

  function logOut(){
    axios.post('http://localhost:9000/api/logout',{},{withCredentials: true})
    .then(res=>{
      if(res.data == "Logout exitoso"){
        localStorage.setItem('flag','false')
        window.location='/'
      }
    })
    .catch(err=>{
      alert("Error, intente nuevamente")
      console.log(err);
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" className={classes.Nav_Button} onClick={logOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
    </div>
  );
}

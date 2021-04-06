import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";

import Menu from "@material-ui/core/Menu";

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
  menu_button: {
    color: "#90caf9",
  },
  option: {
    color: "#4b799e",
  },
}));
export default function Subdimensiones(props) {
  const classes = useStyles();
  const { title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function logOut() {
    axios
      .post("http://localhost:9000/api/logout", {}, { withCredentials: true })
      .then((res) => {
        if (res.data == "Logout exitoso") {
          localStorage.setItem("flag", "false");
          window.location = "/";
        }
      })
      .catch((err) => {
        alert("Error, intente nuevamente");
        console.log(err);
      });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <div>
            <Button
              className={classes.menu_button}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Button className={classes.option} href="/Subdimensiones">
                Subdimensiones
              </Button>
              <br></br>
              <Button className={classes.option} href="/Subdimensiones/PGR">
                PGR
              </Button>
              <br></br>
              <Button className={classes.option} href="/Subdimensiones/GP">
                GP
              </Button>
              <br></br>

              <Button className={classes.option} href="/Subdimensiones/GRF">
                GRF
              </Button>
              <br></br>

              <Button className={classes.option} href="/Subdimensiones/GRE">
                GRE
              </Button>
            </Menu>
          </div>
          <Typography variant="h6" align="left" className={classes.title}>
            {title}
          </Typography>
          <Button
            color="inherit"
            className={classes.Nav_Button}
            onClick={logOut}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
    </div>
  );
}

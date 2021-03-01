import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    marginLeft: 50,
    marginRight: 50,
  },
  Nav_Button: {
    marginRight: theme.spacing(2),
    color: "",
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
  },
  menu: {
    backgroundColor: "#243238",
    color: "#90caf9",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
  },

  table: {
    minWidth: 650,
    maxWidth: 1000,
  },
  table_tittle: {
    fontWeight: 800,
  },
  coment: {
    fontStyle: "italic",
    marginTop: 20,
  },
  card: {
    background: "linear-gradient(to top, #c9d6ff, #e2e2e2);",
    marginTop: 20,
  },
  number: {
    marginLeft: 20,
    marginTop: 0,
    marginRight: 10,
  },
  flecha: {
    marginRight: 5,
  },
  text: {
    marginTop: 10,
    display: "flex",
  },
}));

function createData(Fuente, Antecedente) {
  return { Fuente, Antecedente };
}
const rows = [
  createData(
    "Equipo técnico",
    `

    Encuestas anónimas de clima laboral 


  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista o encuesta al director y equipo directivo`
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con el personal.
    `
  ),
];
export default function Subdimensiones() {
  const classes = useStyles();

  class Texto extends Component {
    render() {
      return (
        <div className={classes.text}>
          <img
            className={this.props.class}
            src={this.props.img_url}
            width="20px"
            align="center"
          ></img>
          <span> {this.props.text}</span>
        </div>
      );
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Typography
            variant="h6"
            align="left"
            className={classes.title}
          ></Typography>
          <Button color="inherit" className={classes.Nav_Button}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            Subdimensión: Gestión de Personal
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Estándar 9
          </Typography>
          <br></br>

          <Typography variant="body2" component="p">
            El establecimiento cuenta con un clima laboral positivo.
            <br></br>
            Este estándar establece, para un nivel satisfactorio de gestión,
            que:
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="La mayor parte del personal estima que en el establecimiento predomina un clima laboral positivo caracterizado por:"
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wMzEsMCwwLDY0LjA0LDAsMTQzLjAyN2MwLDc4Ljk5Niw2NC4wMzEsMTQzLjAyNywxNDMuMDI3LDE0My4wMjcNCgkJczE0My4wMjctNjQuMDMxLDE0My4wMjctMTQzLjAyN0MyODYuMDU0LDY0LjA0LDIyMi4wMjIsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOQ0KCQlTNzguODQ0LDI2LjgxOCwxNDMuMDI3LDI2LjgxOHMxMTYuMjA5LDUyLjAyNiwxMTYuMjA5LDExNi4yMDlTMjA3LjIxLDI1OS4yMzYsMTQzLjAyNywyNTkuMjM2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMzk0QkM7IiBkPSJNMTUwLjAyNiw4MC4zOWgtMjIuODRjLTYuOTEsMC0xMC45MzMsNy4wNDQtMTAuOTMzLDEzLjE1OGMwLDUuOTM2LDMuMjA5LDEzLjE1OCwxMC45MzMsMTMuMTU4DQoJCWg3LjI1OXY4NS4zNmMwLDguNzM0LDYuMjU3LDEzLjYwNSwxMy4xNzYsMTMuNjA1czEzLjE4NS00Ljg4MSwxMy4xODUtMTMuNjA1VjkyLjc3MUMxNjAuNzk4LDg1Ljc4OSwxNTYuOTQ1LDgwLjM5LDE1MC4wMjYsODAuMzl6Ig0KCQkvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              text="Un ambiente de apoyo, colaboración y respeto entre el personal.
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wMzEsMCwwLDY0LjA0LDAsMTQzLjAyN2MwLDc4Ljk5Niw2NC4wMzEsMTQzLjAyNywxNDMuMDI3LDE0My4wMjcNCgkJczE0My4wMjctNjQuMDMxLDE0My4wMjctMTQzLjAyN0MyODYuMDU0LDY0LjA0LDIyMi4wMjIsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOQ0KCQlTNzguODQ0LDI2LjgxOCwxNDMuMDI3LDI2LjgxOHMxMTYuMjA5LDUyLjAyNiwxMTYuMjA5LDExNi4yMDlTMjA3LjIxLDI1OS4yMzYsMTQzLjAyNywyNTkuMjM2eiBNMTczLjIzMiwxODAuMjA1aC0zMi4wMzgNCgkJYzE1LjY2MS0xOC40NTksNDAuODUyLTM5Ljc1Myw0MC44NTItNjMuNzM2YzAtMjEuOTEtMTYuNTY0LTM1Ljg4Mi0zOS4yMTYtMzUuODgyYy0yMi42NjEsMC00My44NDcsMTcuOTc3LTQzLjg0NywzOS43MTcNCgkJYzAsNi43MzEsNC42MDQsMTIuNTg2LDEzLjQ0NSwxMi41ODZjMTcuNjkxLDAsOC4xMDgtMjguNDk4LDI5LjI5NC0yOC40OThjNy41NTQsMCwxMy4yNjYsNi4yMDQsMTMuMjY2LDEzLjI4NA0KCQljMCw2LjIwNC0zLjEzOCwxMS41NTgtNi40NTQsMTYuMDQ2Yy0xMy45OTksMTguOTY5LTMwLjU4MSwzNC40OTYtNDUuODY3LDUxLjU3OWMtMS44NDEsMi4wNjUtNC4yNDYsNS4xNzYtNC4yNDYsOC43OTYNCgkJYzAsNy45MzgsNi4yNjYsMTEuMzgsMTQuMzY1LDExLjM4aDYxLjUyOGM2Ljk5OSwwLDEzLjI2Ni00LjU2OCwxMy4yNjYtMTIuNDk3QzE4Ny41OCwxODUuMDUsMTgxLjMzMSwxODAuMjA1LDE3My4yMzIsMTgwLjIwNXoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              text="Un ambiente de trabajo desafiante, motivador y con sentido. 
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wNCwwLDAsNjQuMDQsMCwxNDMuMDI3YzAsNzguOTk2LDY0LjA0LDE0My4wMjcsMTQzLjAyNywxNDMuMDI3DQoJCXMxNDMuMDI3LTY0LjAzMSwxNDMuMDI3LTE0My4wMjdDMjg2LjA1NCw2NC4wNCwyMjIuMDE0LDAsMTQzLjAyNywweiBNMTQzLjAyNywyNTkuMjM2Yy02NC4xODMsMC0xMTYuMjA5LTUyLjAyNi0xMTYuMjA5LTExNi4yMDkNCgkJUzc4Ljg0NCwyNi44MTgsMTQzLjAyNywyNi44MThzMTE2LjIwOSw1Mi4wMjYsMTE2LjIwOSwxMTYuMjA5UzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE2Ny43MTcsMTM3LjYzNw0KCQljOC45NjYtNS45MzYsMTMuMzY0LTE1LjI3NywxMy4zNjQtMjUuOTc3YzAtMTMuMjM5LTExLjI1NC0zMS4wODItMzQuNzI5LTMxLjA4MmMtMTguMDkzLDAtMzUuNTQyLDE0LjI3Ni0zNS41NDIsMjcuNTE1DQoJCWMwLDYuMjg0LDMuOTE1LDEyLjU2LDEwLjYwMiwxMi41NmMxMS4wODUsMCw4Ljk2Ni0xNi42MzYsMjQuNDQ5LTE2LjYzNmM3LjMzOSwwLDExLjczNyw0LjkyNSwxMS43MzcsMTEuMzcxDQoJCWMwLDE4Ljg1My0yMy4xNTIsNi43OTQtMjMuMTUyLDI0LjYyN2MwLDIwLjAzMywyNy43MiwyLjU0OCwyNy43MiwyNi4zMTdjMCw5LjAwMi02Ljg1NiwxNS43OTYtMTUuMzMxLDE1Ljc5Ng0KCQljLTE4LjQyNCwwLTE1LjgxMy0xOS44NzItMjYuODk4LTE5Ljg3MmMtNS44NzMsMC0xMi41NTEsNC43NTYtMTIuNTUxLDExLjM4YzAsMTMuNDE4LDE1LDMxLjkyMiwzOS4xMjcsMzEuOTIyDQoJCWMyMy4xNTIsMCw0MS4wODQtMTcuMTU0LDQxLjA4NC0zNy41MjdDMTg3LjU5OCwxNTQuNjIxLDE3OS40NDUsMTQzLjI1LDE2Ny43MTcsMTM3LjYzN3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              text="Un sentido de equipo y de orgullo de pertenecer al establecimiento. 
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wNCwwLDAsNjQuMDQsMCwxNDMuMDI3YzAsNzguOTk2LDY0LjA0LDE0My4wMjcsMTQzLjAyNywxNDMuMDI3DQoJCXMxNDMuMDI3LTY0LjAzMSwxNDMuMDI3LTE0My4wMjdDMjg2LjA1NCw2NC4wNCwyMjIuMDE0LDAsMTQzLjAyNywweiBNMTQzLjAyNywyNTkuMjM2Yy02NC4xODMsMC0xMTYuMjA5LTUyLjAyNi0xMTYuMjA5LTExNi4yMDkNCgkJUzc4Ljg0NCwyNi44MTgsMTQzLjAyNywyNi44MThzMTE2LjIwOSw1Mi4wMjYsMTE2LjIwOSwxMTYuMjA5UzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE3NS4wNjUsMTU1LjEyMmgtNS4wNDJ2LTUyLjYwNw0KCQljMC0xNS41OS04LjM5NC0yMS45MzctMTguOTMzLTIxLjkzN2MtOS40NDksMC0xNC41MzUsMy4wOTMtMTguNTMxLDkuOTRsLTQwLjcsNjkuNTY1Yy0xLjA5MSwxLjcwNy0yLjU0OCwzLjc3Mi0yLjU0OCw3LjU0NQ0KCQljMCw0LjQ1MiwzLjgxNywxMC4xMSwxMi43MiwxMC4xMWg0My43OTNWMTkyLjNjMCw5LjA5MSwxLjg1LDEzLjM2NCwxMS4xMiwxMy4zNjRzMTMuMDc4LTQuMjgyLDEzLjA3OC0xMy4zNjR2LTE0LjU2Mmg1LjA0Mg0KCQljNy4wODksMCwxMi43Mi00LjQ1MiwxMi43Mi0xMS4zMTdDMTg3Ljc4NSwxNTkuNTczLDE4Mi4xNTQsMTU1LjEyMiwxNzUuMDY1LDE1NS4xMjJ6IE0xNDYuMzc5LDE1NS4xMjJoLTI0Ljg5NmwyNC41MjktNDcuODE2DQoJCWgwLjM2N1YxNTUuMTIyeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              text="Una comunicación abierta y fluida entre todos los miembros del personal. 
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wNCwwLDAsNjQuMDQsMCwxNDMuMDI3YzAsNzguOTk2LDY0LjA0LDE0My4wMjcsMTQzLjAyNywxNDMuMDI3DQoJCXMxNDMuMDI3LTY0LjAzMSwxNDMuMDI3LTE0My4wMjdDMjg2LjA1NCw2NC4wNCwyMjIuMDE0LDAsMTQzLjAyNywweiBNMTQzLjAyNywyNTkuMjM2Yy02NC4xODMsMC0xMTYuMjA5LTUyLjAyNi0xMTYuMjA5LTExNi4yMDkNCgkJUzc4Ljg0NCwyNi44MTgsMTQzLjAyNywyNi44MThzMTE2LjIwOSw1Mi4wMjYsMTE2LjIwOSwxMTYuMjA5UzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE0OS42NzgsMTIwLjg0OQ0KCQljLTQuNjEzLDAtOS4zOTUsMC44NjctMTMuODExLDEuNzE2bDIuNzYyLTE4LjMyNWgzNC42M2MzLjMxNiwwLDEyLjg5LTEuMDM3LDEyLjg5LTEyLjk3MWMwLTYuMjIyLTQuOTc5LTEwLjg4OC0xMy40NDUtMTAuODg4DQoJCWgtNDQuNDAxYy04LjgzMiwwLTEyLjcxMiwyLjk0MS0xNC4zNjUsMTYuNDNsLTQuNjA0LDM2LjQ4MWMtMC4xODgsMS44OTUtMC41NTQsMy42MjktMC41NTQsNS44NzMNCgkJYzAsMi45NDEsMy42ODMsOC4xMjYsMTAuODYxLDguMTI2YzkuMzk1LDAsMTEuMDQ5LTUuNzAzLDIxLjc0LTUuNzAzYzExLjQyNCwwLDE3LjY5MSw3LjA4LDE3LjY5MSwxNy40NTgNCgkJYzAsMTAuODk3LTYuNjMzLDIyLjY0My0xOS41MjMsMjIuNjQzYy0xMi4zNDUsMC0yMS4xOTUtMTEuMDU4LTI4LjU2MS0xMS4wNThjLTYuODEyLDAtMTIuNTE1LDUuMzY0LTEyLjUxNSwxMS43NTUNCgkJYzAsMTUuMjE0LDI3LjQ0MywyMy4xNyw0MC41MjEsMjMuMTdjMzEuODU5LDAsNDguODE3LTE5LjAyMyw0OC44MTctNDcuODk2QzE4Ny44MTIsMTM3LjQ0LDE3MS45NzIsMTIwLjg0OSwxNDkuNjc4LDEyMC44NDl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
              text="Un ambiente donde las personas se sienten valoradas y reconocidas. 
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wNCwwLDAsNjQuMDQsMCwxNDMuMDI3YzAsNzguOTk2LDY0LjA0LDE0My4wMjcsMTQzLjAyNywxNDMuMDI3DQoJCXMxNDMuMDI3LTY0LjAzMSwxNDMuMDI3LTE0My4wMjdDMjg2LjA1NCw2NC4wNCwyMjIuMDE0LDAsMTQzLjAyNywweiBNMTQzLjAyNywyNTkuMjM2Yy02NC4xODMsMC0xMTYuMjA5LTUyLjAyNi0xMTYuMjA5LTExNi4yMDkNCgkJUzc4Ljg0NCwyNi44MTgsMTQzLjAyNywyNi44MThzMTE2LjIwOSw1Mi4wMjYsMTE2LjIwOSwxMTYuMjA5UzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE1MC41LDEyNS40MTcNCgkJYy0zLjkxNSwwLTguMDEsMC42NzktMTEuMjI4LDIuMDQ3bC0wLjM0OS0wLjM0OWM1Ljg3My03Ljk4MywxNy40NTgtMTguODQ0LDI0LjU4My0yNy4xNjZjMi4xMzYtMi41NDgsMy43MzctNC41ODYsMy43MzctNi45NTUNCgkJYzAtNi4xMjMtNy42NTItMTIuNDA4LTEyLjY0LTEyLjQwOGMtMS40MywwLTMuMzg4LDAtNS4zNDYsMS4xOThjLTIuMTQ1LDEuMzUtNC4yODIsMi43MTgtNS43MTIsNC4wNzYNCgkJYy0xNy45OTUsMTUuOTU2LTQ1LjI1LDUxLjk1NS00NS4yNSw3Ny42MWMwLDIyLjU4LDE3LjI4OCw0Mi4xMTIsNDQuNzIzLDQyLjExMmMyNi4zNzEsMCw0NC43MjMtMjAuMDQyLDQ0LjcyMy00Mi4xMTINCgkJQzE4Ny43NDEsMTQzLjQxMSwxNzEuODkyLDEyNS40MTcsMTUwLjUsMTI1LjQxN3ogTTE0My4wMTgsMTgxLjExN2MtMTAuNjkxLDAtMTYuOTMxLTguMTUzLTE2LjkzMS0xNy42NjQNCgkJYzAtMTAuMDIxLDYuNzc2LTE3LjY3MywxNi45MzEtMTcuNjczYzExLjIyOCwwLDE2LjkzMSw4LjY3MSwxNi45MzEsMTcuNjczQzE1OS45NDksMTczLjMwNCwxNTMuMTczLDE4MS4xMTcsMTQzLjAxOCwxODEuMTE3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              text="Un espacio de trabajo cómodo y con las facilidades necesarias para desempeñar la labor educativa. "
            ></Texto>
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="
              El equipo directivo está atento al clima laboral predominante en el establecimiento e implementa medidas para solucionar los problemas que surgen y para mantener o mejorar el ambiente de trabajo
              
              "
            ></Texto>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            Documentos y fuentes necesarios para evaluar el estandar
          </Typography>
          <br></br>
          <TableContainer align="center">
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className={classes.table_tittle}>Fuente</TableCell>
                  <TableCell align="right" className={classes.table_tittle}>
                    Antecedente
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Fuente}>
                    <TableCell component="th" scope="row">
                      {row.Fuente}
                    </TableCell>
                    <TableCell align="right">{row.Antecedente}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            component="h2"
            align="center"
            color="textSecondary"
            className={classes.coment}
          >
            Las fuentes pueden variar de organización en organización
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

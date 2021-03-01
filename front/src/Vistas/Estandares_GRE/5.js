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
  number2: {
    marginLeft: 40,
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
    "Director",
    `
    Convenios de cooperación
    
    
  `
  ),

  createData(
    "Equipo técnico",
    `
    Entrevista o encuesta al sostenedor, director y equipo directivo
    `
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con estudiantes`
  ),
  createData(
    "Equipo técnico",
    `
    Entrevista, encuesta o grupo focal con docentes
    `
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con padres y apoderados 
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
            Subdimensión: Planificación y Gestión de Resultados
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Estándar 5
          </Typography>
          <br></br>

          <Typography variant="body2" component="p">
            El establecimiento recopila y sistematiza continuamente los datos
            sobre las características, los resultados educativos, los
            indicadores de procesos relevantes y la satisfacción de apoderados
            del establecimiento.
            <br></br>
            Este estándar establece, para un nivel satisfactorio de gestión,
            que:
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="El establecimiento cuenta con datos sistematizados y actualizados sobre:
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wMzEsMCwwLDY0LjA0LDAsMTQzLjAyN2MwLDc4Ljk5Niw2NC4wMzEsMTQzLjAyNywxNDMuMDI3LDE0My4wMjcNCgkJczE0My4wMjctNjQuMDMxLDE0My4wMjctMTQzLjAyN0MyODYuMDU0LDY0LjA0LDIyMi4wMjIsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOQ0KCQlTNzguODQ0LDI2LjgxOCwxNDMuMDI3LDI2LjgxOHMxMTYuMjA5LDUyLjAyNiwxMTYuMjA5LDExNi4yMDlTMjA3LjIxLDI1OS4yMzYsMTQzLjAyNywyNTkuMjM2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMyMzk0QkM7IiBkPSJNMTUwLjAyNiw4MC4zOWgtMjIuODRjLTYuOTEsMC0xMC45MzMsNy4wNDQtMTAuOTMzLDEzLjE1OGMwLDUuOTM2LDMuMjA5LDEzLjE1OCwxMC45MzMsMTMuMTU4DQoJCWg3LjI1OXY4NS4zNmMwLDguNzM0LDYuMjU3LDEzLjYwNSwxMy4xNzYsMTMuNjA1czEzLjE4NS00Ljg4MSwxMy4xODUtMTMuNjA1VjkyLjc3MUMxNjAuNzk4LDg1Ljc4OSwxNTYuOTQ1LDgwLjM5LDE1MC4wMjYsODAuMzl6Ig0KCQkvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              text="Características y contexto del establecimiento: matrícula por nivel y especialidad técnico-profesional; ingresos y retiros de estudiantes; número de estudiantes vulnerables, con SEP (Subvención Escolar Preferencial) o con necesidades educativas especiales; y educación de la madre.  
              "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wMzEsMCwwLDY0LjA0LDAsMTQzLjAyN2MwLDc4Ljk5Niw2NC4wMzEsMTQzLjAyNywxNDMuMDI3LDE0My4wMjcNCgkJczE0My4wMjctNjQuMDMxLDE0My4wMjctMTQzLjAyN0MyODYuMDU0LDY0LjA0LDIyMi4wMjIsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOQ0KCQlTNzguODQ0LDI2LjgxOCwxNDMuMDI3LDI2LjgxOHMxMTYuMjA5LDUyLjAyNiwxMTYuMjA5LDExNi4yMDlTMjA3LjIxLDI1OS4yMzYsMTQzLjAyNywyNTkuMjM2eiBNMTczLjIzMiwxODAuMjA1aC0zMi4wMzgNCgkJYzE1LjY2MS0xOC40NTksNDAuODUyLTM5Ljc1Myw0MC44NTItNjMuNzM2YzAtMjEuOTEtMTYuNTY0LTM1Ljg4Mi0zOS4yMTYtMzUuODgyYy0yMi42NjEsMC00My44NDcsMTcuOTc3LTQzLjg0NywzOS43MTcNCgkJYzAsNi43MzEsNC42MDQsMTIuNTg2LDEzLjQ0NSwxMi41ODZjMTcuNjkxLDAsOC4xMDgtMjguNDk4LDI5LjI5NC0yOC40OThjNy41NTQsMCwxMy4yNjYsNi4yMDQsMTMuMjY2LDEzLjI4NA0KCQljMCw2LjIwNC0zLjEzOCwxMS41NTgtNi40NTQsMTYuMDQ2Yy0xMy45OTksMTguOTY5LTMwLjU4MSwzNC40OTYtNDUuODY3LDUxLjU3OWMtMS44NDEsMi4wNjUtNC4yNDYsNS4xNzYtNC4yNDYsOC43OTYNCgkJYzAsNy45MzgsNi4yNjYsMTEuMzgsMTQuMzY1LDExLjM4aDYxLjUyOGM2Ljk5OSwwLDEzLjI2Ni00LjU2OCwxMy4yNjYtMTIuNDk3QzE4Ny41OCwxODUuMDUsMTgxLjMzMSwxODAuMjA1LDE3My4yMzIsMTgwLjIwNXoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              text="Resultados educativos: promedio Simce y puntajes PSU, distribución en los Estándares de Aprendizaje, resultados en los Otros Indicadores de Calidad, índices de repitencia y promedio de notas por asignatura y nivel. "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wNCwwLDAsNjQuMDQsMCwxNDMuMDI3YzAsNzguOTk2LDY0LjA0LDE0My4wMjcsMTQzLjAyNywxNDMuMDI3DQoJCXMxNDMuMDI3LTY0LjAzMSwxNDMuMDI3LTE0My4wMjdDMjg2LjA1NCw2NC4wNCwyMjIuMDE0LDAsMTQzLjAyNywweiBNMTQzLjAyNywyNTkuMjM2Yy02NC4xODMsMC0xMTYuMjA5LTUyLjAyNi0xMTYuMjA5LTExNi4yMDkNCgkJUzc4Ljg0NCwyNi44MTgsMTQzLjAyNywyNi44MThzMTE2LjIwOSw1Mi4wMjYsMTE2LjIwOSwxMTYuMjA5UzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE2Ny43MTcsMTM3LjYzNw0KCQljOC45NjYtNS45MzYsMTMuMzY0LTE1LjI3NywxMy4zNjQtMjUuOTc3YzAtMTMuMjM5LTExLjI1NC0zMS4wODItMzQuNzI5LTMxLjA4MmMtMTguMDkzLDAtMzUuNTQyLDE0LjI3Ni0zNS41NDIsMjcuNTE1DQoJCWMwLDYuMjg0LDMuOTE1LDEyLjU2LDEwLjYwMiwxMi41NmMxMS4wODUsMCw4Ljk2Ni0xNi42MzYsMjQuNDQ5LTE2LjYzNmM3LjMzOSwwLDExLjczNyw0LjkyNSwxMS43MzcsMTEuMzcxDQoJCWMwLDE4Ljg1My0yMy4xNTIsNi43OTQtMjMuMTUyLDI0LjYyN2MwLDIwLjAzMywyNy43MiwyLjU0OCwyNy43MiwyNi4zMTdjMCw5LjAwMi02Ljg1NiwxNS43OTYtMTUuMzMxLDE1Ljc5Ng0KCQljLTE4LjQyNCwwLTE1LjgxMy0xOS44NzItMjYuODk4LTE5Ljg3MmMtNS44NzMsMC0xMi41NTEsNC43NTYtMTIuNTUxLDExLjM4YzAsMTMuNDE4LDE1LDMxLjkyMiwzOS4xMjcsMzEuOTIyDQoJCWMyMy4xNTIsMCw0MS4wODQtMTcuMTU0LDQxLjA4NC0zNy41MjdDMTg3LjU5OCwxNTQuNjIxLDE3OS40NDUsMTQzLjI1LDE2Ny43MTcsMTM3LjYzN3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              text="Procesos relevantes: "
            ></Texto>
            <Texto
              class={classes.number}
              img_url="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI4Ni4wNTQgMjg2LjA1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg2LjA1NCAyODYuMDU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjM5NEJDOyIgZD0iTTE0My4wMjcsMEM2NC4wNCwwLDAsNjQuMDQsMCwxNDMuMDI3YzAsNzguOTk2LDY0LjA0LDE0My4wMjcsMTQzLjAyNywxNDMuMDI3DQoJCXMxNDMuMDI3LTY0LjAzMSwxNDMuMDI3LTE0My4wMjdDMjg2LjA1NCw2NC4wNCwyMjIuMDE0LDAsMTQzLjAyNywweiBNMTQzLjAyNywyNTkuMjM2Yy02NC4xODMsMC0xMTYuMjA5LTUyLjAyNi0xMTYuMjA5LTExNi4yMDkNCgkJUzc4Ljg0NCwyNi44MTgsMTQzLjAyNywyNi44MThzMTE2LjIwOSw1Mi4wMjYsMTE2LjIwOSwxMTYuMjA5UzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE3NS4wNjUsMTU1LjEyMmgtNS4wNDJ2LTUyLjYwNw0KCQljMC0xNS41OS04LjM5NC0yMS45MzctMTguOTMzLTIxLjkzN2MtOS40NDksMC0xNC41MzUsMy4wOTMtMTguNTMxLDkuOTRsLTQwLjcsNjkuNTY1Yy0xLjA5MSwxLjcwNy0yLjU0OCwzLjc3Mi0yLjU0OCw3LjU0NQ0KCQljMCw0LjQ1MiwzLjgxNywxMC4xMSwxMi43MiwxMC4xMWg0My43OTNWMTkyLjNjMCw5LjA5MSwxLjg1LDEzLjM2NCwxMS4xMiwxMy4zNjRzMTMuMDc4LTQuMjgyLDEzLjA3OC0xMy4zNjR2LTE0LjU2Mmg1LjA0Mg0KCQljNy4wODksMCwxMi43Mi00LjQ1MiwxMi43Mi0xMS4zMTdDMTg3Ljc4NSwxNTkuNTczLDE4Mi4xNTQsMTU1LjEyMiwxNzUuMDY1LDE1NS4xMjJ6IE0xNDYuMzc5LDE1NS4xMjJoLTI0Ljg5NmwyNC41MjktNDcuODE2DQoJCWgwLjM2N1YxNTUuMTIyeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              text="Satisfacciones de apoderados: índice anual de satisfacción.
              "
            ></Texto>
            <Texto
              class={classes.number2}
              img_url="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgZmlsbD0iI2ZmNjUyOSIgcj0iMjU2Ii8+PC9nPjxwYXRoIGQ9Im01MDIuNjg4IDMyNC42MDgtMjA1LjMwOC0yMDUuMzA4LTE2OS4xNCAyNzMuNCAxMTkuMTQgMTE5LjE0YzIuODYzLjA5NSA1LjczNC4xNiA4LjYyLjE2IDExNy42MTggMCAyMTYuNjk3LTc5LjMyNiAyNDYuNjg4LTE4Ny4zOTJ6IiBmaWxsPSIjZTUzYjA3Ii8+PHBhdGggZD0ibTI5Ny4zOCAxMTkuM2gtODIuNzZsLTg2LjM4IDI3My40aDYwLjgzbDIwLjUtNjQuOWg5Mi44NmwyMC41IDY0LjloNjAuODN6bS02OS40OSAxNTAuNSAyOC4xMS04OC45NiAyOC4xMSA4OC45NnoiIGZpbGw9IiNmOGZmZmIiLz48cGF0aCBkPSJtMjk3LjM4IDExOS4zaC00MS4zOHY2MS41NGwyOC4xMSA4OC45NmgtMjguMTF2NThoNDYuNDNsMjAuNSA2NC45aDYwLjgzeiIgZmlsbD0iI2Q4ZDhkOCIvPjwvZz48L3N2Zz4="
              text="Personal: planta, carga horaria, permisos y licencias, y resultados de evaluación docente. 
              "
            ></Texto>
            <Texto
              class={classes.number2}
              img_url="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgZmlsbD0iIzA3ZTVjYSIgcj0iMjU2Ii8+PC9nPjxwYXRoIGQ9Im01MDUuNjU2IDMxMi44NDQtMTY0LjE0Ni0xNjQuMTQ2Yy0xNS4xMy0xOC42ODYtMTU5LjkyMy0xMS41MTEtMTU5LjkyMy0xMS41MTFsLTE5LjY0NCAyNTYuNzc3IDExNy4wMDIgMTE3LjAwMWMxMTEuNTM1LTkuOTA5IDIwMi40OTgtOTEuMzM0IDIyNi43MTEtMTk4LjEyMXoiIGZpbGw9IiMwMGI1OWIiLz48Zz48cGF0aCBkPSJtMjk0LjUzOSAzOTMuOTY0aC0xMzIuNTk3di0yNzUuOTI4aDExNS40NzFjNDUuNDY5IDAgODIuNDYgMzYuOTkyIDgyLjQ2IDgyLjQ2djIuMDQzYzAgMTUuNzE5LTQuNDIxIDMwLjQyNS0xMi4wODUgNDIuOTM5IDIuMTkxIDEuODA5IDQuMzAxIDMuNzM4IDYuMzI1IDUuNzg1IDE1LjYxMiAxNS43ODggMjQuMjEgMzYuNzEgMjQuMjEgNTguOTE0LjAwMSA0Ni4yMDEtMzcuNTg1IDgzLjc4Ny04My43ODQgODMuNzg3em0tNzQuNTk3LTU4aDc0LjU5NmMxNC4yMTggMCAyNS43ODYtMTEuNTY3IDI1Ljc4Ni0yNS43ODYgMC0xNC4wNjEtMTEuNDM5LTI1LjYyNy0yNS40OTgtMjUuNzg0bC02Ljc4My0uMDc2Yy0zLjQ4MS40NS03LjAyOC42ODItMTAuNjMuNjgyaC01Ny40NzF6bTAtMTA4Ljk2NGg1Ny40NzFjMTMuNDg3IDAgMjQuNDYtMTAuOTczIDI0LjQ2LTI0LjQ2di0yLjA0M2MwLTEzLjQ4OC0xMC45NzMtMjQuNDYtMjQuNDYtMjQuNDZoLTU3LjQ3MXoiIGZpbGw9IiNmOGZmZmIiLz48L2c+PGc+PHBhdGggZD0ibTM1NC4xMSAyNTEuMjZjLTIuMDItMi4wNC00LjEzLTMuOTctNi4zMi01Ljc4IDcuNjYtMTIuNTIgMTIuMDgtMjcuMjIgMTIuMDgtNDIuOTR2LTIuMDRjMC00NS40Ny0zNi45OS04Mi40Ni04Mi40Ni04Mi40NmgtMjEuNDF2NThoMjEuNDFjMTMuNDkgMCAyNC40NiAxMC45NyAyNC40NiAyNC40NnYyLjA0YzAgMTMuNDktMTAuOTcgMjQuNDYtMjQuNDYgMjQuNDZoLTIxLjQxdjU4aDIxLjQxYzMuNjEgMCA3LjE1LS4yMyAxMC42My0uNjhsNi43OS4wN2MxNC4wNi4xNiAyNS40OSAxMS43MyAyNS40OSAyNS43OSAwIDE0LjIyLTExLjU2IDI1Ljc4LTI1Ljc4IDI1Ljc4aC0zOC41NHY1OGgzOC41NGM0Ni4yIDAgODMuNzgtMzcuNTggODMuNzgtODMuNzggMC0yMi4yMS04LjU5LTQzLjEzLTI0LjIxLTU4LjkyeiIgZmlsbD0iI2Q4ZDhkOCIvPjwvZz48L2c+PC9zdmc+"
              text="Finanzas: presupuesto y su estado de avance, balance del último año y contabilidad al día. - Recursos educativos: inventario y estado del equipamiento. 
              "
            ></Texto>
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="El establecimiento organiza los datos que recopila en un sistema de fácil acceso, ya sea centralizado o en unidades claramente identificadas."
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

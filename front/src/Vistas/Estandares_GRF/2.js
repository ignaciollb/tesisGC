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
    "Director",
    `
  Actas de fiscalización de la Superintendencia de Educación Escolar
  
  `
  ),
  createData(
    "Director/DAEM",
    `

  Informe de presupuesto


`
  ),
  createData(
    "Equipo técnico",
    `
  Solicitudes de requerimientos
  
  `
  ),
  createData(
    "Equipo técnico",
    `
    Entrevista o encuesta al encargado de presupuesto
  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista o encuesta al sostenedor, director y equipo directivo`
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con estudiantes`
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con docentes`
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
            Subdimensión: Gestión de Recursos Financieros
          </Typography>
          <Typography variant="h5" component="h2" align="center">
            Estándar 2
          </Typography>
          <br></br>

          <Typography variant="body2" component="p">
            El establecimiento elabora un presupuesto en función de las
            necesidades detectadas en el proceso de planificación, controla los
            gastos y coopera en la sustentabilidad de la institución.
            <br></br>
            Este estándar establece, para un nivel satisfactorio de gestión,
            que:
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="El establecimiento cuenta con un presupuesto anual mensualizado (Se considera que el establecimiento cuenta con un presupuesto, ya sea cuando este se realiza a nivel de establecimiento como centro de costos independiente, o cuando forma parte de un presupuesto global realizado por el sostenedor para la red de establecimiento a la que pertenece) , en el cual se detallan las diferentes partidas de ingresos y gastos."
            ></Texto>
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="Los encargados de elaborar el presupuesto recogen formalmente los requerimientos y prioridades de los distintos estamentos de la comunidad educativa, y establecen un canal para recibir las necesidades imprevistas que surgen durante el año
              "
            ></Texto>
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="El establecimiento planifica sus gastos según el presupuesto, controla mes a mes su cumplimiento y lo ajusta en caso de existir necesidades emergentes o diferencias con lo planificado."
            ></Texto>
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="El establecimiento gestiona los ingresos de manera oportuna y efectiva; por ejemplo, entrega a tiempo los documentos requeridos para el pago de subvenciones, cumple la normativa para evitar sanciones, envía recordatorios de pago a los apoderados, entre otros
              "
            ></Texto>
            <Texto
              class={classes.flecha}
              img_url="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4NHB0IiB2aWV3Qm94PSIwIC02NCAzODQuMDAyNzkgMzg0IiB3aWR0aD0iMzg0cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyMC40ODQzNzUgMTI4YzAtNC42MzY3MTktMS43NTc4MTMtOS4yNzczNDQtNS4yODEyNS0xMi43OTY4NzVsLTk5LjE5OTIxOS05OS4yMDMxMjVoMjMzLjM1OTM3NWM0LjI0MjE4OCAwIDguMzIwMzEzIDEuNjc5Njg4IDExLjM2MzI4MSA0LjcyMjY1NmwxMDcuMjc3MzQ0IDEwNy4yNzczNDQtMTA3LjI3NzM0NCAxMDcuMjgxMjVjLTMuMDQyOTY4IDMuMDM5MDYyLTcuMTIxMDkzIDQuNzE4NzUtMTEuMzYzMjgxIDQuNzE4NzVoLTIzMy4zNTkzNzVsOTkuMTk5MjE5LTk5LjE5OTIxOWMzLjUyMzQzNy0zLjUxOTUzMSA1LjI4MTI1LTguMTYwMTU2IDUuMjgxMjUtMTIuODAwNzgxem0wIDAiIGZpbGw9IiM0ZGQwZTEiLz48cGF0aCBkPSJtMjcyLjAzNTE1NiA5LjQxMDE1NmMtNi4wNjI1LTYuMDY2NDA2LTE0LjExNzE4Ny05LjQxMDE1Ni0yMi42NzE4NzUtOS40MTAxNTZoLTIzMy4zNTkzNzVjLTYuNDcyNjU2IDAtMTIuMzA0Njg3IDMuODk4NDM4LTE0Ljc4MTI1IDkuODc1LTIuNDgwNDY4IDUuOTgwNDY5LTEuMTEzMjgxIDEyLjg1NTQ2OSAzLjQ2ODc1IDE3LjQzNzVsOTkuMjAzMTI1IDk5LjIwNzAzMWMuNDg0Mzc1LjQ4ODI4MS41ODk4NDQgMS4wNzQyMTkuNTg5ODQ0IDEuNDgwNDY5IDAgLjQxMDE1Ni0uMTA1NDY5Ljk5MjE4OC0uNTg5ODQ0IDEuNDg4MjgxbC05OS4yMDMxMjUgOTkuMTk5MjE5Yy00LjU3NDIxOCA0LjU3ODEyNS01Ljk0MTQwNiAxMS40NTcwMzEtMy40Njg3NSAxNy40NDE0MDYgMi40NzY1NjMgNS45NzY1NjMgOC4zMDg1OTQgOS44NzEwOTQgMTQuNzgxMjUgOS44NzEwOTRoMjMzLjM1OTM3NWM4LjU1NDY4OCAwIDE2LjYwOTM3NS0zLjM0Mzc1IDIyLjY3MTg3NS05LjQwNjI1bDEwNy4yODEyNS0xMDcuMjgxMjVjNi4yNS02LjI0NjA5NCA2LjI1LTE2LjM3NSAwLTIyLjYyNXptLTIyLjY3MTg3NSAyMTQuNTg5ODQ0aC0xOTQuNzM0Mzc1bDcxLjg3ODkwNi03MS44Nzg5MDZjMi40MTAxNTctMi40MDYyNSA0LjI3MzQzOC01LjE5MTQwNiA1LjgzMjAzMi04LjEyMTA5NGg0My42NjQwNjJjOC44MzIwMzIgMCAxNi03LjE2Nzk2OSAxNi0xNnMtNy4xNjc5NjgtMTYtMTYtMTZoLTQzLjY1NjI1Yy0xLjU1ODU5NC0yLjkyNTc4MS0zLjQyMTg3NS01LjcwMzEyNS01LjgzMjAzMS04LjEwOTM3NWwtNzEuODc4OTA2LTcxLjg4MjgxMyAxOTQuNzc3MzQzLjAyNzM0NCA5NS45NTcwMzIgOTUuOTY0ODQ0em0wIDAiIGZpbGw9IiMwMTJlNTIiLz48L3N2Zz4="
              text="El establecimiento controla los gastos mediante estrategias efectivas, como comprometer a la comunidad escolar con el uso responsable del agua y de la luz, comprar al por mayor, cotizar varias opciones antes de comprar, entregar los recursos de forma gradual, entre otras.
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

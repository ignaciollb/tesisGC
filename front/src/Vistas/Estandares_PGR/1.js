import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

//
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  // world of the day
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
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
  },
  card: { background: "linear-gradient(to top, #c9d6ff, #e2e2e2);" },
}));

function createData(Fuente, Antecedente) {
  return { Fuente, Antecedente };
}
const rows = [
  createData("Director", `Proyecto Educativo Institucional.`),
  createData(
    "Director",
    `Registro de revisión y actualización del Proyecto Educativo.
  `
  ),
  createData(
    "Director",
    `Medios de difusión del Proyecto Educativo.


  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista o encuesta al encargado de elaborar y revisar el Proyecto Educativo.

  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con el personal.

  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con estudiantes.

  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista, encuesta o grupo focal con padres y apoderados.
  `
  ),
  createData(
    "Equipo técnico",
    `Entrevista o encuesta al sostenedor, director y equipo directivo.
  `
  ),
];
export default function Subdimensiones() {
  const classes = useStyles();

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
            Estándar 1
          </Typography>
          <br></br>

          <Typography variant="body2" component="p">
            El establecimiento cuenta con un Proyecto Educativo Institucional
            actualizado que define claramente los lineamientos de la institución
            e implementa una estrategia efectiva para difundirlo. <br></br>
            Este estándar establece, para un nivel satisfactorio de gestión,
            que:
            <br></br>
            <br></br>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1069/1069288.svg?token=exp=1614199116~hmac=3be447a1ce958ad0cf43d7b46d5e3498"
              width="10px"
              align="center"
            ></img>
            <span> </span>El establecimiento cuenta con un Proyecto Educativo
            Institucional que incluye los antecedentes de la institución, la
            definición de las características del establecimiento (niveles de
            enseñanza, tamaño, modalidad, especialidades en el caso de educación
            técnico-profesional, régimen, financiamiento, entre otros), la
            finalidad educativa y la descripción concreta del perfil de
            estudiante que busca formar.
            <br></br>
            <br></br>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1069/1069288.svg?token=exp=1614199116~hmac=3be447a1ce958ad0cf43d7b46d5e3498"
              width="10px"
              align="center"
            ></img>
            <span> </span>El establecimiento difunde el Proyecto Educativo
            Institucional y promueve que la comunidad educativa lo conozca y
            adhiera a él. Por ejemplo, lo da a conocer mediante folletos,
            páginas web, charlas, libreta de comunicaciones y diarios murales.
            <br></br>
            <br></br>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1069/1069288.svg?token=exp=1614199116~hmac=3be447a1ce958ad0cf43d7b46d5e3498"
              width="10px"
              align="center"
            ></img>
            <span> </span>
            Los encargados de elaborar y revisar el Proyecto Educativo
            Institucional lo actualizan al menos cada cuatro años, y en el
            proceso consultan al Consejo Escolar.
          </Typography>
        </CardContent>
      </Card>
      <br></br>
      <br></br>
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
          <br></br>
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

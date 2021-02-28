import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

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
  media: {
    height: 320,
    width: "100%",
  },
  card: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  boton: {
    color: "#90caf9",
    backgroundColor: "#243238",
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
  boton_leer: {
    marginTop: 5,
    color: "#000",
  },
}));

export default function Subdimensiones(props) {
  const classes = useStyles();
  const { title } = props;

  class Estandar extends Component {
    render() {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.mineduc.cl/wp-content/uploads/sites/19/2020/03/IMG_1493.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PGR {this.props.numero}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.descripcion}
                </Typography>
                <Button color="primary" className={classes.boton_leer}>
                  Leer mas
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    }
  }

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
      <br></br>

      <Grid container spacing={3}>
        <Estandar
          numero="1"
          descripcion="El establecimiento define los cargos y funciones del personal, y la planta cumple con los requisitos estipulados para obtener y mantener el Reconocimiento Oficial."
        />
        <Estandar
          numero="2"
          descripcion="El establecimiento gestiona de manera efectiva la administración del personal."
        />
        <Estandar
          numero="3"
          descripcion="El establecimiento implementa estrategias efectivas para atraer, seleccionar y retener personal competente."
        />
        <Estandar
          numero="4"
          descripcion="El establecimiento cuenta con un sistema de evaluación y retroalimentación del desempeño del personal."
        />
        <Estandar
          numero="5"
          descripcion="El establecimiento cuenta con personal competente según los resultados de la evaluación docente y gestiona el perfeccionamiento para que los profesores mejoren su desempeño. "
        />
        <Estandar
          numero="6"
          descripcion="El establecimiento gestiona el desarrollo profesional y técnico del personal según las necesidades pedagógicas y administrativas."
        />
        <Estandar
          numero="7"
          descripcion="El establecimiento implementa medidas para reconocer el trabajo del personal e incentivar el buen desempeño. "
        />
        <Estandar
          numero="8"
          descripcion="El establecimiento cuenta con procedimientos justos de desvinculación.
          "
        />
        <Estandar
          numero="9"
          descripcion="El establecimiento cuenta con un clima laboral positivo.
          "
        />
      </Grid>
    </div>
  );
}

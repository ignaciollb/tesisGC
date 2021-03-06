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
import Upbar from "./Componentes/Upbar";

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
            <CardActionArea href={this.props.link}>
              <CardMedia
                className={classes.media}
                image="https://accioneducar.cl/wp-content/uploads/2019/02/D240CFA8-9696-4CB5-B6AF-6BD0C47346AC-700x464.jpeg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  GRE {this.props.numero}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button
              color="primary"
              className={classes.boton_leer}
              href={
                "https://lucid.app/documents/embeddedchart/6c429259-d153-4217-8459-d0dd74d444d3"
              }
              target="_blank"
            >
              Ver modelo
            </Button>
            <Button
              color="primary"
              className={classes.boton_leer}
              href={this.props.link}
            >
              Leer mas
            </Button>
          </Card>
        </Grid>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Upbar/>
      <Grid container spacing={3}>
        <Estandar
          link="/Subdimensiones/GRE/1"
          numero="1"
          descripcion="El establecimiento cuenta con la infraestructura y el equipamiento exigido por la normativa y estos se encuentran en condiciones que facilitan el aprendizaje de los estudiantes y el bienestar de la comunidad educativa."
        />
        <Estandar
          link="/Subdimensiones/GRE/2"
          numero="2"
          descripcion="El establecimiento cuenta con los recursos didácticos e insumos suficientes para potenciar el aprendizaje de los estudiantes y promueve su uso."
        />
        <Estandar
          link="/Subdimensiones/GRE/3"
          numero="3"
          descripcion="El establecimiento cuenta con una biblioteca escolar CRA(Centro de recursos para el aprendizaje) para apoyar el aprendizaje de los estudiantes y fomentar el hábito lector."
        />
        <Estandar
          link="/Subdimensiones/GRE/4"
          numero="4"
          descripcion="El establecimiento cuenta con recursos TIC en funcionamiento para el uso educativo y administrativo. 
          "
        />
        <Estandar
          link="/Subdimensiones/GRE/5"
          numero="5"
          descripcion="El establecimiento cuenta con un inventario actualizado del equipamiento y material educativo para gestionar su mantención, adquisición y reposición."
        />
      </Grid>
    </div>
  );
}

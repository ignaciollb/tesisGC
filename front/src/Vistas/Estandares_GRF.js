import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Upbar from "./Componentes/Upbar";
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
            <CardActionArea href={this.props.link}>
              <CardMedia
                className={classes.media}
                image="https://blogs.iadb.org/gestion-fiscal/wp-content/uploads/sites/6/2015/12/GFP.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  GRF {this.props.numero}
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
                "https://lucid.app/documents/embeddedchart/2e59acc8-d025-43bb-a5b6-b1e2104e50d5"
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
          link="/Subdimensiones/GRF/1"
          numero="1"
          descripcion="El establecimiento gestiona la matrícula y la asistencia de los estudiantes.
          "
        />
        <Estandar
          link="/Subdimensiones/GRF/2"
          numero="2"
          descripcion="El establecimiento elabora un presupuesto en función de las necesidades detectadas en el proceso de planificación, controla los gastos y coopera en la sustentabilidad de la institución."
        />
        <Estandar
          link="/Subdimensiones/GRF/3"
          numero="3"
          descripcion="El establecimiento lleva un registro ordenado de los ingresos y gastos y, cuando corresponde, rinde cuenta del uso de los recursos. "
        />
        <Estandar
          link="/Subdimensiones/GRF/4"
          numero="4"
          descripcion="El establecimiento vela por el cumplimiento de la normativa educacional vigente. 
          "
        />
        <Estandar
          link="/Subdimensiones/GRF/5"
          numero="5"
          descripcion="El establecimiento gestiona su participación en los programas de apoyo y asistencia técnica disponibles y los selecciona de acuerdo con las necesidades institucionales.
          "
        />
        <Estandar
          link="/Subdimensiones/GRF/6"
          numero="6"
          descripcion="El establecimiento conoce y utiliza las redes existentes para potenciar el Proyecto Educativo Institucional. 
          "
        />
      </Grid>
    </div>
  );
}

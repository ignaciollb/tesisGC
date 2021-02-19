import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: `
  height: 100vh;
  `,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: "#243238",
    color: "",
  },
  boton: {
    color: "#90caf9",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  landing: {
    marginTop: 50,
    justifyContent: "center",
  },
  landing_content: {
    marginRight: 5,
  },
  title2: {
    flexGrow: 1,
    marginTop: 50,
  },
  imagen: {
    width: 400,
  },
}));
export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { title } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title}>
            <span className={classes.boton}>nose que poner</span>
          </Typography>
          <Button className={classes.boton}>Registrarse</Button>
          <Button className={classes.boton} href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" align="center" className={classes.title2}>
        <span className={classes.boton}>
          GESTION DEL CONOCIMIENTO EN ESCUELAS
        </span>
      </Typography>
      <Grid container spacing={3} className={classes.landing}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              className={classes.imagen}
              src="https://www.teahub.io/photos/full/28-288489_fondos-de-pantalla-4k.jpg"
            ></img>
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            ¿Por qué lo usamos? Es un hecho establecido hace demasiado tiempo
            que un lector se distraerá con el contenido del texto de un sitio
            mientras que mira su diseño. El punto de usar Lorem Ipsum es que
            tiene una distribución más o menos normal de las letras, al
            contrario de usar textos como por ejemplo "Contenido aquí, contenido
            aquí". Estos textos hacen parecerlo un español que se puede leer.
            Muchos paquetes de autoedición y editores de páginas web usan el
            Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de
            "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este
            texto si se encuentran en estado de desarrollo. Muchas versiones han
            evolucionado a través de los años, algunas veces por accidente,
            otras veces a propósito (por ejemplo insertándole humor y cosas por
            el estilo)
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

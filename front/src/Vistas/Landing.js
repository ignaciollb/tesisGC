import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src="https://ruizhealytimes.com/wp-content/uploads/2018/08/gestion-conocimiento.png"></img>
          </Paper>
        </Grid>
        <Grid item xs={6}>
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

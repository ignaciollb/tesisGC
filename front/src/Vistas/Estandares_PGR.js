import React from "react";
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
import MainFeaturedPost from "./PGR";

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
    height: 140,
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
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PGR 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  El establecimiento cuenta con un Proyecto Educativo
                  Institucional actualizado que define claramente los
                  lineamientos de la institución e implementa una estrategia
                  efectiva para difundirlo.
                </Typography>
                <Button color="primary" className={classes.boton_leer}>
                  Leer mas
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button color="primary" className={classes.boton}>
                Iniciar proceso
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PGR 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  El establecimiento lleva a cabo un proceso sistemático de
                  autoevaluación que sirve de base para elaborar el plan de
                  mejoramiento.
                </Typography>
                <Button color="primary" className={classes.boton_leer}>
                  Leer mas
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button color="primary" className={classes.boton}>
                Iniciar proceso
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PGR 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  El establecimiento cuenta con un plan de mejoramiento que
                  define metas concretas, prioridades, responsables, plazos y
                  presupuestos.
                </Typography>
                <Button color="primary" className={classes.boton_leer}>
                  Leer mas
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button color="primary" className={classes.boton}>
                Iniciar proceso
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PGR 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  El establecimiento cuenta con un sistema efectivo para
                  monitorear el cumplimiento del plan de mejoramiento.
                </Typography>
                <Button color="primary" className={classes.boton_leer}>
                  Leer mas
                </Button>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button color="primary" className={classes.boton}>
                Iniciar proceso
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                PGR 5
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                El establecimiento recopila y sistematiza continuamente los
                datos sobre las características, los resultados educativos, los
                indicadores de procesos relevantes y la satisfacción de
                apoderados del establecimiento.
              </Typography>
              <Button color="primary" className={classes.boton_leer}>
                Leer mas
              </Button>
            </CardContent>
            <CardActions>
              <Button color="primary" className={classes.boton}>
                Iniciar proceso
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                PGR 6
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                El sostenedor y el equipo directivo comprenden, analizan y
                utilizan los datos recopilados para tomar decisiones educativas
                y monitorear la gestión.
                <br></br>
                <Button color="primary" className={classes.boton_leer}>
                  Leer mas
                </Button>
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" className={classes.boton}>
                Iniciar proceso
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

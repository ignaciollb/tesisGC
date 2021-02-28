import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Subdimension from "./Subdimension";
import Footer from "./Footer";

const mainFeaturedPost1 = {
  title: "Planificación y Gestión de Resultados (PGR)",
  description:
    "La subdimensión Planificación y Gestión de Resultados describe procedimientos y prácticas esenciales para el liderazgo y la conducción educativa. Los estándares establecen la importancia de planificar los grandes lineamientos del establecimiento y de plasmarlos en el Proyecto Educativo Institucional, así como también de diseñar el plan de mejoramiento, el cual articula el diagnóstico de la institución y las metas, acciones y medios para lograr los objetivos propuestos. Asimismo, esta subdimensión releva la recopilación, el análisis y el uso sistemático de datos como herramientas necesarias para la toma de decisiones educativas y el monitoreo de la gestión del establecimiento.",
  image:
    "https://www.visa.cl/dam/VCOM/regional/lac/SPA/Default/Pymes/Notasyrecursos/planificacion-empresa800x450.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
  ruta: "/Subdimensiones/PGR",
};
const mainFeaturedPost2 = {
  title: "Gestión de Personal (GP)",
  description:
    "La subdimensión Gestión de Personal describe las políticas, procedimientos y prácticas que implementa el establecimiento para contar con un equipo calificado y motivado, y con un clima laboral positivo. Los estándares determinan que la gestión del personal debe considerar las prioridades del Proyecto Educativo Institucional, las necesidades pedagógicas del establecimiento y la normativa vigente",
  image:
    "https://www.mineduc.cl/wp-content/uploads/sites/19/2020/03/IMG_1493.jpg",

  imgText: "main image description",
  linkText: "Ver estandares",
  ruta: "/Subdimensiones/GP",
};
const mainFeaturedPost3 = {
  title: "Gestión de Recursos Financieros (GRF)",
  description:
    "La subdimensión Gestión de Recursos Financieros describe las políticas y procedimientos implementados por el establecimiento para asegurar una administración ordenada y eficiente de todos los aspectos ligados a los recursos económicos de la institución y de las oportunidades provenientes de los programas de apoyo, alianzas y redes. Los estándares tienen por objetivo asegurar la sustentabilidad del proyecto, lo cual implica el uso eficiente y responsable de los recursos recibidos, el cumplimiento de la normativa y la obtención de beneficios provistos por los programas de apoyo disponibles y las redes existentes.",
  image:
    "https://blogs.iadb.org/gestion-fiscal/wp-content/uploads/sites/6/2015/12/GFP.jpg",

  imgText: "main image description",
  linkText: "Ver estandares",
  ruta: "/Subdimensiones/GRF",
};
const mainFeaturedPost4 = {
  title: "Gestión de Recursos Educativos  (GRE)",
  description:
    "La subdimensión Gestión de Recursos Educativos describe los procedimientos y prácticas que implementa el establecimiento para garantizar la adecuada provisión, organización y uso de los recursos educativos. Los estándares definen las condiciones, instalaciones y equipamientos necesarios para promover el bienestar de los estudiantes y potenciar su aprendizaje.",
  image:
    "https://accioneducar.cl/wp-content/uploads/2019/02/D240CFA8-9696-4CB5-B6AF-6BD0C47346AC-700x464.jpeg",

  imgText: "main image description",
  linkText: "Ver estandares",
  ruta: "/Subdimensiones/GRE",
};
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
      <Subdimension post={mainFeaturedPost1} />
      <Subdimension post={mainFeaturedPost2} />
      <Subdimension post={mainFeaturedPost3} />
      <Subdimension post={mainFeaturedPost4} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

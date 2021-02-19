import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Footer from "./Vistas/Footer";
import Nav from "./Vistas/Nav";
import Landing from "./Vistas/Landing";
import Subdimension from "./Vistas/Subdimensiones";
import Estandares from "./Vistas/Estandares_PGR";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Vistas/Login.js'
import Menu from './Vistas/Menu.js'
import axios from 'axios';

import { ProtectedRoute } from "./protectedRoute";
function App() {

  // function isLogued(view){
  //   axios.
  //     get("http://localhost:9000/api/usuarioInfo")
  //     .then(
  //       (response) =>{
  //         if(response.data == "Tienes que hacer login"){
  //           alert("Tienes que iniciar sesion")
  //           return <Redirect to="/login"/>
  //         }else{
  //           return view
  //         }
  //       }
  //     )
  // }

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login /> 
        </Route>
        <Route path="/menu">
          <Menu /> 
        </Route>
        <ProtectedRoute exact path="/menu" component={Menu} />
      </Switch>

  </Router>
    
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Footer from "./Vistas/Footer";
import Nav from "./Vistas/Nav";
import Landing from "./Vistas/Landing";
import Subdimension from "./Vistas/Subdimensiones";
import Estandares from "./Vistas/Estandares";
import Estandares_PGR from "./Vistas/Estandares_PGR";
import PGR_1 from "./Vistas/Estandares_PGR/1";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Vistas/Login.js'
import GRE from './Vistas/GP.js'
import Menu from './Vistas/Menu.js'
import {ProtectedRoute} from './protectedRoute'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <ProtectedRoute exact path="/estandares" component={Estandares}/>
        <ProtectedRoute exact path="/Subdimensiones/PGR" component={Estandares_PGR}/>
        <ProtectedRoute exact path="/Subdimensiones/PGR/1" component={PGR_1}/>
        <ProtectedRoute exact path="/Subdimensiones" component={Subdimension}/>
      </Switch>
    </Router>
    
  );
}

export default App;

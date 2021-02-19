import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Footer from "./Vistas/Footer";
import Nav from "./Vistas/Nav";
import Subdimension from "./Vistas/Subdimensiones";
import Estandares from "./Vistas/Estandares_PGR";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./Vistas/Login.js";
import Menu from "./Vistas/Menu.js";
import axios from "axios";

import { ProtectedRoute } from "./protectedRoute";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/Estandares_PGR">
          <Estandares />
        </Route>
        <Route path="/Subdimensiones">
          <Subdimension />
        </Route>
        <Route path="/">
          <Nav />
          <Footer />
        </Route>
        <ProtectedRoute exact path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;

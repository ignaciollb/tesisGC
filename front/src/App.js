import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Footer from "./Vistas/Footer";
import Nav from "./Vistas/Nav";
import Landing from "./Vistas/Landing";
import Subdimension from "./Vistas/Subdimensiones";
import Estandares from "./Vistas/Estandares";
import Estandares_PGR from "./Vistas/Estandares_PGR";
import Estandares_GP from "./Vistas/Estandares_GP";
import Estandares_GRF from "./Vistas/Estandares_GRF";
import Estandares_GRE from "./Vistas/Estandares_GRE";

import PGR_1 from "./Vistas/Estandares_PGR/1";
import PGR_2 from "./Vistas/Estandares_PGR/2";
import PGR_3 from "./Vistas/Estandares_PGR/3";
import PGR_4 from "./Vistas/Estandares_PGR/4";
import PGR_5 from "./Vistas/Estandares_PGR/5";
import PGR_6 from "./Vistas/Estandares_PGR/6";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./Vistas/Login.js";
import Menu from "./Vistas/Menu.js";
import { ProtectedRoute } from "./protectedRoute";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/estandares" component={Estandares} />
        <ProtectedRoute exact path="/Subdimensiones" component={Subdimension} />
        <ProtectedRoute
          exact
          path="/Subdimensiones/PGR"
          component={Estandares_PGR}
        />
        <ProtectedRoute
          exact
          path="/Subdimensiones/GP"
          component={Estandares_GP}
        />
        <ProtectedRoute
          exact
          path="/Subdimensiones/GRF"
          component={Estandares_GRF}
        />
        <ProtectedRoute
          exact
          path="/Subdimensiones/GRE"
          component={Estandares_GRE}
        />
        <ProtectedRoute exact path="/Subdimensiones/PGR/1" component={PGR_1} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/2" component={PGR_2} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/3" component={PGR_3} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/4" component={PGR_4} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/5" component={PGR_5} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/6" component={PGR_6} />
      </Switch>
    </Router>
  );
}

export default App;

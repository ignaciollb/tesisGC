import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Footer from "./Vistas/Componentes/Footer";
import Nav from "./Vistas/Componentes/Nav";
import Landing from "./Vistas/Landing";
import Subdimension from "./Vistas/Subdimensiones";
// import Estandares from "./Vistas/Estandares";
import Estandares_PGR from "./Vistas/Estandares_PGR";
import Estandares_GP from "./Vistas/Estandares_GP";
import Estandares_GRF from "./Vistas/Estandares_GRF";
import Estandares_GRE from "./Vistas/Estandares_GRE";

//PGR
import PGR_1 from "./Vistas/Estandares_PGR/1";
import PGR_2 from "./Vistas/Estandares_PGR/2";
import PGR_3 from "./Vistas/Estandares_PGR/3";
import PGR_4 from "./Vistas/Estandares_PGR/4";
import PGR_5 from "./Vistas/Estandares_PGR/5";
import PGR_6 from "./Vistas/Estandares_PGR/6";
//GP
import GP_1 from "./Vistas/Estandares_GP/1";
import GP_2 from "./Vistas/Estandares_GP/2";
import GP_3 from "./Vistas/Estandares_GP/3";
import GP_4 from "./Vistas/Estandares_GP/4";
import GP_5 from "./Vistas/Estandares_GP/5";
import GP_6 from "./Vistas/Estandares_GP/6";
import GP_7 from "./Vistas/Estandares_GP/7";
import GP_8 from "./Vistas/Estandares_GP/8";
import GP_9 from "./Vistas/Estandares_GP/9";
//GRF
import GRF_1 from "./Vistas/Estandares_GRF/1";
import GRF_2 from "./Vistas/Estandares_GRF/2";
import GRF_3 from "./Vistas/Estandares_GRF/3";
import GRF_4 from "./Vistas/Estandares_GRF/4";
import GRF_5 from "./Vistas/Estandares_GRF/5";
import GRF_6 from "./Vistas/Estandares_GRF/6";
//GRE
import GRE_1 from "./Vistas/Estandares_GRE/1";
import GRE_2 from "./Vistas/Estandares_GRE/2";
import GRE_3 from "./Vistas/Estandares_GRE/3";
import GRE_4 from "./Vistas/Estandares_GRE/4";
import GRE_5 from "./Vistas/Estandares_GRE/5";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./Vistas/Login.js";
import { ProtectedRoute } from "./protectedRoute";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <ProtectedRoute exact path="/estandares" component={Estandares} /> */}
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
        {/*PGR
         */}
        <ProtectedRoute exact path="/Subdimensiones/PGR/1" component={PGR_1} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/2" component={PGR_2} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/3" component={PGR_3} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/4" component={PGR_4} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/5" component={PGR_5} />
        <ProtectedRoute exact path="/Subdimensiones/PGR/6" component={PGR_6} />
        {/*GP
         */}
        <ProtectedRoute exact path="/Subdimensiones/GP/1" component={GP_1} />
        <ProtectedRoute exact path="/Subdimensiones/GP/2" component={GP_2} />
        <ProtectedRoute exact path="/Subdimensiones/GP/3" component={GP_3} />
        <ProtectedRoute exact path="/Subdimensiones/GP/4" component={GP_4} />
        <ProtectedRoute exact path="/Subdimensiones/GP/5" component={GP_5} />
        <ProtectedRoute exact path="/Subdimensiones/GP/6" component={GP_6} />
        <ProtectedRoute exact path="/Subdimensiones/GP/7" component={GP_7} />
        <ProtectedRoute exact path="/Subdimensiones/GP/8" component={GP_8} />
        <ProtectedRoute exact path="/Subdimensiones/GP/9" component={GP_9} />
        {/*GRF
         */}
        <ProtectedRoute exact path="/Subdimensiones/GRF/1" component={GRF_1} />
        <ProtectedRoute exact path="/Subdimensiones/GRF/2" component={GRF_2} />
        <ProtectedRoute exact path="/Subdimensiones/GRF/3" component={GRF_3} />
        <ProtectedRoute exact path="/Subdimensiones/GRF/4" component={GRF_4} />
        <ProtectedRoute exact path="/Subdimensiones/GRF/5" component={GRF_5} />
        <ProtectedRoute exact path="/Subdimensiones/GRF/6" component={GRF_6} />
        {/*GRE
         */}
        <ProtectedRoute exact path="/Subdimensiones/GRE/1" component={GRE_1} />
        <ProtectedRoute exact path="/Subdimensiones/GRE/2" component={GRE_2} />
        <ProtectedRoute exact path="/Subdimensiones/GRE/3" component={GRE_3} />
        <ProtectedRoute exact path="/Subdimensiones/GRE/4" component={GRE_4} />
        <ProtectedRoute exact path="/Subdimensiones/GRE/5" component={GRE_5} />
      </Switch>
    </Router>
  );
}

export default App;

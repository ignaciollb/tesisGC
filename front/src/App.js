import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Footer from "./Vistas/Footer";
import Nav from "./Vistas/Nav";
import Landing from "./Vistas/Landing";
import Subdimension from "./Vistas/Subdimensiones";
import Estandares from "./Vistas/Estandares";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Vistas/Login.js'
import Menu from './Vistas/Menu.js'
import {ProtectedRoute} from './protectedRoute'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {Landing}/>
        <Route exact path="/login" component={Login}/>
        <ProtectedRoute exact path="/menu" component={Subdimension}/>
      </Switch>
    </Router>
    
  );
}

export default App;

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
      </Switch>

  </Router>
    
  );
}

export default App;

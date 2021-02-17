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
        <Route path="/login">
          <Login /> 
        </Route>
        <ProtectedRoute exact path="/menu" component={Menu}/>
      </Switch>
    </Router>
    
  );
}

export default App;

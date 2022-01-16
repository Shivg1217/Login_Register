import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;

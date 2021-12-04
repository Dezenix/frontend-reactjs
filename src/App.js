import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/layouts/Login";
import Register from "./components/layouts/Register";
import Home from "./components/layouts/Home";
//Import your Components here

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route path="/login" component={Login} />;
          <Route path="/register" component={Register} />;
          {/* Add Route for your Components here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

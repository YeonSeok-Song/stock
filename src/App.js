import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { HelmetProvider } from "react-helmet-async";
import routes from "./routes";
import Home from './screens/Home'
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          {true ? (
              <Home/>
          ) : (
            <Login />
          )}
        </Route>
        {true ? (
          <Route path={routes.signUp}>
            <SignUp />
          </Route>
        ) : null}
        <Route path={`/users/:userName`}>
          {true ? (
              <Profile />
          ) : (
            <Login />
          )}
        </Route>
        <Router>
          404 Not found.
        </Router>
      </Switch>
    </Router>
  );
}

export default App;

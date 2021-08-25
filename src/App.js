import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import routes from "./routes";
import Home from './screens/Home'
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import { HelmetProvider } from "react-helmet-async";

//로그인 체크 해서 삼항연산자에서 체크

function App() {
    return (
        <HelmetProvider>
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
                        ) : (
                            <Home />
                        )
                    }
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
        </HelmetProvider>
    );
}

export default App;

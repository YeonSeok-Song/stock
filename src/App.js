import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import routes from "./routes";
import Home from './screens/Home'
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import { HelmetProvider } from "react-helmet-async";
import { loginCheck } from "./tools";
import { useEffect, useState } from 'react';

//로그인 체크 해서 삼항연산자에서 체크

function App() {

    const [loginState, setLoginState] = useState(true)

    useEffect(() => {
        // setLoginState(loginCheck())
    }, [loginState])

    return (
        <HelmetProvider>
            <Router>
                <Switch>
                    <Route path={routes.home} exact>
                        {loginState ? (
                            <Home/>
                            ) : (
                            <Login />
                        )}
                    </Route>
                    <Route path={routes.signUp}>
                        {!loginState ? (
                            <SignUp />
                            ) : (
                            <Redirect path={routes.home} exact />
                        )}
                    </Route>
                    <Route path={`/users/:userName`}>
                        {loginState ? (
                            <Profile />
                            ) : (
                            <Redirect path={routes.home} exact />
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

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { isAuthenticated } from "./config/auth";
import LoginRegister from "./pages/login";
import Logout from "./pages/logout";
import Main from "./pages/main";
import React from "react"


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/login" }} />
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path="/main" component={() => <Main />}/>
            <Route path="/login" component={() => <LoginRegister />}/>
            <Route  path="/logout" component={() => <Logout />}/>
            <Route  component={() => <LoginRegister />}/>
        </Switch>
    </BrowserRouter>
)

export default Routes
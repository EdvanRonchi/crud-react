import React from "react"
import LoginRegister from "./pages/login";
import Main from "./pages/main";


import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={() => <LoginRegister />}/>
            <Route path="/main" component={() => <Main />}/>
            <Route  component={() => <LoginRegister />}/>
        </Switch>
    </BrowserRouter>
)

export default Routes
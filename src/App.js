import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Pages/Main/Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";



function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main}/>
                </Switch>
            </BrowserRouter>

        </>
    );
}

export default App;

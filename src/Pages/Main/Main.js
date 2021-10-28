import React from "react";
import '../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../../Components/SideBar/SideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FrontFull from "../Front/FrontFull";
import FormQuestion from "../Question/FormQuestion";
import FrontPayment from "../Payment/FrontPayment";
import NewChannel from "../TV Kanal/NewChannel";
import User from "../../Components/Users/Users";
import Questions from "../../Components/Questions/Questions";
import Channel from "../../Components/Channel/Channel";
import Pay from "../../Components/Pay/Pay";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <div className="body w3-container w3-light-grey">
                            <Route path="/" component={SideBar}/>
                            <div className="w3-bar">
                                <Route path="/" exact component={User}/>
                                <Route path="/FrontFull/:id" component={FrontFull}/>
                                <Route path="/question" exact component={Questions}/>
                                <Route path="/FormQuestion/:action/:id" exact component={FormQuestion}/>
                                <Route path="/pay" exact component={Pay}/>
                                <Route path="/FrontPayment" exact component={FrontPayment}/>
                                <Route path="/tv" exact component={Channel}/>
                                <Route path="/newChannel" exact component={NewChannel}/>
                            </div>
                        </div>
                    </Switch>
                </BrowserRouter>
                <ToastContainer/>

            </>
        )
    }
}

export default Main;

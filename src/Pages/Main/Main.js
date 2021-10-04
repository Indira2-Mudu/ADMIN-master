import React from "react";
import '../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../../Components/SideBar/SideBar";
import Question from "../Question/Question";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Front from "../Front/Front";
import Payment from "../Payment/Payment";
import TV_Kanal from "../TV Kanal/TV_Kanal";
import FrontFull from "../Front/FrontFull";
import FormQuestion from "../Question/FormQuestion";
import FrontPayment from "../Payment/FrontPayment";
import FrontTV from "../TV Kanal/FrontTV";
import SideBar2 from "../../Components/SideBar/SideBar2";

class Main extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <div className="body w3-container w3-light-grey">
                            <Route path="/" component={SideBar}/>
                            <Route path="/" component={SideBar2}/>
                            <div className="w3-bar">
                                <Route path="/" exact component={Front}/>
                                <Route path="/FrontFull" component={FrontFull}/>
                                <Route path="/question" exact component={Question}/>
                                <Route path="/FormQuestion" exact component={FormQuestion}/>
                                <Route path="/pay" exact component={Payment}/>
                                <Route path="/FrontPayment" exact component={FrontPayment}/>
                                <Route path="/tv" exact component={TV_Kanal}/>
                                <Route path="/FrontTV" exact component={FrontTV}/>
                            </div>
                        </div>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default Main;

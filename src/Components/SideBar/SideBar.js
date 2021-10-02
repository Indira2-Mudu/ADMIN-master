import React from "react";
import '../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch} from "react-router-dom";



class SideBar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div className="w3-container w3-light-grey w3-card">
                        <div className="w3-bar">
                            <nav className="w3-sidebar w3-light-grey w3-bar-block mySidebar">
                                <a className="w3-bar-item w3-border-bottom w3-large" href="https://natv.kg/">
                                    <img src={"https://natv.kg/static/user/ima/logo.png"} alt="1"
                                         style={{width: '80%'}}/>
                                </a>
                                <a className="w3-bar-item w3-button" href="/">Клиент и заказ</a>
                                <a className="w3-bar-item w3-button" href="/question">Вопросы и ответы</a>
                                <a className="w3-bar-item w3-button" href="/tv">TV Каналы</a>
                                <a className="w3-bar-item w3-button" href="/pay">Платежные системы</a>
                            </nav>
                        </div>
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default SideBar;
import React from "react";
import '../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";


class SideBar extends React.Component {
    render() {
        return (

            <div className="w3-container w3-light-grey w3-card">
                <div className="w3-bar w3-card">
                    <nav className="w3-sidebar w3-light-grey w3-bar-block mySidebar page w3-card">
                        <NavLink className="w3-large" to="https://natv.kg/">
                            <img src={"https://natv.kg/static/user/ima/logo.png"} alt="1"/>
                        </NavLink>
                        <NavLink className="w3-bar-item w3-button" to="/">Клиент и заказ</NavLink>
                        <NavLink className="w3-bar-item w3-button" to="/question">Вопросы и ответы</NavLink>
                        <NavLink className="w3-bar-item w3-button" to="/tv">TV Каналы</NavLink>
                        <NavLink className="w3-bar-item w3-button" to="/pay">Платежные системы</NavLink>
                    </nav>
                </div>
            </div>

        )
    }
}

export default SideBar;
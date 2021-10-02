import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class Front extends React.Component {
    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">

                    <div className=" w3-bar">
                        <h2 id="mcetoc_1cboteuor0"> Клиент и заказ</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 p-3 bg-light w3-card">
                                <table>
                                    <tr>
                                        <th><b>ФИО</b></th>
                                        <th><p> Иванов И.И.</p></th>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <th><p>ivanov@mail.ru</p></th>
                                    </tr>
                                </table>

                                <Link to={`/FrontFull`}>
                                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6 p-3 bg-light w3-card">
                                <table>
                                    <tr>
                                        <th><b>ФИО</b></th>
                                        <th><p> Иванов И.И.</p></th>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <th><p>ivanov@mail.ru</p></th>
                                    </tr>
                                </table>
                                <Link to={`/FrontFull`}>
                                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6 p-3 bg-light w3-card">
                                <table>
                                    <tr>
                                        <th><b>ФИО</b></th>
                                        <th><p> Иванов И.И.</p></th>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <th><p>ivanov@mail.ru</p></th>
                                    </tr>
                                </table>
                                <Link to={`/FrontFull`}>
                                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6 p-3 bg-light w3-card">
                                <table>
                                    <tr>
                                        <th><b>ФИО</b></th>
                                        <th><p> Иванов И.И.</p></th>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <th><p>ivanov@mail.ru</p></th>
                                    </tr>
                                </table>
                                <Link to={`/FrontFull`}>
                                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6 p-3 bg-light w3-card">
                                <table>
                                    <tr>
                                        <th><b>ФИО</b></th>
                                        <th><p> Иванов И.И.</p></th>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <th><p>ivanov@mail.ru</p></th>
                                    </tr>
                                </table>
                                <Link to={`/FrontFull`}>
                                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </Link>
                            </div>
                            <div className="col-6 p-3 bg-light w3-card">
                                <table>
                                    <tr>
                                        <th><b>ФИО</b></th>
                                        <th><p> Иванов И.И.</p></th>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <th><p>ivanov@mail.ru</p></th>
                                    </tr>
                                </table>
                                <Link to={`/FrontFull`}>
                                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Front;
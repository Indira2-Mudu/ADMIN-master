import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import mtc from '../../Media/mtc.gif';
import optima from '../../Media/optima.gif';
import optima24 from '../../Media/24.gif';
import ter from '../../Media/ter.gif';
import qo from '../../Media/qo.gif';
import o_de from '../../Media/o de.gif';
import balance from '../../Media/bala.gif';
import kyr from '../../Media/kyr.gif';
import els from '../../Media/els.gif';
import kasa from '../../Media/kasa.gif';
import um from '../../Media/um.gif';
import mega from '../../Media/mega.gif';
import visa from '../../Media/170_vis.gif';
import master from '../../Media/master170.gif';
import pay24Logo from '../../Media/pay24-logo.png';
import {Link} from "react-router-dom";


class Payment extends React.Component {
    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">
                    <div className=" w3-bar w3-padding-16">
                        <h2 id="mcetoc_1cboteuor0">Раздел <br/> добавления, удаления и редактирования
                            <br/>ОПЛАТЫ УСЛУГ</h2>
                    </div>
                    <div className="w3-container">
                        <Link to={`/FrontPayment`}>
                            <button data-bs-toggle="modal" data-bs-target="#add-modal"
                                className="w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                type="submit"
                                style={{float: 'right'}}>
                                <h3>Добавить</h3>
                            </button>
                        </Link>
                    </div>
                    <div className="w3-container">
                        <div className="w3-container" style={{textAlign: 'center'}}>
                            <table>
                                <tr>
                                    <th><h3>Ситема оплаты</h3></th>
                                    <th><h3>Раздел</h3></th>
                                    <th><h3>Управление</h3></th>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={mtc} alt="MTC"/>
                                    </td>
                                    <td>Раздел -Реклама</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={optima} alt="Optima"/>
                                    </td>
                                    <td>Раздел - Кабельное Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={optima24} alt="Optim-24"/>
                                    </td>
                                    <td>Раздел - Кабельное Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ter} alt="ter"/>
                                    </td>
                                    <td>Раздел- Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={qo} alt="qo"/>
                                    </td>
                                    <td>Раздел - Объявления</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={o_de} alt="o de"/>
                                    </td>
                                    <td>Раздел- Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={balance} alt="balance"/>
                                    </td>
                                    <td>Раздел- Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={kyr} alt="kyr"/>
                                    </td>
                                    <td>Все отделения связи</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={els} alt="els"/>
                                    </td>
                                    <td>Раздел- Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={kasa} alt="kasa"/>
                                    </td>
                                    <td>Раздел - Реклама</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={um} alt="um"/>
                                    </td>
                                    <td>Раздел- Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={mega} alt="mega"/>
                                    </td>
                                    <td>Раздел- Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={visa} alt="visa"/>
                                    </td>
                                    <td/>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={master} alt="master"/>
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={pay24Logo} alt="pay24Logo"/>
                                        <p>Платежная система «Pay24»</p>
                                    </td>
                                    <td>Раздел - Телевидение</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Payment;
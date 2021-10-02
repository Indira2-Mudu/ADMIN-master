import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

class FrontPayment extends React.Component {
    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">
                    <div className=" w3-bar w3-padding-16">
                        <h2 id="mcetoc_1cboteuor0">Раздел <br/> добавления, удаления и редактирования
                            <br/>ОПЛАТЫ УСЛУГ</h2>
                    </div>
                    <form action="#" target="_blank">
                        <div className="w3-row-padding">
                            <div className="w3-half">
                                <input className="w3-input w3-border-image" type="img" placeholder="платёжная система"/>
                            </div>
                            <div className="w3-half">
                                <input className="w3-input w3-border" type="text" placeholder="раздел"/>
                            </div>
                        </div>
                        <Link to={`/question`}>
                            <button
                                className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                type="submit"
                                style={{float: 'right'}}>
                                <h3>Добавить</h3>
                            </button>
                        </Link>
                        <Link to={`/question`}>
                            <button
                                className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                type="submit"
                                style={{float: 'right'}}>
                                <h3>Назад</h3>
                            </button>
                        </Link>
                    </form>
                </div>
            </>
        )
    }
}

export default FrontPayment;
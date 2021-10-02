import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

class FrontTV extends React.Component {
    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">
                    <div className=" w3-bar w3-padding-16">
                        <h2 id="mcetoc_1cboteuor0">Раздел <br/> добавления, удаления и редактирования <br/>КАНАЛОВ</h2>
                    </div>
                    <div className="w3-container">
                        <form action="#" target="_blank">
                            <div className="w3-row-padding">
                                <div className="w3-half">
                                    <input className="w3-input w3-border-image" type="img" placeholder="канал"/>
                                </div>
                                <div className="w3-half">
                                    <input className="w3-input w3-border" type="text"
                                           placeholder="наименование канала"/>
                                </div>
                            </div>
                            <div className="w3-container">
                                <Link to={`/tv`}>
                                    <button
                                        className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                        type="submit"
                                        style={{float: 'right'}}>
                                        <h3>Добавить</h3>
                                    </button>
                                </Link>
                                <Link to={`/tv`}>
                                    <button
                                        className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                        type="submit"
                                        style={{float: 'right'}}>
                                        <h3>Назад</h3>
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default FrontTV;
import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ind from "../../Media/ind.jpg";
import autoG from "../../Media/auto.jpg";

class FrontFull extends React.Component {
    render() {
        return (
            <div className="w3-container w3-card page_1">
                <div className="row">
                    <div className="p-3 bg-light w3-card">
                        <table>
                            <tr>
                                <th><b>ФИО</b></th>
                                <th><p> Иванов И.И.</p></th>
                            </tr>
                            <tr>
                                <th><b>Электронная почта</b></th>
                                <th><p>ivanov@mail.ru</p></th>
                            </tr>
                            <tr>
                                <th><b>Текст/баннер</b></th>
                                <th><img src={ind} alt="ind" style={{width: '30%'}}/></th>
                            </tr>
                            <tr>
                                <th><b>Выбор канала</b></th>
                                <th><img src={autoG} alt="auto" className="image"/><span> - АВТОгид</span><hr/>
                                    <img src={autoG} alt="auto" className="image"/><span> - АВТОгид</span><hr/>
                                    <img src={autoG} alt="auto" className="image"/><span> - АВТОгид</span></th>
                            </tr>
                            <tr>
                                <th><b>Период показа</b></th>
                                <th>4-5 дней</th>
                            </tr>
                        </table>
                        <button className="w3-button"
                                type="submit"
                                style={{float: 'right'}}>
                            <i className="bi bi-pencil-square"/>

                        </button>
                        <button className="w3-button"
                                type="button"
                                style={{float: 'right'}}>
                            <i className="bi bi-trash"/>
                        </button>

                    </div>
                </div>
                <button onClick={() => this.props.history.goBack()}
                        className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block">
                    <h3>Назад</h3>
                </button>
            </div>
        )
    }
}

export default FrontFull;
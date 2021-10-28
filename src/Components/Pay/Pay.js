import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom";
import Payment from "../../Pages/Payment/Payment";


class Pay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pay:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3002/pay')
            .then(response => {
                if(response.ok){
                    return response.json()
                }else{
                    alert('Что то пошло не такю Код ошибки:' + response.status)
                }
            })
            .then(data =>this.setState({pay:data}))
    }
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
                                    <th><h3>Статус</h3></th>
                                    <th><h3>Управление</h3></th>
                                </tr>
                                {
                                    this.state.pay.map(item=>{
                                        return<Payment
                                            pay={item.pay}
                                            section={item.section}
                                            status={item.status}
                                        />
                                    })
                                }
                            </table>
                        </div>
                    </div>
                    <br/>
                </div>
            </>
        )
    }
}

export default Pay;
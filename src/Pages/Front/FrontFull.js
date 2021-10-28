import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalDate from "../../Components/ModalDate/ModalDate";

class FrontFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            modal: false
        }

    }

    componentDidMount() {

        fetch(`http://localhost:3002/users/${this.props.match.params.id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert('Что то пошло не так: Код статуса:' + response.status)
                }
            })
            .then(data =>
                this.setState({
                    post: data,
                }))
    }


    render() {
        return (
            <div className="w3-container w3-card page_1">
                <div className="row">
                    <div className="p-3 bg-light w3-card">
                        <table>
                            <tr>
                                <th><b>Данные клиента</b></th>
                                <th><p>{this.state.post.name}</p></th>
                            </tr>
                            <tr>
                                <th><b>Электронная почта</b></th>
                                <th><p>{this.state.post.email}</p></th>
                            </tr>
                            <tr>
                                <th><b>Текст/баннер</b></th>
                                <th><img src={this.state.post.image} alt="ind" style={{width: '30%'}}/></th>
                            </tr>
                            <tr>
                                <th><b>Выбор канала</b></th>
                                <th><img src={this.state.post.channel} alt="auto"
                                         className="image"/><span> - {this.state.post.TVName}</span></th>
                            </tr>
                            <tr>
                                <th><b>Период показа</b></th>
                                <th>4-5 дней</th>
                            </tr>
                        </table>
                        <button type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="w3-button"
                                style={{float: 'right'}}>
                            <i className="bi bi-pencil-fill"/>

                        </button>
                        <button className="w3-button"
                                type="button"
                                onClick={() => this.setState({ modal: true })}
                                style={{float: 'right'}}>
                            <i className="bi bi-trash-fill"/>
                        </button>

                    </div>
                </div>
                <button onClick={() => this.props.history.goBack()}
                        className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block">
                    <h3>Назад</h3>
                </button>
                <ModalDate
                    show={this.state.modal}
                    onHide={() => this.setState({ modal: true })}
                />
            </div>
        )
    }
}

export default FrontFull;
import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Payment extends React.Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.pay} alt="i"/></td>
                <td>{this.props.section}</td>
                <td>
                    <label>
                        <input className="w3-check"
                               type="checkbox"
                               style={{width: '15px'}}
                               checked={this.props.status === 1 ? true : false}/>
                    </label>
                </td>
                <td>
                    <button type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className="w3-button"
                            style={{width: 'center'}}>
                        <i className="bi bi-pencil-fill"/>

                    </button>
                    <button className="w3-button"
                            type="button"
                            onClick={() => this.setState({modal: true})}
                            style={{float: 'center'}}>
                        <i className="bi bi-trash-fill"/>
                    </button>
                </td>
            </tr>
        )
    }
}

export default Payment;
import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class Front extends React.Component {
    render() {
        return (
            <div className="col-6 p-3 bg-light w3-card">
                <table>
                    <tr>
                        <th><b>Данные клиента</b></th>
                        <th><p>{this.props.name}</p></th>
                    </tr>
                    <tr>
                        <th><b>Электронная почта</b></th>
                        <th><p>{this.props.email}</p></th>
                    </tr>
                </table>

                <Link to={`/FrontFull/${this.props.id}`}>
                    <button className="w3-button" type="submit" style={{float: 'right'}}>
                        <i className="fa fa-arrow-right"/>
                    </button>
                </Link>
            </div>
        )
    }
}

export default Front;
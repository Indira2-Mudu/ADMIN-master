import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

class Button extends React.Component{
    render() {
        return(
            <p className="my-button">
                <Link to={`/FormQuestion/update/${this.props.id}`}>
                    <button className="w3-button w3-white w3-border" type="submit">
                        <h3>Редактировать</h3>
                    </button>
                </Link>
                <button className="w3-button w3-white w3-border" type="submit">
                    <h3>Удалить</h3>
                </button>
            </p>
        )
    }
}
export default Button;
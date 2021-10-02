import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Button extends React.Component{
    render() {
        return(
            <p className="my-button">
                <button className="w3-button w3-white w3-border" type="submit">
                    <h3>Редактировать</h3>
                </button>
                <button className="w3-button w3-white w3-border" type="submit">
                    <h3>Удалить</h3>
                </button>
            </p>
        )
    }
}
export default Button;
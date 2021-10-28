import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../../Components/Button/Button";
import {toast} from "react-toastify";

class FullQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pd-40 bg-white page reklama w3-container">
                <table>
                    <br/>
                    <tr>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}><strong>{this.props.question}</strong></span></li>
                        </ul>
                    </tr>
                    <tr>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>{this.props.answer}<br/></span></li>
                        </ul>
                    </tr>
                    <tr>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>статус :{this.props.status}</span></li>
                            <Button id={this.props.id}/>
                        </ul>
                    </tr>
                </table>
            </div>
        )
    }
}

export default FullQuestion;
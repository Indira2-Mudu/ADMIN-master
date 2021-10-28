import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../../Components/Button/Button";
import {toast} from "react-toastify";




class PublishedQuestion extends React.Component{


    render() {
        return(
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
                        <Button/>
                    </ul>
                </tr>
            </table>
        )
    }
}

export default PublishedQuestion;


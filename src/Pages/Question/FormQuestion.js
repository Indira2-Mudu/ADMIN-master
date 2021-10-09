import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


class FrontQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question:{}
        }
    }

    componentDidMount() {
        fetch( 'http://localhost:3003/questions')
            .then(response =>{
                if(response.ok){
                    return response.json();
                }else{
                    alert('Что то пошло не так.Код ошибки: ', response.status)
                }
            })
            .then(data=> this.setState( {question:data}))
    }

    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">
                    <div className=" w3-bar w3-padding-16">
                        <h1 id="mcetoc_1cboteuor0"> Добавить вопросы и ответы</h1>
                    </div>
                    <div className="w3-container">
                        <div className="p-3 bg-light w3-card">
                            <form action="#" target="_blank">
                                <p><input
                                    className="w3-input w3-padding-16"
                                    type="text"
                                    placeholder="Вопрос"
                                    required name="question"/>
                                </p>
                                <p><textarea
                                    className="w3-input w3-padding-16"
                                    placeholder="Ответ"
                                    required name="Message"/>
                                </p>
                            </form>
                        </div>
                        <Link to={`/question`}>
                            <button
                                className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                type="submit"
                                style={{float: 'right'}}>
                                <h3>Добавить</h3>
                            </button>
                        </Link>
                        <button
                            onClick={() => this.props.history.goBack()}
                            className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block">
                            <h3>Назад</h3>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default FrontQuestion;
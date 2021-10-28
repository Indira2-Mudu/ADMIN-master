import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {toast} from "react-toastify";

class FrontQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
            status: "1"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveAnswer = this.saveAnswer.bind(this);
        this.getQuestionById = this.getQuestionById.bind(this);
    }

    componentDidMount() {
        const action = this.props.match.params.action;
        if (action === 'update'){
            this.getQuestionById();
        }
    }

    getQuestionById(){
        const id = this.props.match.params.id;
        fetch(`http://localhost:3002/questions?_sort=id&_order=desc`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert('Что то пошло не так. Код ошибки:' + response.status)
                }
            })
            .then(data => {
                this.setState({
                    question:data[0].question,
                    answer:data[0].answer
                })
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.id]:event.target.value
        })

    }

    handleSubmit(){
        let obj = this.state;
        obj.object = this.props.id;

        this.saveAnswer(obj);
    }

    saveAnswer(obj){
        const url = 'http://localhost:3002/questions';
        let options = {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        }

        fetch(url, options)
            .then(response => {
                if(response.ok){
                    toast.success('Ваш вопрос и ответ добавлены');
                    return response.json();
                } else {
                    toast.error(`Что то пошло не так. Код ошибки:${response.status}`);
                }
            })
            .then(data => {
                this.setState({
                    object: data,
                })
            })

    }

    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">
                    <div className=" w3-bar w3-padding-16">
                        <h1> Добавить вопросы и ответы</h1>
                    </div>
                    <div className="w3-container">
                        <div className="p-3 bg-light w3-card">
                            <form action="#" target="_blank">
                                <p><input
                                    className="w3-input w3-padding-16"
                                    type="text"
                                    placeholder="Вопрос"
                                    id="question"
                                    value={this.state.q}
                                    onChange={this.handleChange}/>
                                </p>
                                <p><textarea
                                    className="w3-input w3-padding-16"
                                    placeholder="Ответ"
                                    id="answer"
                                    value={this.state.a}
                                    onChange={this.handleChange}/>
                                </p>
                            </form>
                        </div>
                        {/*<Link to={`/question`}>*/}
                        <button
                            className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                            onClick={this.handleSubmit}
                            style={{float: 'right'}}>
                            <h3>Добавить</h3>
                        </button>
                        {/*</Link>*/}

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
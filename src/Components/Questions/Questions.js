import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom";
import FullQuestion from "../../Pages/Question/FullQuestion";


class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            object: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3002/questions?_sort=id&_order=desc')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert('Что то пошло не так. Код ошибки:' + response.status)
                }
            })
            .then(data => this.setState({object: data}))
    }

    render() {
        return (
            <div className="w3-container w3-card page_1">
                <div className=" w3-bar w3-padding-16">
                    <h1 id="mcetoc_1cboteuor0"> Все ответы на вопросы!</h1>
                </div>
                <div className="w3-container">
                    <Link to={`/FormQuestion/add/new`}>
                        <button
                            className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                            type="submit"
                            style={{float: 'right'}}>
                            <h3>Добавить</h3>
                        </button>
                    </Link>
                </div>
                <div className="pd-40 bg-white page reklama w3-container">
                    {
                        this.state.object.map(item => {
                            return <FullQuestion
                                question={item.question}
                                answer={item.answer}
                                status={item.status}
                                id={item.id}
                            />
                        })
                    }
                </div><br/>
            </div>
        )
    }
}

export default Question;
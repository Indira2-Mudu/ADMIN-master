import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Front from "../../Pages/Front/Front";


class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3002/users')
            .then(response => {
                if(response.ok){
                    return response.json()
                }else{
                    alert('Что то пошло не такю Код ошибки:' + response.status)
                }
            })
            .then(data =>this.setState({users:data}))
    }

    render() {
        return (
            <>
                <div className="w3-container w3-card page_1">

                    <div className=" w3-bar">
                        <h2 id="mcetoc_1cboteuor0"> Клиент и заказ</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.users.map(item=>{
                                    return<Front
                                        name={item.name}
                                        email={item.email}
                                        img = {item.image}
                                        channel={item.channel}
                                        id = {item.id}
                                        TVName = {item.TVName}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User;
import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom";
import TV_Channel from "../../Pages/TV Kanal/TV_Channel";


class Channel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channel: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3002/channel')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert('Что то пошло не такю Код ошибки:' + response.status)
                }
            })
            .then(data => this.setState({channel: data}))
    }

    render() {
        return (

            <div className="w3-container w3-card page_1">
                <div className=" w3-bar w3-padding-16">
                    <h2 id="mcetoc_1cboteuor0">Раздел <br/> добавления, удаления и редактирования <br/>КАНАЛОВ</h2>
                </div>
                <div className="w3-container">
                    <div className="w3-container">
                        <Link to={`/newChannel`}>
                            <button className="w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                                    type="submit" style={{float: 'right'}}>
                                <h3>Добавить</h3>
                            </button>
                        </Link>
                    </div>
                    <div className="w3-container" style={{textAlign: 'center'}}>
                        <div className="w3-container" style={{textAlign: 'center'}}>
                            <table>
                                <tr>
                                    <th><h3>Каналы</h3></th>
                                    <th><h3>Наименование канала</h3></th>

                                    <th><h3>Статус</h3></th>
                                    <th><h3>Управление</h3></th>
                                </tr>
                                {
                                    this.state.channel.map(item => {
                                        return <TV_Channel
                                            channel={item.channel}
                                            TV_name={item.TV_name}
                                            status={item.status}
                                            id={item.id}
                                        />
                                    })
                                }
                            </table>
                        </div>

                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Channel;
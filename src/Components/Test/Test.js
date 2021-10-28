import ReactDOM from "react-dom";
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Col extends Component {
    render() {
        return <div>{this.props.data}</div>;
    }
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { Firstname: "Jill", Lastname: "Bill", Age: 18 },
                { Firstname: "Jill2", Lastname: "Bill2", Age: 180 },
                { Firstname: "Jill3", Lastname: "Bill3", Age: 1 }
            ],
            modal: false
        };
    }

    renderColumn() {
        return this.state.items.map(i => (
            <tr>
                <td>
                    <Col data={i.Firstname} />
                </td>
                <td>
                    <Col data={i.Lastname} />
                </td>
                <td>
                    <Col data={i.Age} />
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table>
                    <thead />
                    <tbody>{this.renderColumn()}</tbody>
                </table>
                <Button
                    variant="primary"
                    onClick={() => this.setState({ modal: true })}
                >
                    Launch vertically centered modal
                </Button>
                <p>------------------------------------------------------</p>
                <MyModal
                    show={this.state.modal}
                    onHide={() => this.setState({ modal: true })}
                />
            </div>
        );
    }
}

export class MyModal extends Component {
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Mark</Button>
                    <Button variant="primary">Joseph</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}
ReactDOM.render(<Todo />, document.getElementById("root"));
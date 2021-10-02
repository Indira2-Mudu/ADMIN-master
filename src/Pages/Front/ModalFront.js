import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ModalFront extends React.Component{
    render() {
        return(
            <div className="modal fade"
                 id="update-user-modal"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Редактирование пользователя</h5>
                            <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form id="update-form">
                                <div className="mb-3">
                                    <label className="form-label">Имя</label>
                                    <input type="text" className="form-control" name="name" id="upd-name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Номер телефона</label>
                                    <input type="text" className="form-control" name="phone" id="upd-phone"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Пин код</label>
                                    <input type="text" className="form-control" name="pin" id="upd-pin"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Логин</label>
                                    <input type="text" className="form-control" name="pin" id="upd-code"/>
                                </div>
                                <input type="hidden" name="id" id="upd-id"/>
                                <button type="submit" className="btn btn-dark" id="update_btn">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalFront;
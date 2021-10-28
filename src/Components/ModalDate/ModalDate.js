import React from "react";


class ModalDate extends React.Component {

    render() {
        return (
            <>
                <div className="modal fade" id="exampleModal"
                     tabIndex="-1"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"
                                    id="exampleModalLabel">Редактировать</h5>
                                <button type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <table>
                                    <tr>
                                        <th><b>Данные клиента</b></th>
                                        <input type="text"/>
                                    </tr>
                                    <tr>
                                        <th><b>Электронная почта</b></th>
                                        <input type="email"/>
                                    </tr>
                                    <tr>
                                        <th><b>Текст/баннер</b></th>
                                        <input type="text"/>
                                    </tr>
                                    <tr>
                                        <th><b>Выбор канала</b></th>
                                        <input type="url"/>

                                    </tr>
                                    <tr>
                                        <th><b>Период показа</b></th>
                                        <input type="date" value="начало"/>
                                        <input type="date" value="окончание"/>
                                    </tr>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="w3-button w3-border"
                                        data-bs-dismiss="modal">Закрыть
                                </button>
                                <button type="button"
                                        className="w3-button w3-border">Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default ModalDate;
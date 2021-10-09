import React from "react";
import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../../Components/Button/Button";
import {Link} from "react-router-dom";

class Question extends React.Component {
    render() {
        return (
            <div className="w3-container w3-card page_1">
                <div className=" w3-bar w3-padding-16">
                    <h1 id="mcetoc_1cboteuor0"> Все ответы на вопросы!</h1>
                </div>
                <div className="w3-container">
                    <Link to={`/FormQuestion`}>
                        <button
                            className="w3-card w3-button w3-section w3-padding-large w3-white w3-border w3-block"
                            type="submit"
                            style={{float: 'right'}}>
                            <h3>Добавить</h3>
                        </button>
                    </Link>
                </div>
                <div className="pd-40 bg-white page reklama w3-container">
                    <form action="#" target="_blank">
                        <ol>
                            <li><span style={{fontSize: 18 + 'px'}}>
                                    <strong>Что такое сервис </strong>
                                    <strong>NaTV.</strong><strong>kg?</strong>
                                </span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Сервис NaTV.kg (НаТВ) создан для
                                быстрого,удобного и легкогоразмещения рекламы. Теперь разместить
                                рекламу на все телевизоры Кыргызстана Вы можете, быстро, просто и не
                                выходя из дома с любой точки нашейПланеты!<br/><br/>
                                </span>
                            </li>
                            <Button/>
                        </ul>
                        <ol start="2">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                    <strong>Кaк разместить рекламу на ТВ?</strong>
                                </span>
                            </li>
                        </ol>
                        <p><span style={{fontSize: 18 + 'px'}}>Для того, чтобы разместить бегущую строку
                                или баннерную рекламу наТВ Вам необходимо:
                            </span>
                        </p>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>
                                Ввести текст объявления или загрузить баннер</span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>Выбрать даты и телеканалы для показа.
                                Нажать кнопку «Разместить» и получить платежный код для оплаты через Терминалы и Кассы или моментально
                                оплатить банковской картой.</span><span style={{fontSize: 18 + 'px'}}> </span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="3">
                            <li><span
                                style={{fontSize: 18 + 'px'}}><strong>Как узнать (получить) платежный код?</strong>
                                </span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>При нажатии кнопки «Разместить объявление», Выперейдете на
                                страницу с указанием платежного кода, суммы к оплате и срока коплате</span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>При оформлении заявки укажите свой номер мобильного
                                телефона и/или e-mail и Вам придет Ваш платежный код</span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>Если Вы не указали контакты, Вы можете написать
                                нам на <a href="mailto:info@natv.kg">info@natv.kg</a>или просто оформить
                                новую заявку<br/>
                                </span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="4">
                            <li><span style={{fontSize: 18 + 'px'}}><strong>На какие каналы можно разместить
                                    рекламу?</strong>
                            </span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>К размещению доступны телеканалы: Рен ТВ, НТС, Любимый HD,
                                Семейный+Домашний, КТРК, ТНТ Кыргызстан, Пирамида, МИР, Эхо Манаса, Пятница 2.0, НТВ KG, НБТ,
                                Ош ТВ, Ынтымак ТВ, TVKG, TV2.KG, Prime TV, Умут ТВ, СТВ, Санат, 8 канал, 7 канал, НУР, Азия ТВ,
                                НТС Спорт, Кыргыз ТВ, Керемет ТВ, EVENT TV, 5 канал, Максимум ТВ, ЭлТР, ТНТ 4, Tigiboo.</span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>Также к размещению доступна реклама на радио:
                                Авторадио, Радио Романтика, Тумар, Хит FM.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="5">
                            <li><span style={{fontSize: 18 + 'px'}}><strong>В какое время будет выходить
                                моя бегущая строка?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Ваше объявление будет выходить в течение всего дня,
                                выбранного к размещению. В среднем от 8 до 30 раз в день. Количество показов зависит от
                                выбранного Вами телеканала.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="6">
                            <li><span
                                style={{fontSize: 18 + 'px'}}><strong>Как оплатить за объявление?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Услуги размещения бегущей строки, Вы можете
                                оплатить любым удобным способом.</span><br/><span style={{fontSize: 18 + 'px'}}>
                                Оплата принимается в сети терминалов:</span><br/>
                                <span style={{fontSize: 18 + 'px'}}><strong>OptimaBank, Касса 24, M&amp;TC, Quickpay,
                                Terempay, Qiwi, Umai, Pay24</strong></span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>Через электронные кошельки и интернет банкинг:
                                </span><br/><span style={{fontSize: 18 + 'px'}}><strong>Optima24, ЭЛСОМ, UMAI,
                                O!Деньги, Balance.kg,MegaPay,&nbsp;Visa, Master Card, Pay24</strong>
                                </span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>Также оплата за объявления на ТВ принимается в
                                отделениях<strong>ГП «Кыргыз почтасы».</strong></span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>Для юридических лиц, оплата за размещение бегущей
                                строки и баннерной рекламы на ТВ также </span>
                                <span style={{fontSize: 18 + 'px'}}>возможна перечислением на банковский
                                счет.&nbsp;<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="7">
                            <li>
                                <span style={{fontSize: 18 + 'px'}}>
                                <strong>Почему нужно оплатить до 15:00?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Оплату необходимо произвести до 15:00 дня,
                                предшествующего первому дню размещения рекламы. Это необходимо для того, чтобы
                                телеканалы подготовили Вашу рекламу для размещения в эфире.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="8">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Как рассчитывается стоимость за рекламу?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Количество символов*стоимость за 1
                                символ*количество дней.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="9">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Что будет если я не успею оплатить до 15:00?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Ваша реклама будет пущена на следующий возможный день
                                после оплаты.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="10">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Нужно ли указывать номер телефона в тексте объявления?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Чтобы Ваши потенциальные клиенты знали куда
                                обращаться, нужно указать номер телефона. Контактные данные внизу страницы
                                служат только для оповещений о статусе Вашей заявки, заполнив контактные данные
                                Вам придет SMS оповещение и/или сообщение на электронную почту. Если Вы укажите
                                номер телефона только в форме для оповещения, а в тексте объявление номер
                                телефона указан не будет, на телеканале Ваше объявление выйдет таким как, было
                                указано в поле «текст объявления».<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="11">
                            <li><span style={{fontSize: 18 + 'px'}}> <strong>Если я оплачиваю от организации, какие
                                документы Вы можете мнепредоставить?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Мы можем Вам предоставить счет-фактуру и акт
                                выполненных работ и все необходимые документы для бухгалтерии.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="12">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Что если я хочу отменить заявку?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Ваша заявка считается не активной до тех пор,
                                пока Вы не произведете оплату. Поэтому Вы можете пробовать и рассчитывать
                                стоимость сколько Вам необходимо.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="13">
                            <li><span style={{fontSize: 18 + 'px'}}><strong>Если я хочу разместить баннер, но у меня нет
                                готового баннера и/или его размер (формат) не подходит?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Мы всегда рады помочь нашим клиентам и поэтому Вы
                                можете написать нам на <a href="mailto:info@natv.kg">info@natv.kg</a>
                                или разместить заявку и указать свой номер телефона. И мы с Вами обязательно
                                свяжемся и разработаем лучший баннер именно для Вас!<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="14">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Можно ли просто поздравить близких?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Конечно можно и нужно! Упоминание Ваших близких
                                на всех телеканалах страны порадует Ваших родных!<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="15">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Обязательно ли указывать контакты внизу страницы?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Вовсе не обязательно, но указав их Вы получите
                                уведомления об оформлении заявки, о поступлении оплаты и другую информацию.</span>
                            </li>
                        </ul>
                        <Button/>
                        <ol start="16">
                            <li><span style={{fontSize: 18 + 'px'}}>
                                <strong>Могу ли я оплатить заявку банковской картой?</strong></span>
                            </li>
                        </ol>
                        <ul>
                            <li><span style={{fontSize: 18 + 'px'}}>Вы можете произвести оплату банковской картой Visa и
                                MasterCard за размещение Вашей рекламы на ТВ. После оформления заявки на сайте
                                Вам необходимо нажать кнопку "оплатить" - ввести реквизиты Вашей банковской
                                карты - подтвердить оплату.</span>
                            </li>
                            <li><span style={{fontSize: 18 + 'px'}}>&nbsp;Для этого необходимо чтобы для Вашей карты
                                была открыта возможность проведения платежей в интернете. Уточнить об этой
                                возможности Вы можете у банка, в котором была получена Ваша карта.<br/><br/></span>
                            </li>
                        </ul>
                        <Button/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Question;
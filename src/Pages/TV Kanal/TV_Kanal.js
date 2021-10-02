import React from "react";

import './../../GlobalCSS.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ren from "../../Media/ren.jpg";
import ntc from "../../Media/ntc.jpg";
import ktrk from "../../Media/ktrk.jpg";
import cinemax from "../../Media/cinemax.jpg";
import tnt from "../../Media/tnt.gif";
import semey from "../../Media/semey.gif";
import boorsok from "../../Media/boorsok.png";
import rt from "../../Media/rt.jpg";
import auto from "../../Media/auto.jpg";
import kyrgyz from "../../Media/kyrgyzstan.jpg";
import asia from "../../Media/asiaTV.gif";
import mirTV from '../../Media/mir.gif'
import piramida from "../../Media/piramida.png";
import fiveK from '../../Media/5kanal.gif';
import Vevent from "../../Media/event.jpg";
import marva from "../../Media/marva.png";
import hit from "../../Media/hit.gif";
import autoG from "../../Media/auto.jpg";
import tumar from "../../Media/tumar.gif";
import eltr from '../../Media/eltr.gif';
import osh from "../../Media/osh.png";
import newTV from "../../Media/newTV.png";
import SevenK from "../../Media/7kanal.gif";
import tv2 from "../../Media/TV2.jpg";
import prime from "../../Media/prime.gif";
import yntymak from "../../Media/ytymak.jpg";
import ctv from "../../Media/stv.jpg";
import eightK from "../../Media/8kanal.gif";
import manas from "../../Media/manas.jpg";
import nur from "../../Media/nur.gif";
import keremet from "../../Media/keremet.gif";
import pyatnica from "../../Media/pyatnica.gif";
import ntv from "../../Media/ntv.gif";
import life from "../../Media/life.gif";
import {Link} from "react-router-dom";

class TV_Kanal extends React.Component{
    render() {
        return(
            <>
                <div className="w3-container w3-card page_1">
                    <div className=" w3-bar w3-padding-16">
                        <h2 id="mcetoc_1cboteuor0">Раздел <br/> добавления, удаления и редактирования <br/>КАНАЛОВ</h2>
                    </div>
                    <div className="w3-container">
                            <div className="w3-container">
                                <Link to={`/FrontTV`}>
                                    <button className="w3-button w3-section w3-padding-large w3-white w3-border w3-block" type="submit" style={{float: 'right'}}>
                                        <h3>Добавить</h3>
                                    </button>
                                </Link>
                            </div>
                        <div className="w3-container" style={{textAlign: 'center'}}>
                            <table>
                                <tr>
                                    <th><h3>Каналы</h3></th>
                                    <th><h3>Наименование канала</h3></th>
                                    <th><h3>Управление</h3></th>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ren} alt="ren"/>
                                    </td>
                                    <td>Рен ТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ntc} alt="ntc"/>
                                    </td>
                                    <td>НТС</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ktrk} alt="ktrk"/>
                                    </td>
                                    <td>КТРК</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={cinemax} alt="cinemax"/>
                                    </td>
                                    <td>ЛЮБИМЫЙ HD + CINEMAX HD</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={tnt} alt="tnt"/>
                                    </td>
                                    <td>ТНТ КЫРГЫЗСТАН</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={semey} alt="semey"/>
                                    </td>
                                    <td>СЕМЕЙНЫЙ + ДОМАШНИЙ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={boorsok} alt="boorsok"/>
                                    </td>
                                    <td>BOORSOK TV</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={rt} alt="rt"/>
                                    </td>
                                    <td>RUSSIA TODAY DOCUMENTARY (RТDOC)</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={auto} alt="auto"/>
                                    </td>
                                    <td>АВТОГИД ГАЗЕТА</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={kyrgyz} alt="kyrgyz"/>
                                    </td>
                                    <td>КЫРГЫЗСТАН</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={asia} alt="asia"/>
                                    </td>
                                    <td>АЗИЯ ТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={piramida} alt="piramida"/>
                                    </td>
                                    <td>ПИРАМИДА</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={mirTV} alt="mir"/>
                                    </td>
                                    <td>МИР</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={fiveK} alt="pyatyikanal"/>
                                    </td>
                                    <td>5 КАНАЛ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={Vevent} alt="event"/>
                                    </td>
                                    <td>EVENT TV</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={marva} alt="marva"/>
                                    </td>
                                    <td>МАРВА ТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={hit} alt="hit"/>
                                    </td>
                                    <td>ХИТ FM РАДИОСТАНЦИЯ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={autoG} alt="auto"/>
                                    </td>
                                    <td>АВТОРАДИО РАДИОСТАНЦИЯ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={tumar} alt="tumar"/>
                                    </td>
                                    <td>ТУМАР РАДИОСТАНЦИЯ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={eltr} alt="eltr"/>
                                    </td>
                                    <td>ЭЛТР</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={osh} alt="osh"/>
                                    </td>
                                    <td>ОШ ТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={newTV} alt="newTV"/>
                                    </td>
                                    <td>NEW TV</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={SevenK} alt="7kanal"/>
                                    </td>
                                    <td>7 КАНАЛ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={tv2} alt="tv2"/>
                                    </td>
                                    <td>TV2.KG</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={prime} alt="prime"/>
                                    </td>
                                    <td>PRIME TV</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={yntymak} alt="yntymak"/>
                                    </td>
                                    <td>ЫНТЫМАК ТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ctv} alt="stv"/>
                                    </td>
                                    <td>СТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={eightK} alt="8kanal"/>
                                    </td>
                                    <td>8 КАНАЛ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={manas} alt="manas"/>
                                    </td>
                                    <td>ЭХО МАНАСА</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={nur} alt="nur"/>
                                    </td>
                                    <td>НУР</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={keremet} alt="keremet"/>
                                    </td>
                                    <td>КЕРЕМЕТ ТВ</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={pyatnica} alt="pyatnica"/>
                                    </td>
                                    <td>ПЯТНИЦА 2.0</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ntv} alt="ntv"/>
                                    </td>
                                    <td>НТВ KG</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={life} alt="life"/>
                                    </td>
                                    <td>LIFE</td>
                                    <td>
                                        <button className="w3-button w3-border" type="submit">
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default TV_Kanal;
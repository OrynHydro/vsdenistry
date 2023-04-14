import './headerBottom.css'

import gps from './../../images/icon/gps.svg';
import clock from './../../images/icon/clock.svg';

import { Link } from 'react-router-dom';

const HeaderBottom = () => {
    return ( 
            <div className="header-bottom">
                <div className="wrap">

                    <div className="header-bottom__container">

                        <div className="header-bottom__block">
                            <img src={gps} alt="gps" />
                            <div className="header-bottom__info">
                                <h4>ул. Новоорловская 11</h4>
                                <p>г.Днепр</p>
                                <Link href="tel:+38 095 555 55 55">+38 095 555 55 55</Link>
                            </div>
                        </div>

                        <div className="header-bottom__block">
                            <img src={gps} alt="gps" />
                            <div className="header-bottom__info">
                                <h4>ул.Оранжерейна, 45</h4>
                                <p>г.Днепр</p>
                                <Link href="tel:+38 095 666 66 66">+38 095 666 66 66</Link>
                            </div>
                        </div>

                        <div className="header-bottom__block">
                            <img src={clock} alt="clock" />
                            <div className="header-bottom__info">
                                <span>График работы</span>
                                <p>ПН-ПТ: 10:00 - 20:00</p>
                                <p>СБ-ВС: 11:00 - 18:00</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
    );
}

export default HeaderBottom;
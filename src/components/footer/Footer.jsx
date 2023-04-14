import './footer.css';

import footerLogo from './../../images/logo/logo__footer.svg';

import { NavLink, Link } from 'react-router-dom';

import gps from './../../images/icon/gps.svg';
import clock from './../../images/icon/clock.svg'

import instagram from './../../images/icon/instagram.svg';
import facebook from './../../images/icon/facebook.svg';

const Footer = () => {
    return ( 
        <footer>

            <div className="footer-top">
                <div className="wrap">
                    <div className="footer-top__container">
                        <div className="footer-top__logo">
                            <img src={footerLogo} alt="footerLogo" />
                            <h3>СТОМАТОЛОГИЯ</h3>
                        </div>
                        <div className="footer-top__navbar">
                            <NavLink to="/">
                                <span className='footer-top__navbarLink'>Главная</span>
                            </NavLink>
                            <div className='circle'></div>
                            <NavLink to="/about">
                                <span className='footer-top__navbarLink'>О клинике</span>
                            </NavLink>
                            <div className='circle'></div>
                            <NavLink to="/services">
                                <span className='footer-top__navbarLink'>Услуги</span>
                            </NavLink>
                            <div className='circle'></div>
                            <NavLink to="/sales">
                                <span className='footer-top__navbarLink'>Цены</span>
                            </NavLink>
                            <div className='circle'></div>
                            <NavLink to='/contacts'>
                                <span className='footer-top__navbarLink'>Контакты</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="wrap">
                    <div className="footer-bottom__container">
                        <div className="footer-bottom__addition">
                            <h4>Посмотреть на карте</h4>
                            <p id='privacy'>Политика конфиденциальности</p>
                            <p>© 2020. VS clinic</p>
                        </div>
                        <div className="footer-bottom__adress">
                            <div className="footer-bottom__block">
                                <img src={gps} alt="gps" />
                                <div className="footer-bottom__info">
                                    <h4>ул. Новоорловская 11</h4>
                                    <p>г.Днепр</p>
                                    <Link to="tel:+38 095 555 55 55">+38 095 555 55 55</Link>
                                </div>
                            </div>
                            <div className="footer-bottom__block">
                                <img src={gps} alt="gps" />
                                <div className="footer-bottom__info">
                                    <h4>ул.Оранжерейна, 45</h4>
                                    <p>г.Днепр</p>
                                    <Link to="tel:+38 095 666 66 66">+38 095 666 66 66</Link>
                                </div>
                            </div>
                            <div className="footer-bottom__block">
                                <img src={clock} alt="clock" />
                                <div className="footer-bottom__info">
                                    <span>График работы</span>
                                    <p>ПН-ПТ: 10:00 - 20:00</p>
                                    <p>СБ-ВС: 11:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom__social">
                            <h4>Социальные сети</h4>
                            <span>
                                <img src={instagram} alt="instagram" />
                                <p>vs_1245</p>
                            </span>
                            <span>
                                <img src={facebook} alt="" />
                                <p>vs_1245</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
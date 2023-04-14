import './headerTop.css'

import { NavLink } from 'react-router-dom';

import { useState } from 'react';

import logo from './../../images/logo/logo.svg';
import Form from './../form/Form'

const HeaderTop = () => {

    let [formActive, setFormActive] = useState(false);
    return ( 
        <>
            <Form active={formActive} setActive={setFormActive} />
            <div className="header-top">
                <div className="wrap">

                    <div className="header-top__container">

                        <NavLink to="/">
                            <span className="header-top__logo">
                                <img src={logo} alt="logo" />
                                <h3>СТОМАТОЛОГИЯ</h3>
                            </span>
                        </NavLink>
                        
                        <div className="header-top__navbar">
                            <NavLink to="/">
                                <span className="header-top__link">Главная</span>
                            </NavLink>
                            <NavLink to="/about">
                                <span className="header-top__link">О клинике</span>
                            </NavLink>
                            <NavLink to="/services">
                                <span className="header-top__link">Услуги</span>
                            </NavLink>
                            <NavLink to="/sales">
                                <span className="header-top__link">Акции</span>
                            </NavLink>
                            <NavLink to='/contacts'>
                                <span className="header-top__link">Контакты</span>
                            </NavLink>
                        </div>
                        <button onClick={() => setFormActive(true)} className="header-top__btn">Записаться на прием</button>

                    </div>

                </div>
            </div>
            
        </>
    );
}

export default HeaderTop;
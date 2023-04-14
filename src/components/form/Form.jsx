import './form.css'

import cross from './../../images/icon/cross.svg'
import calendar from './../../images/icon/calendar.svg'

import { useState } from 'react'

const Form = ({active, setActive}) => {

    let [activeBlock1, setActiveBlock1] = useState(true);
    let [activeBlock2, setActiveBlock2] = useState(false);

    let [text, setText] = useState("Выбрать дату")

    let [name, activeName] = useState('');
    let [phone, activePhone] = useState('');
    let [date, activeDate] = useState('');

    let [nameStatus, setNameStatus] = useState(false);
    let [phoneStatus, setPhoneStatus] = useState(false);
    let [dateStatus, setDateStatus] = useState(false);

    // Validation of name input

    function nameValidate(e) {
        if(!e.target.value) {
            activeName('Введите имя');
            setNameStatus(false);
        } else if (e.target.value) {
            activeName('');
            setNameStatus(true);
        }
    }

    // Validation of phone input

    function phoneValidate(e) {
        const pattern = /^\d+\.?\d*$/;
        if(!e.target.value || !pattern.test(e.target.value)) {
            activePhone('Введите телефон');
            setPhoneStatus(false);
        } else if (e.target.value) {
            activePhone('');
            setPhoneStatus(true);
        }
    }

    // Validation of date input

    function handleTextChange(e) {
        setText(e.target.value);
        dateDiffValidate(e)
    }

    function dateValidate(e) {
        if(!e.target.value) {
            activeDate('Введите дату')
            setDateStatus(false);
        } else if (e.target.value) {
            activeDate('')
            setDateStatus(true);
        }
        dateDiffValidate(e)
    }

    function dateDiffValidate(e) {
        let splited = e.target.value.split('');

        let date = new Date();

        const yearNow = date.getFullYear();
        const monthNow = date.getMonth() + 1;
        const dayNow = date.getDate();

        let year = +splited.slice(0, 4).join('')
        let month = +splited.slice(5, 7).join('')
        let day = +splited.slice(8, 10).join('')

        if(year < yearNow) {
            activeDate('Введите дату')
            setDateStatus(false);
        }

        if(month < monthNow && year <= yearNow) {
            activeDate('Введите дату')
            setDateStatus(false);
        }

        if(day < dayNow && month <= monthNow && year <= yearNow) {
            activeDate('Введите дату')
            setDateStatus(false);
        }
    }

    // Validaion of form

    function formValidate(e) {

        if(nameStatus === false) {
            e.preventDefault();
            activeName('Введите имя');
        }
        if(phoneStatus === false) {
            e.preventDefault();
            activePhone('Введите телефон');
        }
        if(dateStatus === false) {
            e.preventDefault();
            activeDate('Введите дату');
        }
    }

    if(active === false) {
        return false
    } else if(active === true) {
        return (
            <div className='formBlock'>
                <div onClick={() => setActive(false)} className="overlay"></div>
                <form onSubmit={formValidate} className="form">
                    <img className='cross' onClick={() => setActive(false)} src={cross} alt="" />
                    <div className="formContainer">
                        <h1 className='formTitle'>Записаться на прием</h1>
                        <span className='validationTextName'>{name}</span>
                        <input className={name === "Введите имя" ? 'formInput redBorder' : 'formInput'} type="text" placeholder='Ваше имя' onBlur={nameValidate} />
                        <span className='validationTextPhone'>{phone}</span>
                        <input className={phone === "Введите телефон" ? 'formInput redBorder' : 'formInput'} type="text" placeholder='Ваш телефон' onBlur={phoneValidate} />
                        <div className="dateBlock">
                            <span className="validationTextDate">{date}</span>
                            <img className='calendar' src={calendar} alt="" />
                            <input className={date === "Введите дату" ? 'formInputDate redBorder' : 'formInputDate'} type="date" id='inputDate' onChange={handleTextChange} onBlur={dateValidate} />
                            <label className='labelDate' htmlFor="inputDate">{text}</label>
                        </div>
                        <h4>Выберите клинику</h4>
                        <div className="formInputBlock">
                            <div className={activeBlock1 ? "formInputBlockItem-active" : "formInputBlockItem"}>
                                <input id='radio1' type="radio" name='radioInput' defaultChecked />
                                <label onClick={() => {setActiveBlock1(true); setActiveBlock2(false)}} htmlFor="radio1">ул. Новоорловская 11 </label>
                            </div>
                            <div className={activeBlock2 ? "formInputBlockItem-active" : "formInputBlockItem"}>
                                <input id='radio2' type="radio" name='radioInput' />
                                <label onClick={() => {setActiveBlock2(true); setActiveBlock1(false)}} htmlFor="radio2">ул.Оранжерейна, 45</label>
                            </div>
                        </div>
                        <input type="submit" value='Записаться' />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
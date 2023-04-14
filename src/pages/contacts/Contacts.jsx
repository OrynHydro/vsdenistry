import { Address } from "../../components/index";

import { clinics } from '../../helpers/clinicAddressesList';

import { Link } from "react-router-dom";

import instagram from './../../images/icon/instagram.svg';
import facebook from './../../images/icon/facebook.svg';

import img1 from './../../images/img/ContactsPageImg.svg';

const Contacts = () => {
    return ( 
        <>
            <div className="contacts__addressBlock">
                <div className="contacts__addressBlock-container">
                    <h2 className="contacts__addressBlock-title">Клиника VS ваше средство хорошей улыбки</h2>
                    <div className="contacts__adressBlock-content">
                        <div className="contacts__adressBlock-textBlock">

                            {clinics.map((item, index) => {
                                return <Address key={index} name={item.name} address={item.address} city={item.city} tel={item.tel} workingHours={item.workingHours} />
                            })}

                            <h4>Мы в социальных сетях</h4>
                            <div className="imgBlock">
                                <img src={instagram} alt="" />
                                <img src={facebook} alt="" />
                            </div>
                            <p className="email">Электронная почта </p>
                            <Link to="mailto: vs-denticle@gmail.com" className="emailLink">vs-denticle@gmail.com</Link>

                        </div>

                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>

            <div className="contacts__mapBlock">
                <h2 className="contacts__mapBlock-title">Найти нас очень просто</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.747141133178!2d34.978822415892964!3d48.46138093653119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bcaaaafc5b%3A0x522fae41adefdbd8!2z0YPQuy4g0J3QvtCy0L7QvtGA0LvQvtCy0YHQutCw0Y8sIDExLCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1678529897905!5m2!1sru!2sua" 
                    width="1480" 
                    height="746" 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="map"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}

export default Contacts;
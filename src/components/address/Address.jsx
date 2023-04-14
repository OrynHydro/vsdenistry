import './address.css';

import { Link } from 'react-router-dom';

import gps from './../../images/icon/gps.svg';

const Address = ({name, address, city, tel, workingHours}) => {
    return ( 
        <div className="contacts__adressBlock-textBlockItem">
            <span className='clinicName'>
                <img src={gps} alt="" />
                {name}
            </span>
            <span className='clinicAddress'>{address}</span>
            <span className='clinicCity'>{city}</span>
            <Link to='tel: `${tel}`' className='clinicTel'>{tel}</Link>
            <span className='clinicWorkingHours'>{workingHours}</span>
        </div>
    );
}

export default Address;
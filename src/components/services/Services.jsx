import './services.css';

import { useState } from 'react';

const Services = ({title, text, imgCommon, imgWhite}) => {

    const [hover, setHover] = useState(false);

    return ( 
        <div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <div className="home__servicesBlock-item">
                    <img src={hover === true ? imgWhite : imgCommon} alt="" />
                    <h3>{title}</h3>
                    <p>{text}</p>
            </div>
        </div>
    );
}

export default Services;    
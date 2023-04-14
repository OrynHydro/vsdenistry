import './service.css'

import tooth from './../../images/icon/tooth.svg'

const Service = ({title, img}) => {
    return ( 
        <div className='serviceItem'>
            <img className='background' src={img} alt="" />
            <div className="serviceItem-content">
                <img src={tooth} alt="" />
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Service;
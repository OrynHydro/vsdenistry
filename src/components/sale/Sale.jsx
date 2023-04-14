import './sale.css'
import { useState } from 'react';

const Sale = () => {

    let [hover, setHover] = useState(false);

    return ( 
        <>
            <div className="sales__block">
                <div className="sales__container">
                    <div className="sales__remainsBlock">
                        <span>Осталось 2 недели</span>
                    </div>
                    <div className="sales__content">
                        <span className="percentage"> -50%</span>
                        <h2>Комплексная чистка зубов</h2>
                        <p>Профессиональная гигиеническая чистка зубов является неотъемлемой частью индивидуальных профилактических программ.</p>
                        <span className='crossed'>700 грн</span>
                        <span className="price">350 грн</span>
                    </div>
                    <div className="sales__imgBlock">
                        <button onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>Узнать подробнее</button>
                        <div className={hover === true ? 'overlayActive' : 'overlay'}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sale;
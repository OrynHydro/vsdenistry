import './details.css'

import detailsImg from './../../images/img/HomePageImg.svg'

const Details = () => {
    return ( 
        <div className="home__detailsBlock">
            <div className="wrap">
                <div className="home__detailsBlock-container">
                    <img src={detailsImg} alt="" />
                    <div className="home__detailsBlock-content">
                        <h1 className="home__detailsBlock-title">VS стоматология</h1>
                        <h2 className="home__detailsBlock-subtitle">стоматология для всей семьи.</h2>
                        <span>У нас вы получите:</span>
                        <p> - Полный спектр стоматологических услуг.</p>
                        <p> - Современные и инновационные технологи лечения.</p>
                        <p> - К каждому клиенту у нас индивидуальный подход.</p>
                        <p> -Безопасность вашего лечения,  ведь мы выполняем все программы инфекционного контроля.</p>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
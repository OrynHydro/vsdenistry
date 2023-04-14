import './request.css'

const Request = () => {
    return ( 
        <div className="home__requestBlock">
            <div className="wrap">
                <div className="home__requestBlock-container">
                    <h2 className="home__requestBlock-title">Заказать звонок, мы перезвоним вам через 30 секунд</h2>
                    <input type="tel" placeholder='Ваш номер телефона' />
                    <button>Заказать звонок</button>
                </div>
            </div>
        </div>
    );
}

export default Request;
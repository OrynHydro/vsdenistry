import './achievements.css'

const Achievements = () => {
    return ( 
        <div className="home__achievementsBlock">
                <div className="home__achievementsBlock-container">
                    <div className="home__achievementsBlock-left">
                        <p>Нами созданно</p>
                        <h1>190</h1>
                        <p>идеальных улыбок</p>
                    </div>
                    <div className="home__achievementsBlock-center">
                        <p>Нам</p>
                        <h1>1</h1>
                        <p>Год</p>
                    </div>
                    <div className="home__achievementsBlock-right">
                        <p>Счастливых</p>
                        <h1>1010</h1>
                        <p>Клиентов</p>
                    </div>
                </div>
        </div>
    );
}

export default Achievements;
import './attendance.css'

const Attendance = ({title, text, img, flexDirection}) => {
    return ( 
                <div className="services__attendanceBlock-container" style={{flexDirection: `${flexDirection}`}}>
                    <div className="greyBlock">
                        <img src={img} alt="" />
                    </div>
                    <div className="services__attendanceBlock-content">
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <button>Узнать больше</button>
                    </div>
                </div>
    );
}

export default Attendance;
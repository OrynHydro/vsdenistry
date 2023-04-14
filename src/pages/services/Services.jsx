import { subheaders } from "../../helpers/subheaderList";
import { attendance } from "../../helpers/attendance";

import { Achievements, Subheader, HeaderBottom, Attendance } from "../../components/index";

const Services = () => {

    let subheader = subheaders.find(id => id.title === "Наши услуги")

    return ( 
        <main>

            <HeaderBottom />

            <Subheader key={subheaders.indexOf(subheader)} title={subheader.title} text={subheader.text} img={subheader.img} />

            <div className="services__attendanceBlock">
                <div className="wrap">
                    {attendance.map((item, index) => {
                        return <Attendance key={index} title={item.title} text={item.text} img={item.img} flexDirection={item.flexDirection} />
                    })}
                </div>
            </div>

            <Achievements />
        </main>
    );
}

export default Services;
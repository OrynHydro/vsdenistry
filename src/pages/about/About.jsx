import { subheaders } from "../../helpers/subheaderList";
import { service } from "../../helpers/serviceList";
import { advert } from "../../helpers/advertList";

import { Achievements, Subheader, Advert, Service, HeaderBottom } from "../../components/index";


const About = () => {

    let subheader = subheaders.find(id => id.title === "О клинике")

    return ( 
        <main>
            <HeaderBottom />


            <Subheader key={subheaders.indexOf(subheader)} title={subheader.title} text={subheader.text} img={subheader.img} />

            <Advert img={advert[0].img} title={advert[0].title} address={advert[0].address} text={advert[0].text} addition={advert[0].addition} />

            <div className="about__serviceBlock">
                {service.map((item, index) => {
                    return <Service key={index} title={item.title} img={item.img} />
                })}
            </div>

            <Advert flexDirection={advert[1].flexDirection} img={advert[1].img} title={advert[1].title} subtitle={advert[1].subtitle} address={advert[1].address} text={advert[1].text} mission={advert[1].mission} addition={advert[1].addition} />

            <Achievements />
        </main>
    );
}

export default About;
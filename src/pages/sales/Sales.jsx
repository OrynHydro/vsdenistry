import { NavLink } from "react-router-dom";

import { Subheader, Achievements, HeaderBottom, Sale } from "../../components/index";

import { subheaders } from "../../helpers/subheaderList";

const Sales = () => {

    let subheader = subheaders.find(id => id.title === "Акции")

    return ( 
        <main>

            <HeaderBottom />

            <Subheader key={subheaders.indexOf(subheader)} title={subheader.title} text={subheader.text} img={subheader.img} />

            <Sale />

            <NavLink to="/services">
                <p className="services">Перейти на услуги</p>
            </NavLink>
            

            <Achievements />
        </main>
    );
}

export default Sales;
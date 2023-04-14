import './advert.css'



const Advert = ({img, address, title, text, subtitle, addition, flexDirection}) => {
    return ( 
            <div className='about__advertBlock'>
                <div className="wrap">
                    <div className="about__advertBlock-container" style={{flexDirection: `${flexDirection}`}}>
                        <img src={img} alt="" />
                        <div className="about__advertBlock-content">
                            <span>
                                <svg width="20" height="28" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99099 0.920654C5.87238 0.923035 3.84122 1.76524 2.34314 3.26249C0.845052 4.75974 0.0023821 6.78977 0 8.9072C0 14.4421 7.99999 23.8988 7.99999 23.8988C7.99999 23.8988 15.983 14.1713 15.983 8.9072C15.9806 6.78959 15.1378 4.75942 13.6395 3.26214C12.1412 1.76486 10.1098 0.922771 7.99099 0.920654V0.920654ZM10.402 11.2459C9.92511 11.7226 9.31751 12.0472 8.65602 12.1788C7.99453 12.3104 7.30886 12.2429 6.68572 11.985C6.06259 11.727 5.52998 11.2902 5.15526 10.7297C4.78053 10.1693 4.58052 9.51032 4.58052 8.83624C4.58052 8.16215 4.78053 7.5032 5.15526 6.94273C5.52998 6.38226 6.06259 5.94543 6.68572 5.6875C7.30886 5.42957 7.99453 5.36212 8.65602 5.49367C9.31751 5.62523 9.92511 5.94988 10.402 6.42658C10.7198 6.74237 10.9719 7.11783 11.144 7.53137C11.3161 7.94491 11.4047 8.38836 11.4047 8.83624C11.4047 9.28411 11.3161 9.72757 11.144 10.1411C10.9719 10.5546 10.7198 10.9301 10.402 11.2459Z" fill="#AFAFAF"/>
                                </svg>
                                {address}
                            </span>
                            <h1>{title}</h1>
                            <p>
                                {text}
                            </p>
                            <h4>{subtitle}</h4>
                            <p className='missions'>{addition}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Advert;
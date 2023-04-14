import './slickSlider.css'

const SlickSlider = ({name, review, photo}) => {
    return ( 
        <div className="home__slickSlider-block">
            <img src={photo} alt="" />
            <h3>{name}</h3>
            <p>{review}</p>
        </div>
    );
}

export default SlickSlider;
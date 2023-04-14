import './subheader.css'

const Subheader = ({title, text, img}) => {
    return ( 
        <div className='subheader'>
            <img src={img} alt="" />
            <div className="subheader__container">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Subheader;
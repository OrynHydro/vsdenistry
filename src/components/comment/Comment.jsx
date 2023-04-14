import './comment.css'

import cross from './../../images/icon/cross.svg'
import camera from './../../images/icon/camera.svg'

import { useState } from 'react'

const Comment = ({active, setActive}) => {

    let [name, setName] = useState('');
    let [photo, setPhoto] = useState('');
    let [comment, setComment] = useState('');

    let [nameStatus, setNameStatus] = useState(false);
    let [photoStatus, setPhotoStatus] = useState(false);
    let [commentStatus, setCommentStatus] = useState(false);

    // Validation of name input

    function nameValidate(e) {
        if(!e.target.value) {
            setNameStatus(false);
            setName('Введите имя');

        } else if(e.target.value) {
            setNameStatus(true);
            setName('');
        }
    }

    // Validation of photo input

    function photoValidate(e) {
        const image = e.target.files[0]
        if(!image) {
            setPhotoStatus(false);
            setPhoto('Добавьте фото');
        } else if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            setPhotoStatus(false);
            setPhoto('Добавьте фото');
        } else {
            setPhotoStatus(true);
            setPhoto('');
        }
    }

    // Validation of comment input

    function commentValidate(e) {
        if(!e.target.value) {
            setCommentStatus(false);
            setComment('Добавьте комментарий')
        } else if(e.target.value) {
            setCommentStatus(true);
            setComment('')
        }
    }

    // Validation of form

    function formValidate(e) {
        if(nameStatus === false) {
            e.preventDefault();
            setName('Введите имя');
        } 
        if(photoStatus === false) {
            e.preventDefault();
            setPhoto('Добавьте фото');
        } 
        if(commentStatus === false) {
            e.preventDefault();
            setComment('Добавьте комментарий');
        } 
    }


    if(active === false) {
        return false
    } else if(active === true) {
        return (  
            <div className='commentBlock'>
                <div onClick={() => setActive(false)} className="overlay"></div>
                <form className="commentForm" onSubmit={formValidate}>
                    <img className='cross' onClick={() => setActive(false)} src={cross} alt="" />
                    <div className="commentFormContainer">
                        <h1 className="commentFormTitle">Оставить коментарий</h1>
                        <span className="formValidateName">{name}</span>
                        <input className={name === "Введите имя" ? 'name redBorder' : 'name'} type="text" placeholder='Ваше имя' onBlur={nameValidate} />
                        <div className={photo === "Добавьте фото" ? 'filesBlock redBorder' : 'filesBlock'}>
                            <span className="formValidatePhoto">{photo}</span>
                            <img src={camera} alt="" />
                            <input className='photo' id='file' type="file" onChange={photoValidate} />
                            <label htmlFor="file">Добавить фото (аватарку)</label>
                        </div>
                        <span className='formValidateComment'>{comment}</span>
                        <input className={comment === "Добавьте комментарий" ? 'commentField redBorder' : 'commentField'} type="text" placeholder='Ваш коментарий' onBlur={commentValidate} />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Comment;
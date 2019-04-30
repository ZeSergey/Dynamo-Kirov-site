import React from 'react';
import './stadium.css';



const Stadium = ()=>{
    return (
        <div className='stadium'>
            <div className='stadium__info' data-anim-side='rigth'>
                <p className='stadiumInfo__text'><span className='stadiumInfo__label'>Название:</span>Динамо </p>
                <p className='stadiumInfo__text'><span className='stadiumInfo__label'>Открыт:</span>1932 год </p>
                <p className='stadiumInfo__text'><span className='stadiumInfo__label'>Вместимость:</span>7070 человек </p>
                <p className='stadiumInfo__text'><span className='stadiumInfo__label'>Адрес:</span>г. Киров, ул. Московская, 1в</p>
            </div>
        </div>
    )
}


export default Stadium;
import React, {useEffect,useState} from 'react';
import './Slider.css';

const colectionSlider = [
    {
        src:'./img/1.jpg',
        srcMin:'./img/1min.jpg',
        alt:'Динамо1',
    }, {
        src:'./img/2.jpg',
        srcMin:'./img/2min.jpg',
        alt:'Динамо2',
    }, {
        src:'./img/3.jpg',
        srcMin:'./img/3min.jpg',
        alt:'Динамо3',
    }, {
        src:'./img/4.jpg',
        srcMin:'./img/4min.jpg',
        alt:'Динамо4',
    }, {
        src:'./img/5.jpg',
        srcMin:'./img/5min.jpg',
        alt:'Динамо5',
    }, {
        src:'./img/6.jpg',
        srcMin:'./img/6min.jpg',
        alt:'Динамо6',
    }, {
        src:'./img/7.jpg',
        srcMin:'./img/7min.jpg',
        alt:'Динамо7',
    }, {
        src:'./img/8.jpg',
        srcMin:'./img/8min.jpg',
        alt:'Динамо8',
    }, {
        src:'./img/9.jpg',
        srcMin:'./img/9min.jpg',
        alt:'Динамо9',
    }, {
        src:'./img/10.jpg',
        srcMin:'./img/10min.jpg',
        alt:'Динамо10',
    },
]
const sizeScr =  window.onresize =()=>{
    return window.innerWidth
};


const cashImgs = (()=>{
    colectionSlider.forEach(function(item) {
        const newImg = document.createElement('img');
        newImg.src = (sizeScr()> 540)?newImg.src = item.src:item.srcMin;
        newImg.alt = item.alt;
      });
      
})();

const Slider = ()=>{
    const [count , setCount] = useState(0);

    useEffect(()=>{
        const timeout = setInterval(showSlider, 10000);
        return () => {        
            clearInterval(timeout);
        };
    });

    const showSlider = ()=>{
        if(count <= colectionSlider.length-2){
           setCount(count +1);
        } else{
            setCount(count - (count))
        }
    };
    const imgSize = ()=>{
      return  (sizeScr() < 540)?colectionSlider[count].srcMin:colectionSlider[count].src;

    };

    const ImgSlider =()=>{
        return (
             <img className='slide' src={require (`${imgSize()}`)} alt={colectionSlider[count].alt}/>
                
        )
    };
    
    return (
        <div className='slider'>
            <ImgSlider /> 
            <div className="slider__logo">
                <div className='text__items'>
                    <h1 className='text__item-big'>Динамо Киров</h1>
                    <p className='text__item'>( 1923 - 2017 )</p>
                    <p className='text__item-small'>Сайт памяти футбольного клуба "Динамо" Киров</p>
                </div>
            </div>
        </div>
    )
}



export default Slider;
import React, {useEffect,useState} from 'react';
import './Slider.css';
// import test from './img/1.jpg';

const Slider = ()=>{
    const [count , setCount] = useState(1);
    
    useEffect(()=>{
        const timeout = setInterval(showSlider, 10000);
        return () => {        
            clearInterval(timeout);
        };
    })

    const showSlider = ()=>{
        if(count <=9){
           setCount(count +1);
        } else{
            setCount(count - (count -1))
        }
    };
    const ImgSlider =()=>{
        const sizeScr = window.innerWidth;
        const nameImg = ()=>{
            if(sizeScr > 540){
                return `${count}`
            }else{
                return `${count}min`
            }
        }
        const cashImg = ()=>{
            if(window.innerWidth > 540){
                if(count <=9){
                    return `${count+1}`
                }
                return `${count}`  

            }else{
                if(count <=9){
                    return `${count+1}min`
                }
                return `${count}`
            }
            
        }


        return (
            <>
                <img className='slide' src={require(`./img/${nameImg()}.jpg`)} alt='Динамо Киров'/>
                <img className='slideHide' src={require(`./img/${cashImg()}.jpg`)} alt='FCDK'/>
            </>
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
import React from "react";
import './App.css';
import Slider from './slider/Slider';
import Label from './label/label';
import History from './history/history';
import Progress from './progress/progress';
import Stadium from './stadium/stadium';
import Footer from './footer/footer';

const App = () => {
    return (
        <>
            <div className='content'>
                <Slider/>
                <Label>История</Label>
                <History/>
                <Label>Достижения</Label>
                <Progress/>
                <Label>Стадион</Label>
                <Stadium/>
            </div>
            <Footer/>
        </>
    )
}


export default App;
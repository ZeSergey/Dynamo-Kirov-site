import React from "react";
import ReactDOM from "react-dom";
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
                <div className='block'>
                    <Label>История</Label>
                    <History/>
                </div>
                <div className='block'>
                    <Label>Достижения</Label>
                    <Progress/>
                </div>
                <div className='block'>
                    <Label>Стадион</Label>
                    <Stadium/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
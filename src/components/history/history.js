import React from 'react';
import './history.css';


const History = () => {
    const Year = ({ children }) => {
        return (
            <span className='year'>{children}</span>
        )
    };


const TextItems = ({children}) =>{
    return (
        <p className='history__items'>{children}</p>
    );
}


    return (
        <div className='history'>
            <div className='history__text'>
                <TextItems>Прообразом кировского «Динамо» является клуб железнодорожников «Спорт», чемпион городского первенства <Year>1922</Year> года.</TextItems>
                <br/>
                <TextItems>
                    <Year>4 августа 1923</Year> года свой первый футбольный матч провела команда N-го дивизиона войск ГПУ. С этой игры берёт своё начало история кировского «Динамо». В 1924 году для участия в первенстве СССР по футболу и баскетболу образованы сборные команды Вятки. Первые игры, назначенные на 18 мая, не состоялись, так как в Вятку, по неизвестным причинам, не доехали команды Череповца. Следующим соперником стала команда Вологды, которых вятские футболисты разгромили 4:0.
                </TextItems>
                <TextItems>
                    С <Year>1935</Year>года "Динамо" становится сильнейшей городской командой, выиграв с 1935 по 1937 гг. 6 чемпионских титулов. Чемпионат тогда проводился дважды в год.
                </TextItems>
                <TextItems>
                    В <Year>1936</Year> году впервые кировские футбольные команды выехали на сборы в другой город: команда завода КУТШОв Одессу, а Динамики - в Эривани.
                </TextItems>
                <TextItems>
                    <Year>18 июля 1936</Year> года команда "Зенит" Ижевск, представлявший Вятский край, провел игру на кубок СССР со Свердловским "Динамо" и проиграл 1:11.
                </TextItems>
                <TextItems>
                    B <Year>1953</Year> году в первенстве РСФСР (зона "Урал") дебютировало кировское "Динамо" (4 место из 9 команд: 5 побед, 3 поражения, мячи 23-16. 
                </TextItems>
                <TextItems>
                    <Year>1956</Year> год "Динамо" Киров- победитель зонального турнира первенства РСФСР, победитель группового турнира финала. Итог выступления- 4 место в финальном турнире.
                </TextItems>
                <TextItems>
                    <Year>1963</Year> год вице - чемпион РСФСР.
                </TextItems>
                <TextItems>
                    <Year>1981</Year> год "Динамо" Киров чемпион РСФСР. Победитель турнира ЦС "Динамо" 1981 года.
                </TextItems>
                <TextItems>
                    В <Year>1989</Year> году обладатель приза Кубок Льва Яшина (лучшая динамовская команда).
                </TextItems>
                <TextItems>
                    <Year>1994</Year> год - клуб расформирован. Некоторое время на базе стадиона Динамо существовал ФК "Вятка".
                </TextItems>
                <TextItems>
                    <Year>1999</Year> год - ФК "Динамо-Машиностроитель", созданный на базе Динамо, получил право выступать во втором дивизионе зона "Поволжье".
                </TextItems>
                <TextItems>
                    <Year>2000</Year> год - ФК "Динамо-Машиностроитель" переведен в зону "Урал" второго дивизиона.
                </TextItems>
                <TextItems>
                    <Year>2003</Year> год - ФК "Динамо-Машиностроитель" играл во втором дивизионе зоны "Урал-Поволжье", которая образована путем слияния зон "Урал" и "Поволжье". 
                </TextItems>
                <TextItems>
                    <Year>2004</Year> год - ФК "Динамо-Машиностроитель" официально переименован в ФК "Динамо" Киров. 
                </TextItems>
                <TextItems>
                    <Year>2006</Year> год - Самый удачный год после возрождения "Динамо" в 1999 году. В Первенстве динамовцы заняли призовое третье место, а в Кубке России дошли до стадии 1/16 финала, где сыграли 2 игры представителем Премьер-Лиги - томской "Томью".
                </TextItems>
                <TextItems>
                    <Year>18 июля 2017</Year> года было объявлено, что клуб снимается с Первенства ПФЛ сезона-2017/18 ввиду отсутствия средств.
                </TextItems>
                
            </div>
            
        </div>

    )
}


export default History;
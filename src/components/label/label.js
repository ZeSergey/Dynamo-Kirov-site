import React from 'react';
import './label.css';


const Label = ({children}) =>{
    return(
        <h2 className='label'>{children}</h2>
    )
};



export default Label;
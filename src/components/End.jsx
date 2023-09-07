
import React, { useState, useEffect } from 'react';
import "./Quiz.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export const End = ({point}) => {
    return(
        <div className='end'>
            <p>Felicitaciones</p>
            <p>lograste un puntaje de:</p>
            <p>{point}</p>
            <Link to={"/"}>Volver a home</Link>
        </div>    )
}
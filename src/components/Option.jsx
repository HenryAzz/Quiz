
import React, { useState, useEffect } from 'react';
import "./Quiz.css"
import { QuizOption } from './QuizOption';


export const Option = ({opcionEstado, options, handleClick}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {options?.map((option, index) => (
            <QuizOption
              clas={`quiz_option ${opcionEstado[index]}`}
              key={index}
              dato={option}
              estado={opcionEstado[index]}
              fun={() => handleClick(option, index)}
            />
          ))}
        </div>
      );
    };

import React, { useState, useEffect } from 'react';
import "./Quiz.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Question = ({quiz, value}) => {
console.log(value)
return(

    <div
    style={{
        backgroundColor: "#dcf8ff",
  height: "200px",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 40px ",
  marginTop:"40px",
  position:"relative"
}}
>

<div style={{ position: "absolute" , top:"-40px", width: "70px" ,backgroundColor:"white",borderRadius:"50%",padding:"5px"}}>
  <CircularProgressbar
    value={value}
    maxValue={50}
    text={value === 0 ? '0' : value}
    className="center-progressbar"
  />
</div>
<p style={{ fontSize: "28px", fontWeight: "700" }}>
  {quiz}
</p>
</div>
    )
};

import React, { useState, useEffect } from 'react';
import "./Quiz.css"
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export const Header = ({page, total}) => {
    return(
        <div style={{ display: "flex", gap: "25px" , alignItems:"center" }}>
        <Link to={"/"} className="boton_x" style={{ borderRadius: "50%" }}>
          X
        </Link>

        <div
          className="border_progress"
          style={{ width: "100%", padding: "10px",display:"flex",gap:"16px",alignItems:"center"}}
        >
          <ProgressBar
            bgcolor="#ff9f41"
            progress={(page + 1) * 25}
            height={10}
            pag={10}
            tot={4}
          ></ProgressBar>
          <div style={{display:"flex", color:"#3EB8D4",fontWeight:"600"}}>
            <span>{`${page + 1}`} </span>
            <span>/</span>
            <span>{`${total}`} </span>
          </div>
        </div>
      </div>
    )
}
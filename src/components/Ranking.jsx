import "./Ranking.css"
import React, { useState, useEffect } from 'react';

export const Ranking = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://quiz-7.com/profile.json');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      };
  
      fetchData();
    }, []);
    return (
  
    <section className="ranking_cont" style={{padding:"30px"}}>
        <div className="ranking" >
        <div className="data">
          <img style={{width:"50px", height:"50px", marginRight:"15px"}} src="/tr.png"></img>
          <div >
          <p style={{margin:"0",fontWeight:"500", fontSize:"20px"}}>Ranking</p>
          <p style={{margin:"0",fontSize:"26px",fontWeight:"700",color: "#3eb8d4"}}>{data.ranking}</p>
          </div>
        </div>
        <div className="data">
          <img style={{width:"50px", height:"50px", marginRight:"15px"}} src="/ss.png"></img>
          <div >

          <p style={{margin:"0",fontWeight:"500", fontSize:"20px"}}>Points</p>
          <p style={{margin:"0",fontSize:"26px",fontWeight:"700",color: "#3eb8d4"}}>{data.points}</p>
          </div>
        </div>
      
      </div>
    </section>
   
    )
  };
  
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
          <img className="img" src="/tr.png"></img>
          <div >
          <p className="titleRanking">Ranking</p>
          <p className="pRanking">{data.ranking}</p>
          </div>
        </div>
        <div className="data" >

        <img  src="/lin.png"></img>
        </div>
        <div className="data">
          <img className="img" src="/ss.png"></img>
          <div >

          <p className="titleRanking">Points</p>
          <p className="pRanking">{data.points}</p>
          </div>
        </div>
      
      </div>
    </section>
   
    )
  };
  
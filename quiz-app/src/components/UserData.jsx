import React, { useState, useEffect } from 'react';
import "./UserData.css";




export const UserData = () => {

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

    <seccion className="user">
      <div>
        <h1 style={{margin: "0" , padding:"10px 0"}}>Hi, {data.name}</h1>
        <p style={{margin:"0"}}>Let’s make this day productive</p>
      </div>
      <div >
        <img style={{width:"80px",margin:"10px 0 0 0"}} src="/happy.svg"></img>
      </div>
    
    </seccion>
 
  )
};


import React, { useState, useEffect } from 'react';
import "./Options.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export const Options = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://quiz-7.com/categories.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Options'>
      {data?.map((category , i) => (
        <Link to={`/${category.title}`} key={category.id} className="category" style={{cursor:"pointer"}}>
          <div className="category-icon">
            <img src={`./${i+1}.png`} alt={category.title} />
            <div className='oval'></div>
          </div>
          <div className="category-details">
            <p className="category-title">{category.title}</p>
            <p className="category-questions">{category.questions} questions</p>
          </div>
        </Link>
      ))}
    </div>
  );
}


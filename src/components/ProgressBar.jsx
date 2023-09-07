import React from 'react';

const ProgressBar = ({ bgcolor, progress, height}) => {

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    display:"flex",

  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
    transition: 'width 0.9s ease-in-out', // Agregamos una transición suave
    
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}></span> */}
      </div>
   
    </div>
  )
}

export default ProgressBar;

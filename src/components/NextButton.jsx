import React from 'react';

const NextButton = ({ nextHandle, respuestaSeleccionada }) => {
  return (
    <button onClick={()=>nextHandle()} disabled={!respuestaSeleccionada}>
      Next
    </button>
  );
};

export default NextButton;
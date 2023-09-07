import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Quiz.css";
import { QuizOption } from "./QuizOption";
import { Option } from "./Option";
import { Question } from "./Question";
import { Header } from "./Header";
import NextButton from "./NextButton";
import { End } from "./End";
import "typeface-roboto";

const datos = {
  Sports: "https://quiz-7.com/questions/1.json",
  Chemistry: "https://quiz-7.com/questions/2.json",
  Math: "https://quiz-7.com/questions/3.json",
  History: "https://quiz-7.com/questions/4.json",
  Biological: "https://quiz-7.com/questions/5.json",
  Geography: "https://quiz-7.com/questions/6.json",
};

const initialState = {
  page: 0,
  total: 0,
  quiz: {},
  options: [],
  correcto: null,
  respuestaSeleccionada: false,
  claseCSS: "quiz_option",
  opcionEstado: new Array(4).fill(""),
  puntaje: 0,
  shuffledOptions: [],
  end: false,
};

export const Quiz = () => {
  const location = useLocation();
  const nuevaLocation = location.pathname.slice(1);
  const [state, setState] = useState(initialState);

  const {
    page,
    total,
    quiz,
    options,
    correcto,
    respuestaSeleccionada,
    opcionEstado,
    puntaje,
    end,
  } = state;

  const url = datos[nuevaLocation]?.toString();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const currentOptions = [
          jsonData[page]?.option1,
          jsonData[page]?.option2,
          jsonData[page]?.option3,
          jsonData[page]?.option4,
        ];
        const correctOption = jsonData[page]?.option1;
        const shuffledOptions = random(currentOptions);

        setState((prevState) => ({
          ...prevState,
          quiz: jsonData,
          correcto: correctOption,
          options: shuffledOptions,
          total: jsonData.length,
        }));
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        setState((prevState) => ({
          ...prevState,
          error: "Hubo un error al cargar los datos. Por favor, inténtalo de nuevo más tarde.",
        }));
      }
    };
    fetchData();
  }, [nuevaLocation, page]);

  const random = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const nextHandle = () => {
    if (page < 3) {
      setState((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
        respuestaSeleccionada: false,
        opcionEstado: new Array(4).fill(""),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        end: true,
      }));
    }
  };

  const handleClick = (option, index) => {
    if (!respuestaSeleccionada) {
      const nuevaOpcionEstado = [...opcionEstado];
      if (option === correcto) {
        setState((prevState) => ({
          ...prevState,
          puntaje: prevState.puntaje + 10,
        }));
        nuevaOpcionEstado[index] = "true";
      } else {
        nuevaOpcionEstado[index] = "false";
        nuevaOpcionEstado[options.indexOf(correcto)] = "true";
      }
      setState((prevState) => ({
        ...prevState,
        respuestaSeleccionada: true,
        opcionEstado: nuevaOpcionEstado,
      }));
    }
  };

  return (
    <section 
  className="quiz"
    >
      <Header page={page} total={total}></Header>
      <Question quiz={quiz[page]?.question} value={puntaje}></Question>
      <Option
        options={options}
        opcionEstado={opcionEstado}
        handleClick={handleClick}
      ></Option>
      <NextButton
        nextHandle={nextHandle}
        respuestaSeleccionada={respuestaSeleccionada}
      ></NextButton>
      {end && <End point={puntaje} />}
    </section>
  );
};

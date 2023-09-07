import React from "react";
import "./Quiz.css";
import { SuccesBtn } from "./SuccesBtn";
import { FailedBtn } from "./FailedBtn";
export const QuizOption = ({ dato, fun, clas, estado }) => {
  console.log(estado);
  return (
    <div
      onClick={() => fun(dato)}
      className={clas}
      style={{
        padding: "14px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "16px",
        cursor: "pointer",
      }}
    >
      <span style={{ fontWeight: "600" }}>{dato}</span>{" "}
      {!estado && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="#EFEFEF" stroke-width="2" />
        </svg>
      )}
      {estado === "true" && <SuccesBtn></SuccesBtn> }
      {estado === "false" && <FailedBtn></FailedBtn> }
    </div>
  );
};

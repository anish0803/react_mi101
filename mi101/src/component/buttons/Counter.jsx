import Buttons from "./Buttons"
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const handleCounter = (pressedVal) => {
    if (pressedVal === "next") {
      setNumber(number + 1);
      if(number >=20){
        alert("EXCEED LIMIT");

        if(number >=20){
          setDisabled(true);
        }
  
      }

    } else {
      setNumber(number - 1);
      if(number <= -20){
        alert("EXCEED LIMIT");
      }

    }
    if(pressedVal==="reset"){
      setNumber(0)
    }
  };
  return (
    <>
      <h1 className={number > 0 ? "green" : number === 0 ? "blue" : "red"}>
        {number}
      </h1>
      <Buttons handleC={handleCounter} />
      
    </>
  );
};

export default Counter;
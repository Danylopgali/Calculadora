import React, { useState } from "react";
import Display from "./componentes/display";
import Tablero from "./componentes/tablero"

function App() {
  const [state, setState] = useState("");
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  // const [miniDisplay, setminiDisplay] = useState("");

  function handleButtonClick(event) {
    const name = event.target.name;

    if (name === "+" || name === "="||name==="-"||name==="x"||name==="/"||name==="AC"||name==="x10") {
      // Si se presiona el botón "=" y hay un operador y un segundo número, realizar la operación
      if (name === "=" && operator && secondNumber) {
        const result = performOperation();
        setState(result);
        setOperator("");
        setSecondNumber("");
      } else {
        // Si se presiona el botón "+" o "=" pero no hay un segundo número, almacenar el operador
        setOperator(name);
        setSecondNumber(state);
        setState("");
      }
    } else {
      // Concatenar el dígito al estado actual
      setState((prevState) => prevState + name);
    }
  }

  function performOperation() {
    const num1 = parseFloat(secondNumber);
    const num2 = parseFloat(state);

    switch (operator) {
      case "+":
        return num1 + num2;
      // Agregar más casos según las operaciones que desees admitir
      case "-":
        return num1-num2;
        case "x":
          return num1*num2;
        case "/":
            return num1/num2;
        case"AC":
            return "0"
        case "x10":
          return num1*10
      default:
        return state;
    }
  }

  return (
    <div>
      <Display value={state} />
      <Tablero onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;

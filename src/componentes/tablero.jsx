import React from "react";

function Tablero({ onButtonClick }) {
  return (
    <div>
        <div>
      <button name="1" onClick={onButtonClick}>
        1
      </button>
      <button name="2" onClick={onButtonClick}>
        2
      </button>
      <button name="3" onClick={onButtonClick}>
        3
      </button>
      <button name="+" onClick={onButtonClick}>
        +
      </button>
      </div>

      <div>
      <button name="4" onClick={onButtonClick}>
        4
      </button>
      <button name="5" onClick={onButtonClick}>
        5
      </button>
      <button name="6" onClick={onButtonClick}>
        6
      </button>
      <button name="-" onClick={onButtonClick}>
        -
      </button>
      </div>

      <div>
      <button name="7" onClick={onButtonClick}>
        7
      </button>
      <button name="8" onClick={onButtonClick}>
        8
      </button>
      <button name="9" onClick={onButtonClick}>
        9
      </button>
      <button name="x" onClick={onButtonClick}>
        x
      </button>
      </div>

      <div>
      <button name="AC" onClick={onButtonClick}>
        AC
      </button>
      <button name="/" onClick={onButtonClick}>
        /
      </button>
      <button name="0" onClick={onButtonClick}>
        0
      </button>
      <button name="=" onClick={onButtonClick}>
        =
      </button>
      </div>

    </div>
  );
}

export default Tablero;

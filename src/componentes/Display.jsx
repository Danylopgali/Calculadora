import React from "react";
import "./display.style.css"
function Display({ value }) {
  return (
    <div className="Display">
      <div className="Display-content">
        {value}
      </div>
    </div>
  );
}

export default Display;

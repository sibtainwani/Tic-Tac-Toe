import React from "react";

function Square({ value, handleClick }) {
  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  );
}

export default Square;

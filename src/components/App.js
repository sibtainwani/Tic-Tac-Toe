import React, { useState } from "react";
import "../css/App.css";
import Square from "./Square";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  function handleSquareClick(squareId) {
    setBoard(
      board.map((val, id) => {
        if (id === squareId && !val) return player;
        return val;
      })
    );
    if (player === "X") setPlayer("O");
    else setPlayer("X");
  }

  function checkWin(){
    
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
  }
  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      <div className="game">
        <button onClick={handleReset}>Reset</button>
        <div className="board">
          {board.map((value, id) => (
            <Square
              key={id}
              value={value}
              handleClick={() => handleSquareClick(id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import "./board.css";
import { useState, useEffect, useCallback } from "react";

export function Board({onGameOver}) {
  let board = [];
 const [snake, setSnake] = useState([
    [4, 2],
    [5, 2],
    [6, 2],
  ]);
  const [direction, setDirection] = useState("up");
  const move = useCallback(([y, x]) => {
    if (x && y) {
      switch (direction) {
        case "up":
          return [y - 1, x];
        case "down":
          return [y + 1, x];
        case "right":
          return [y, x + 1];
        case "left":
          return [y, x - 1];
        default:
          return [y, x];
      }
    } else {
      onGameOver();
      return [y, x];
    }
  }, []);
  useEffect(() => {
    const moment = setInterval(() => {
      setSnake((state) => state.map(move));
    }, 1000);
    return () => clearInterval(moment);
  }, []);
  
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        setDirection("left");
        break;
      case "ArrowUp":
        setDirection("up");
        break;
      case "ArrowRight":
        setDirection("right");
        break;
      case "ArrowDown":
        setDirection("down");
        break;
      default:
        setDirection((direction) => direction);
        break;
    }
  });
    
  const isSnakeCell = (rIndex, cIndex) => {
    return snake.some((cell) => rIndex === cell[0] && cIndex === cell[1]);
  };

  for (let rIndex = 0; rIndex < 10; rIndex++) {
    let columns = [];
    for (let cIndex = 0; cIndex < 10; cIndex++) {
      columns.push(
        <div
          key={cIndex}
          className={isSnakeCell(rIndex, cIndex) ? "cell snake" : "cell"}
        />
      );
    }
    const row = (
      <div key={rIndex} className="row">
        {columns}
      </div>
    );
    board.push(row);
  }

  return <div className="border">{board}</div>;
}

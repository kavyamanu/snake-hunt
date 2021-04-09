import "./board.css";
import { useState, useEffect, useCallback } from "react";
import { Node, LinkedList } from "./linkedList";
import { getRandom } from "../../src/Random";
import cn from "classnames";
const MATRIX_SIZE = 15;

export function Board({ onGameOver }) {
  let board = [];
  const [snake, setSnake] = useState(() => {
    let node1 = new Node([4, 2]);
    let node2 = new Node([5, 2]);
    let node3 = new Node([6, 2]);
    node1.next = node2;
    node2.next = node3;
    let list = new LinkedList();
    list.head = node1;
    return list;
  });

  const [direction, setDirection] = useState("up");
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
        setDirection("up");
        break;
    }
  });
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
      setSnake((state) => {
        state.addToHead(move(state.head.data));
        state.removeLast();
        return state;
      });
    }, 1000);
    return () => clearInterval(moment);
  }, []);
  console.log(direction);

  const isSnakeCell = (rIndex, cIndex) => {
    return snake.contains([rIndex, cIndex]);
  };
  for (let rIndex = 0; rIndex < MATRIX_SIZE; rIndex++) {
    let columns = [];
    for (let cIndex = 0; cIndex < MATRIX_SIZE; cIndex++) {
      columns.push(
        <div
          key={cIndex}
          className={cn("cell", { snake: isSnakeCell(rIndex, cIndex) })}
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

  return <div className="board">{board}</div>;
}

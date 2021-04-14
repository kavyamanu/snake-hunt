import cn from "classnames";
import { useEffect, useState, useContext } from "react";
import { useSnakeDirection } from "../hooks/useSnakeDirection";
import { isFoodCell, isSnakeCell, getRandomFood, getNewHead } from "../utils";
import "./board.css";
import { LinkedList } from "./linkedList";
import { DirectionContext } from "../context/DirectionProvider";
import { audio } from "./audio";

export function Board({ onGameOver, setScore, score, setLevel }) {
  let board = [];
  const MATRIX_SIZE = 15;

  const [snake, setSnake] = useState(() => {
    const list = new LinkedList();
    list.addToHead([4, 2]);
    list.addToHead([5, 2]);
    list.addToHead([6, 2]);
    return list;
  });
  const [food, setFood] = useState(getRandomFood(snake));
  const [timer, setTimer] = useState(1500);
  useSnakeDirection();
  const { direction } = useContext(DirectionContext);

  useEffect(() => {
    if (score % 101 === 0 && score !== 0) {
      setLevel((level) => level + 1);
      setTimer((timer) => timer / 2);
    }
  }, [score, setLevel, setScore]);

  useEffect(() => {
    const [y, x] = snake.head.data;
    const sound = new Audio("../../public/gameOver.mp3");
    sound.load();
    if (
      x === -1 ||
      y === -1 ||
      x === 15 ||
      y === 15 ||
      snake.isBody(snake.head.data)
    ) {
      onGameOver();
      audio("audioOver");
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const [y, x] = snake.head.data;
    if (food[0] === y && food[1] === x) {
      const [row, col] = getNewHead(direction, snake.head.data);
      setScore((score) => score + 5);
      audio("audioFood");
      snake.addToHead([row, col]);
      setFood(getRandomFood(snake));
    }
  });

  useEffect(() => {
    const momentId = setInterval(() => {
      setSnake((state) => {
        const [row, col] = getNewHead(direction, state.head.data);
        state.addToHead([row, col]);
        state.removeTail();
        return state;
      });
      setScore((score) => score + 1);
    }, timer);
    return () => clearInterval(momentId);
  }, [direction, setScore, timer]);

  for (let rIndex = 0; rIndex < MATRIX_SIZE; rIndex++) {
    let columns = [];
    for (let cIndex = 0; cIndex < MATRIX_SIZE; cIndex++) {
      columns.push(
        <div
          key={cIndex}
          className={cn(
            "cell",
            { snake: isSnakeCell(rIndex, cIndex, snake) },
            { food: isFoodCell(rIndex, cIndex, food) }
          )}
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

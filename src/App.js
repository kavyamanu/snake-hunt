import { Board } from "../src/board/Board";
import { Score } from "../src/score/Score";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import cn from "classnames";

function App() {
  const [isOut, setIsOut] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      if (!isOut) {
        setScore((score) => score + 1);
      } else {
        setScore(score);
      }
    }, 1000);
    return () => {
      clearInterval(scoreInterval);
    };
  }, []);

  return (
    <div className="app">
      <div className="title">Snake Hunt</div>
      <div className={cn({ game: !isOut, "game-end": isOut })}>
        {!isOut && <Board onGameOver={() => setIsOut(true)} />}
        <Score
          isOut={isOut}
          score={score}
          onGameStart={() => {
            setIsOut(false);
            setScore(0);
          }}
        />
      </div>
    </div>
  );
}

export default App;

import "./snake.css";
import { useState, useEffect } from "react";

export function Score({ isOut, onGameStart }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const finalScore = score;
  useEffect(() => {
    const scoreInterval = setInterval(() => {
      if (!isOut) {
        setScore((score) => score + 1);
      } else {
        setScore((score) => score);
      }
    }, 1000);

    return () => {
      clearInterval(scoreInterval);
    };
  }, []);

  return isOut ? (
    <div className="result">
      <div className="out repeat" onClick={() => onGameStart()}>
        Hunt Again 🔁
      </div>
      <p>
        Your Score : {finalScore}
        <br></br>Best Score: {bestScore}
      </p>
      <div className="out">Game Over 😵</div>
    </div>
  ) : (
    <div className="score">
      <h2>Score Board</h2>
      <hr />
      <p>
        Score : {score}
        <br></br> Level : 1<br></br>Best Score: {bestScore}
      </p>
    </div>
  );
}

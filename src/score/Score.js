import "./score.css";
import { useState, useEffect } from "react";

export function Score({ isOut, onGameStart, score }) {
  const [bestScore, setBestScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    const finalScoreInterval = setInterval(() => {
      if (!isOut) {
        setFinalScore((finalScore) => finalScore + 1);
        setBestScore((bestScore) => {
          if (finalScore > bestScore) {
            return finalScore;
          }
          return bestScore;
        });
      } 
    }, 1000);
    return () => clearInterval(finalScoreInterval);
  }, [finalScore]);

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
    <div>
      <div className="score">
        <h2>Score Board</h2>
        <hr />
        <p>
          Score : {score}
          <br></br> Level : 1<br></br>Best Score: {bestScore}
        </p>
      </div>
    </div>
  );
}

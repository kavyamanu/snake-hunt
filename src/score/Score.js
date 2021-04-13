import "./score.css";
import { useState, useEffect } from "react";

export function Score({
  isOut,
  score,
  setIsOut,
  setScore,
  level,
  setLevel,
  setIntro,
}) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (!isOut) {
      setBestScore((bestScore) => {
        if (score > bestScore) {
          return score;
        }
        return bestScore;
      });
    }
  }, [score, bestScore, isOut]);

  return isOut ? (
    <div className="result">
      <div
        className="out repeat"
        onClick={() => {
          setIsOut(false);
          setScore(0);
          setLevel(0);
        }}
      >
        Hunt Again{" "}
        <img src="repeat-button.png" alt="repeat" width="40" height="30" />
      </div>
      <p>
        Your Score : {score}
        <br></br>Best Score: {bestScore}
      </p>
      <div className="out">
        <img src="game_over.png" alt="game-over" width="200" height="200" />
        Game Over
        <div className="help" onClick={() => setIntro(true)}>
          need help
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="score">
        <h2>Score Board</h2>
        <hr />
        <p>
          Score : {score}
          <br></br> Level : {level}
          <br></br>Best Score: {bestScore}
        </p>
      </div>
    </div>
  );
}

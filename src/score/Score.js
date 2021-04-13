import "./score.css";
import { useState, useEffect } from "react";
import { Joystick } from "react-joystick-component";

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
  const [path, setPath] = useState("BACKWARD");
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
  const handleMove = (event) => {
    switch (event.direction) {
      case "LEFT":
        setPath("left");
        break;
      case "FORWARD":
        setPath("up");
        break;
      case "RIGHT":
        setPath("right");
        break;
      case "BACKWARD":
        setPath("down");
        break;
      default:
        setPath("up");
        break;
    }
  }
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
      <div className="joy">
        <div className="score">
          <h2>Score Board</h2>
          <hr />
          <p>
            Score : {score}
            <br></br> Level : {level}
            <br></br>Best Score: {bestScore}
          </p>
        </div>
        <Joystick
          size={80}
          baseColor="rgb(130, 136, 136)"
          stickColor="whitesmoke"
          move={handleMove}
        ></Joystick>
      </div>
    );
  }

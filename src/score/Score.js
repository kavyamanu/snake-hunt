import "./score.css";
import { useState, useEffect, useContext } from "react";
import { Joystick } from "react-joystick-component";
import { DirectionContext } from "../context/DirectionProvider";

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
  const {setDirection} = useContext(DirectionContext);
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
      setDirection("left");
      break;
    case "FORWARD":
      setDirection("up");
      break;
    case "RIGHT":
      setDirection("right");
      break;
    case "BACKWARD":
      setDirection("down");
      break;
    default:
      setDirection("up");
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
        Hunt Again 
        <img src="repeat-button.png" alt="repeat" width="40" height="30" style={{paddingTop:20, paddingLeft:10}} />
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
    <div className="joy-score">
      <div className="score">
        <h2>Score Board</h2>
        <hr />
        <p>
          Score : {score}
          <br></br> Level : {level}
          <br></br>Best Score: {bestScore}
        </p>
      </div>
      <div className="joy">
        <Joystick
          size={80}
          baseColor="rgb(130, 136, 136)"
          stickColor="whitesmoke"
          move={handleMove}
        ></Joystick>
      </div>
    </div>
  );
}

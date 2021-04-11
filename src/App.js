import { Board } from "../src/board/Board";
import { Score } from "../src/score/Score";
import "./App.css";
import { useState } from "react";
import cn from "classnames";

function App() {
  const [isOut, setIsOut] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  return (
    <div className="app">
      <div className="title">
        Snake Hunt <img src="snake.png" alt="snake" width="70" height="70" />
      </div>
      <div className={cn({ game: !isOut, "game-end": isOut })}>
        {!isOut && (
          <Board
            onGameOver={() => setIsOut(true)}
            score={score}
            setScore={setScore}
            setLevel={setLevel}
          />
        )}
        <Score
          isOut={isOut}
          setIsOut={setIsOut}
          score={score}
          setScore={setScore}
          level={level}
          setLevel={setLevel}
        />
      </div>
    </div>
  );
}

export default App;

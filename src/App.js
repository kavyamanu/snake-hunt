import { Board } from "../src/board/Board";
import { Score } from "../src/score/Score";
import { Intro } from "../src/score/Intro";
import "./App.css";
import { useState } from "react";
import cn from "classnames";

function App() {
  const [isOut, setIsOut] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [intro, setIntro] = useState(false)
  return (
    <div className="app">
      {!isOut ? (
        <div className="title">
          Snake Hunt <img src="snake.png" alt="snake" width="70" height="50" />
        </div>
      ) : (
        <div className="title">Snake Hunt</div>
      )}
      <div className={cn({ game: !isOut, "game-end": isOut })}>
        {!isOut && (
          <Board
            onGameOver={() => setIsOut(true)}
            score={score}
            setScore={setScore}
            setLevel={setLevel}
          />
        )}
        {!intro ? (
          <Score
            isOut={isOut}
            setIsOut={setIsOut}
            score={score}
            setScore={setScore}
            level={level}
            setLevel={setLevel}
            setIntro={setIntro}
          />
        ) : (
            <Intro setIntro={setIntro}/>
        )}
      </div>
    </div>
  );
}

export default App;

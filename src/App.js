import cn from "classnames";
import React, { useState } from "react";
import { Board } from "../src/board/Board";
import { Intro } from "../src/score/Intro";
import { Score } from "../src/score/Score";
import "./App.css";
import { DirectionProvider } from "./context/DirectionProvider";

function App() {
  const [isOut, setIsOut] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [intro, setIntro] = useState(false);

  return (
    <DirectionProvider>
      <div className="app">
        {!isOut ? (
          <div className="title">
            Snake Hunt <img className="snake-img" src="snake.png" alt="snake" />
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
            <Intro setIntro={setIntro} />
          )}
        </div>
      </div>
    </DirectionProvider>
  );
}

export default App;

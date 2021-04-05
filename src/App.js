import { Board } from "../src/board/Board";
import { Score } from "../src/score/Score";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import classNames from "classnames";

function App() {
  const [isOut, setIsOut] = useState(false);
  const page = classNames({ App: !isOut }, { "game-end": isOut });

  return (
    <>
      <div className="title">Snake Hunt</div>
      <div className={page}>
        {!isOut &&
          <Board onGameOver={() => setIsOut(true)} />}
        <Score
          isOut={isOut}
          onGameStart={() => {
            setIsOut(false);
          }}
        />
      </div>
    </>
  );
}

export default App;

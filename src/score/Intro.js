import "./intro.css";

export function Intro({ setIntro }) {
  return (
    <div className="guide">
      <div className="intro">
        ➜ Eat food to grow <br />
        ➜ Snake can't digest itself, so will die if it eat it's body <br />
        ➜ Snake will die when it hit the wall <br />
        ➜ Snake speed will increase if it eat enough food, so the level
        <br />➜ Snake will get an energy point for making each move inside the
        room <br />➜ Snake will gain 5 energy points every time it eat food.
      </div>
      <div className="ready" onClick={()=>setIntro(false)}>
        Go Back
      </div>
    </div>
  );
}

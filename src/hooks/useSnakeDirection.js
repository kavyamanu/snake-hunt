import { useContext, useEffect } from "react";
import { DirectionContext } from "../context/DirectionProvider";

export function useSnakeDirection() {
  const { setDirection } = useContext(DirectionContext);
  useEffect(() => {
    const onKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          setDirection("left");
          break;
        case "ArrowUp":
          setDirection("up");
          break;
        case "ArrowRight":
          setDirection("right");
          break;
        case "ArrowDown":
          setDirection("down");
          break;
        default:
          setDirection("up");
          break;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}

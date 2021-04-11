export const getNewHead = (direction, [y, x]) => {
  switch (direction) {
    case "up":
      return [y - 1, x];
    case "down":
      return [y + 1, x];
    case "right":
      return [y, x + 1];
    case "left":
      return [y, x - 1];
    default:
      return [y + 1, x];
  }
};

export const isSnakeCell = (rIndex, cIndex, snake) => {
  return snake.contains([rIndex, cIndex]);
};

export const isFoodCell = (rIndex, cIndex, [row, col]) => {
  return rIndex === row && cIndex === col;
};

export const getRandomNumberBetweenInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min - 1) + min);
};

export const getRandomFood = (snake) => {
  let food = getRandomCell();
  while (snake.contains(food)) {
    food = getRandomCell();
  }
  return food;
};

export const getRandomCell = () => {
  return [
    getRandomNumberBetweenInterval(2, 14),
    getRandomNumberBetweenInterval(2, 14),
  ];
};

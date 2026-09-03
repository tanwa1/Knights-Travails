export function isValidSquare([x, y]) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

export function getKnightMoves(square) {
  const x = square[0];
  const y = square[1];

  const moves = [];

  const eightMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  eightMoves.forEach(([dx, dy]) => {
    const nx = x + dx;
    const ny = y + dy;
    if (isValidSquare([nx, ny])) moves.push([nx, ny]);
  });
  return moves;
}

export function knightMoves(start, end) {}

export function parseSquare(input) {
  if (typeof input === "string") {
    const x = input[0].charCodeAt(0) - 97;
    const y = parseInt(input[1], 10) - 1;
    return [x, y];
  }
  return input;
}

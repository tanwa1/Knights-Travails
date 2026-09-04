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

export function knightMoves(start, end) {
  const startCoor = parseSquare(start);
  const target = parseSquare(end);
  const visited = new Set();
  visited.add(`${startCoor[0]},${startCoor[1]}`);
  const queue = [[startCoor]];

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === target[0] && current[1] === target[1]) {
      return path;
    }

    for (const neighbor of getKnightMoves(current)) {
      const key = `${neighbor[0]},${neighbor[1]}`;

      if (visited.has(key)) continue;

      visited.add(key);

      queue.push([...path, neighbor]);
    }
  }
  return null;
}

export function parseSquare(input) {
  if (typeof input === "string") {
    const x = input[0].charCodeAt(0) - 97;
    const y = parseInt(input[1], 10) - 1;
    return [x, y];
  }
  return input;
}

# Knights-Travails

Find the shortest path a knight can take to get from one square to another on a standard 8×8 chessboard, and list every square it stops on along the way.

Built with **breadth-first search (BFS)** to guarantee the shortest route, with full test coverage via Jest.

## Project Structure

```
Knights-Travails/
├── Knights-Travails/
│   ├── knightTravails.js     # Core logic
│   └── knightTravails.spec.js # Jest tests
├── jest.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## Features

- Returns the **shortest possible path** (guaranteed by BFS).
- Handles multiple equivalent shortest paths — any valid shortest route is returned.
- Accepts coordinates as **`[x, y]` arrays** **or** algebraic notation like `"a1"`.
- Never lets a move go off the board.

## Function API

### `knightMoves(start, end)`
Finds the shortest path between two squares.

- **Arguments:** `start` and `end`, each either a `[x, y]` array or a string like `"a1"`.
- **Returns:** an array of `[x, y]` squares from start to end (end inclusive).

```js
knightMoves([0, 0], [3, 3]);
// => [ [0, 0], [2, 1], [3, 3] ]  (or [ [0, 0], [1, 2], [3, 3] ])

knightMoves("a1", "d4");
// => [ [0, 0], [2, 1], [3, 3] ]
```

### `isValidSquare([x, y])`
Returns `true` if the square is on the 8×8 board (both axes `0–7`), otherwise `false`.

### `getKnightMoves(square)`
Returns an array of all legal one-move destinations (up to 8) from the given `[x, y]` square.

### `parseSquare(input)`
Normalizes a square into a `[x, y]` array. Accepts `"a1"`-style strings or existing arrays.

## How It Works

The board is modeled as a graph where each square is a node and each legal knight move is an edge to another node.

1. **`parseSquare`** normalizes both inputs into `[x, y]` coordinates.
2. **`isValidSquare`** keeps moves from going off the board (`0–7` on both axes).
3. **`getKnightMoves`** generates the up-to-8 legal L-shaped jumps from a square.
4. **`knightMoves`** runs BFS:
   - Uses a FIFO queue of paths, starting with `[[start]]`.
   - Expands each path from its last square via `getKnightMoves`.
   - Tracks a `visited` set of squares to prevent cycles.
   - The first time a path's last square equals the target, that path is the shortest and is returned.

BFS explores all 1-move routes, then all 2-move routes, and so on, so the first path that reaches the target is guaranteed to be the shortest.

## Getting Started

```bash
# Install dependencies
npm install

# Run the tests
npm test

# Lint
npm run lint
```

## Example Output

```
knightMoves([3, 3], [4, 3])
=>
You made it in 3 moves! Here's your path:
  [3,3]
  [4,5]
  [2,4]
  [4,3]
```

## Tests

The test suite covers each function in isolation:

- `isValidSquare` — accepts on-board squares, rejects off-board squares.
- `getKnightMoves` — correct neighbor counts (2 from a corner, 8 from the center).
- `knightMoves` — shortest path length (e.g. `[0,0] → [3,3]` is 2 moves).
- `parseSquare` — converts `"a1"` → `[0, 0]`, `"h8"` → `[7, 7]`.

## Notes

- Multiple shortest paths often exist; the exact middle squares returned may differ but the move count is always minimal.
- Coordinates are **0-indexed** on both axes (`0–7`), matching `a1–h8`.

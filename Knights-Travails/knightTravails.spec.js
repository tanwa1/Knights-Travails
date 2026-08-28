import {
  isValidSquare,
  getKnightMoves,
  knightMoves,
  parseSquare,
} from "./knightTravails";

describe("isValidSquare()", () => {
  test("isValidSquare() checks if the square where the knight moves is valid", () => {
    expect(isValidSquare([0, 0])).toBe(true);
  });
});

describe("getKnightMoves()", () => {
  test("getKnightMoves() retrieves on what tile the knight moved", () => {
    expect(getKnightMoves([0, 0]).length).toEqual(2);
  });

  test("getKnightMoves() retrieves on what tile the knight moved", () => {
    expect(getKnightMoves([3, 3]).length).toEqual(8);
  });
});

describe("knightMoves()", () => {
  test("knightMoves() tests if the the moved", () => {
    expect(knightMoves([0, 0], [3, 3]).length).toEqual(3);
  });
});

describe("parseSquare()", () => {
  test("parseSquare() parses the move into an array: a1 -> [0, 0], h8 -> [7, 7]", () => {
    expect(parseSquare("a1")).toEqual([0, 0]);
  });
});

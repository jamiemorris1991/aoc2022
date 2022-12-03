import { getLines } from "./util";
const lines = getLines("02");

type Move = "R" | "P" | "S";

const enemyMoves: Map<string, Move> = new Map([
  ["A", "R"],
  ["B", "P"],
  ["C", "S"],
]);

const moveScores: Map<Move, number> = new Map([
  ["R", 1],
  ["P", 2],
  ["S", 3],
]);

const part1 = () => {
  const getRoundScore = (enemy: Move, me: Move) => {
    if (enemy === me) return 3;
    switch (enemy) {
      case "R":
        return me === "P" ? 6 : 0;
      case "P":
        return me === "S" ? 6 : 0;
      case "S":
        return me === "R" ? 6 : 0;
    }
  };

  const myMoves: Map<string, Move> = new Map([
    ["X", "R"],
    ["Y", "P"],
    ["Z", "S"],
  ]);

  const scores: number[] = [];

  lines.forEach((line) => {
    const em = enemyMoves.get(line.charAt(0));

    const me = myMoves.get(line.charAt(2));

    if (em && me) {
      const roundScore = getRoundScore(em, me);

      const moveScore = moveScores.get(me);

      scores.push(roundScore + (moveScore ?? 0));
    }
  });

  return scores.reduce((prev, current) => prev + current);
};

const part2 = () => {
  const scoreMap = new Map<string, number>([
    ["X", 0],
    ["Y", 3],
    ["Z", 6],
  ]);

  const getMyMove = (score: number, enemyMove: Move): Move => {
    if (score === 3) return enemyMove;
    switch (enemyMove) {
      case "R":
        return score === 6 ? "P" : "S";
      case "P":
        return score === 6 ? "S" : "R";
      case "S":
        return score === 6 ? "R" : "P";
    }
  };

  const scores: number[] = [];

  lines.forEach((line, idx) => {
    const enemyMove = enemyMoves.get(line.charAt(0));

    const roundScore = scoreMap.get(line.charAt(2)) ?? 0;

    if (enemyMove) {
      const myMove = getMyMove(roundScore, enemyMove);

      if (idx < 10) console.log({ roundScore, enemyMove, myMove });

      const moveScore = moveScores.get(myMove);
      scores.push(roundScore + (moveScore ?? 0));
    }
  });
  return scores.reduce((prev, current) => prev + current);
};

console.log({ part1: part1(), part2: part2() });

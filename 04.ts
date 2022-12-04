import { getLines } from "./util";
const lines = getLines("04");

type Range = { lower: number; upper: number };

const part1 = () => {
  let containedLines = 0;

  lines.forEach((line, idx) => {
    const pair: Range[] = line.split(",").map((p) => {
      const values = p.split("-");
      return { lower: Number(values[0]), upper: Number(values[1]) };
    });

    const isContained = ([left, right]: Range[]) => {
      return (
        (left.lower >= right.lower && left.upper <= right.upper) ||
        (left.lower <= right.lower && left.upper >= right.upper)
      );
    };

    if (isContained(pair)) containedLines++;
  });

  return containedLines;
};

const part2 = () => {
  let containedLines = 0;

  lines.forEach((line, idx) => {
    const pair: Range[] = line.split(",").map((p) => {
      const values = p.split("-");
      return { lower: Number(values[0]), upper: Number(values[1]) };
    });

    const isOverlap = ([left, right]: Range[]) => {
      return (
        (left.upper >= right.lower && right.upper >= left.lower) ||
        (right.upper >= left.lower && left.upper >= right.lower)
      );
    };

    if (isOverlap(pair)) containedLines++;
  });

  return containedLines;
};

console.log({ part1: part1(), part2: part2() });

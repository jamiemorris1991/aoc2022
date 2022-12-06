import { getLines } from "./util";
const lines = getLines("05");

type Move = { count: number; from: number; to: number };

const part1 = () => {
  const stacks: string[][] = new Array(9).fill([]).map((stack, idx) => {
    return lines
      .slice(0, 8)
      .reverse()
      .flatMap((line, lineNumber) => {
        const charIdx = (idx + 1) * 4 - 3;
        const char = line.charAt(charIdx);
        return char && char !== " " ? stack.concat(char) : stack;
      });
  });
  const moves: Move[] = lines.slice(9).map((line) => {
    const words = line.split(" ");

    const count = parseInt(words[1]);
    const from = Number(words[3]) - 1;
    const to = Number(words[5]) - 1;

    return { count, from, to };
  });

  const doMove = (stacks: string[][], move: Move): string[][] => {
    const ret = [...stacks];
    const { count, from, to } = move;

    for (let i = 1; i <= count; i++) {
      const item = ret[from].pop();
      if (item) ret[to].push(item);
    }
    return ret;
  };

  moves.forEach((move) => {
    const ret = [...stacks];
    return doMove(ret, move);
  });

  return stacks.flatMap((stack) => {
    return stack[stack.length - 1];
  });
};

const part2 = () => {
  const stacks: string[][] = new Array(9).fill([]).map((stack, idx) => {
    return lines
      .slice(0, 8)
      .reverse()
      .flatMap((line, lineNumber) => {
        const charIdx = (idx + 1) * 4 - 3;
        const char = line.charAt(charIdx);
        return char && char !== " " ? stack.concat(char) : stack;
      });
  });
  const moves: Move[] = lines.slice(9).map((line) => {
    const words = line.split(" ");

    const count = parseInt(words[1]);
    const from = Number(words[3]) - 1;
    const to = Number(words[5]) - 1;

    return { count, from, to };
  });

  const doMove = (stacks: string[][], move: Move): string[][] => {
    const ret = [...stacks];
    const { count, from, to } = move;

    for (let i = 1; i <= count; i++) {
      const item = ret[from].pop();
      if (item) ret[to].push(item);
    }
    return ret;
  };

  moves.forEach((move) => {
    const ret = [...stacks];
    return doMove(ret, move);
  });

  return stacks
    .flatMap((stack) => {
      return stack[stack.length - 1];
    })
    .reduce((prev, curr) => prev + curr);
};

console.log({ part1: part1() });

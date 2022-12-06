import { getText } from "./util";
const text = getText("06");

const day6 = (size: number) => {
  const charArr = text.split("");

  const index = charArr.findIndex((_, idx) => {
    if (idx < size - 1) return false;

    const slice = charArr.slice(idx - (size - 1), idx + 1);

    const str = slice.reduce((acc, next) =>
      !acc.includes(next) ? acc + next : acc
    );

    return str.length === size;
  });

  return index + 1;
};

console.log({ part1: day6(4), part2: day6(14) });

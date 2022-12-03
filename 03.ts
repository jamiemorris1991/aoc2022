import { getLines, lowerCase, upperCase } from "./util";
const lines = getLines("03");

const getPriority = (letter: string) => {
  return lowerCase.indexOf(letter) + 1 || upperCase.indexOf(letter) + 27;
};

const part1 = () => {
  const dupes: { letter: string; priority: number }[] = [];

  lines.forEach((line) => {
    const split = line.length / 2;

    const compOne = line.split("").slice(0, split);
    const compTwo = line.split("").slice(split);

    const dupe = compOne.find((char) => compTwo.includes(char));
    if (dupe) {
      dupes.push({ letter: dupe, priority: getPriority(dupe ?? "1") });
    }
  });

  return dupes.map((d) => d.priority).reduce((prev, current) => prev + current);
};

const part2 = () => {
  const groups: { letter: string; priority: number }[] = [];

  for (let i = 0; i < lines.length; i += 3) {
    const group = lines.slice(i, i + 3).map((line) => line.split(""));

    const letter = group[0].find(
      (char) => group[1].includes(char) && group[2].includes(char)
    );

    if (letter) groups.push({ letter, priority: getPriority(letter) });
  }

  return groups
    .map((g) => g.priority)
    .reduce((prev, current) => prev + current);
};

console.log({ part1: part1(), part2: part2() });

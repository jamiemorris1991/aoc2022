import { getLines } from "./util";

const main = () => {
  const lines = getLines("01");

  let calories: number = 0;
  let maxCalories = 0;

  const elfTotals: number[] = [];

  lines.forEach((line) => {
    if (line.length === 0) {
      elfTotals.push(calories);
      calories = 0;
    } else {
      calories += Number(line);
    }
    maxCalories = Math.max(calories, maxCalories);
  });

  elfTotals.sort((a, b) => b - a);

  const topThree = elfTotals[0] + elfTotals[1] + elfTotals[2];

  console.log(topThree);
};

main();

import fs from "fs";
import path from "path";

export const getText = (day: string): string => {
  return fs.readFileSync(path.join(__dirname, `inputs/${day}.txt`), "utf-8");
};

export const getLines = (day: string): string[] => {
  return getText(day).split("\n");
};

const text = Deno.readTextFileSync("3.txt");
const grid = text.split("\n").map((line) => line.split(""));
const adjacent = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  // [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

type Gear = `${string}-${number}-${number}`;

let current = {
  numStr: "",
  num: NaN,
  adjacent: new Set<Gear>(),
};
const partList: (typeof current)[] = [];
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (!isNaN(Number(grid[i][j]))) {
      current.numStr += grid[i][j];
      for (let k = 0; k < adjacent.length; k++) {
        const [x, y] = adjacent[k];
        const newX = i + x;
        const newY = j + y;
        if (grid[newX] && grid[newX][newY]) {
          if (isNaN(Number(grid[newX][newY])) && grid[newX][newY] !== ".") {
            current.adjacent.add(`${grid[newX][newY]}-${newX}-${newY}`);
          }
        }
      }
    } else {
      if (current.numStr.length > 0) {
        if (current.adjacent.size > 0) {
          current.num = Number(current.numStr);
          partList.push(current);
        }
        current = { numStr: "", num: NaN, adjacent: new Set() };
      }
    }
  }
}

// Sum of nums
const ans1 = partList.reduce((a, b) => a + b.num, 0);

console.log({ ans1 });

const gears = new Map<Gear, number[]>();
for (const part of partList) {
  for (const gear of part.adjacent) {
    if (gear.startsWith("*")) {
      gears.set(gear, [...(gears.get(gear) ?? []), part.num]);
    }
  }
}

const ans2 = [...gears]
  .filter(([, nums]) => nums.length > 1)
  .reduce((acc, [, nums]) => acc + nums.reduce((a, b) => a * b), 0);

console.log({ ans2 });

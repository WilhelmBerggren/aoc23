const ans1 = Deno.readTextFileSync("./1.txt")
  .split("\n")
  .map((row) => {
    const nums = row.split("").filter(Number);
    return Number(nums[0] + nums[nums.length - 1]);
  })
  .reduce((a, b) => a + b, 0);

const digits = [
  ["zero", "ze0ro"],
  ["one", "on1e"],
  ["two", "tw2o"],
  ["three", "thr3ee"],
  ["four", "fo4ur"],
  ["five", "fi5ve"],
  ["six", "si6x"],
  ["seven", "se7ven"],
  ["eight", "eig8ht"],
  ["nine", "ni9ne"],
];

const ans2 = Deno.readTextFileSync("./1.txt")
  .replaceAll(digits[0][0], digits[0][1])
  .replaceAll(digits[1][0], digits[1][1])
  .replaceAll(digits[2][0], digits[2][1])
  .replaceAll(digits[3][0], digits[3][1])
  .replaceAll(digits[4][0], digits[4][1])
  .replaceAll(digits[5][0], digits[5][1])
  .replaceAll(digits[6][0], digits[6][1])
  .replaceAll(digits[7][0], digits[7][1])
  .replaceAll(digits[8][0], digits[8][1])
  .replaceAll(digits[9][0], digits[9][1])
  .split("\n")
  .map((row) => {
    const nums = row.split("").filter(Number);
    return Number(nums[0] + nums[nums.length - 1]);
  })
  .reduce((a, b) => a + b, 0);

console.log({ ans1, ans2 });

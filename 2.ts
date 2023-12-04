const games = Deno.readTextFileSync("2.txt")
  .split("\n")
  .map(line => [...line.matchAll(/(\d+)\s(red|green|blue)/g)]
    .map(group => ({[group[2]]: Number(group[1])})))

console.log(games)


const parsed = Deno.readTextFileSync("./2.txt")
  .split("\n")
  .map((row) =>
    row
      .split(": ")[1]
      .split("; ")
      .map((hand) => hand.split(", "))
      .map((hand) => hand.map((thing) => thing.split(" ")))
      .map((things) => things.map(([num, color]) => [color, Number(num)]))
      .map(Object.fromEntries)
  );

console.log(parsed);

const ans1 = parsed.reduce(
  (acc, colors, i) =>
    colors.some((c) => c.red > 12) ||
    colors.some((c) => c.blue > 14) ||
    colors.some((c) => c.green > 13)
      ? acc
      : acc + i + 1,
  0
);

const ans2 = parsed
  .map((colors) => {
    const reds = colors.map(c => c.red).filter(Boolean);
    const blues = colors.map(c => c.blue).filter(Boolean);
    const greens = colors.map(c => c.green).filter(Boolean);
    return Math.max(...reds) * Math.max(...blues) * Math.max(...greens);
  })
  .reduce((acc, power) => acc + power, 0);

console.log({ ans1, ans2 });

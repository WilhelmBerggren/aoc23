const txt = Deno.readTextFileSync("6.txt");

const [times, distances] = txt.split("\n")
  .map((line) =>
    [...line.matchAll(/\s+(\d+)/g)]
      .map((matches) => Number.parseInt(matches[1]))
  );

const finalResults = [];
for (let i = 0; i < times.length; i++) {
    const time = times[i];
    const results = [];
    for (let j = 0; j < time; j++) {
        results.push((time - j) * j);
    }
    finalResults.push(results.filter(r => r > distances[i]).length);
}

const bigTime = Number(times.map(String).join(""));
const bigDistance = Number(distances.map(String).join(""));

const results = [];
for (let j = 0; j < bigTime; j++) {
    results.push((bigTime - j) * j);
}
const ans2 = (results.filter(r => r > bigDistance).length);


console.log("ans1:", finalResults.reduce((a, b) => a * b, 1));
console.log("ans2:", ans2);

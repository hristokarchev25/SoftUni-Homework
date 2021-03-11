function ico(input) {
  let judges = Number(input.shift());
  let toPrint = input.shift();
  let fullAvg = 0;
  let presentations = 0;
  while (toPrint !== "Finish") {
    presentations++;
    let average = 0;
    for (let i = 0; i < judges; i++) {
      let grade = Number(input.shift());
      average += grade;
    }
    average /= judges;
    console.log(`${toPrint} - ${average.toFixed(2)}.`);
    fullAvg += average;
    toPrint = input.shift();
  }
  fullAvg /= presentations;
  console.log(`Student's final assessment is ${fullAvg.toFixed(2)}.`);
}
ico([3, "While", 6.00, 5.50, 6.00, "sedfg", 5.84, 5.66, 6, 00, "Finish"])
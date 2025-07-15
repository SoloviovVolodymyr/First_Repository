const readline = require('readline');
let result;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введіть сантиметри: ", function(centimeters) {
  result = centimeters / 2.54;
  console.log(centimeters + " " + "см = " + result.toFixed(2) + " " + "дюймів");
  rl.close();
});

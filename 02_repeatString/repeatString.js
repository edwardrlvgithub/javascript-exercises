const repeatString = function (string, num_times) {
  let repeatedString = "";

  for (let i = 0; i < num_times; i++) {
    repeatedString += string;
  }
  if (num_times < 0) {
    return "ERROR";
  }
  return repeatedString;
};

console.log(repeatString("hey", 1));

// Do not edit below this line
module.exports = repeatString;

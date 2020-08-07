var numbersArray = [];
var temp = 0;

function isTheAverageWhole(numbersArray) {
  for (var i = 0; i < numbersArray.length; i++) {
    temp += numbersArray[i];

  } var average = temp / numbersArray.length;
  return Number.isInteger(average);
}

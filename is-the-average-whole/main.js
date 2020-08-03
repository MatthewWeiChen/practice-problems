var numbersArray = [];
var temp = 0;

function isTheAverageWhole(numbersArray) {
  for (var i = 0; i < numbersArray.length; i++) {
    temp += numbersArray[i];

  } if (temp % 2) {
    return true;
  } return false;
}

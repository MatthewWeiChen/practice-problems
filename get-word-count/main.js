var sentence = "";

function getWordCount(sentence) {
  var sum = 0;
  for (var i = 0; i < sentence.length; i++) {
    var sentenceLetter = sentence[i];
    if (sentence[i] === " ") {
      sum += 1;
    }
  } sum += 1;
  console.log(sum);
}


//how are you?
//answer is 3

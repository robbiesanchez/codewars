// 1
// The code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     a * b
//   }

function multiply(a, b){
    return a * b
  }

// 2
//   There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//   input
//   customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//   n: a positive integer, the number of checkout tills.
//   output
//   The function should return an integer, the total time required.

function queueTime(line, registers) {
    var queueArr = [];
    for(var i = 0; i < registers; i++) {
      queueArr.push(0);
    }

    for(var j = 0; j < line.length; j++) {
      queueArr[0] += line[j];
      console.log(queueArr)
      queueArr.sort(function(a,b){
        return a-b;
      });
    }
    
    return queueArr[queueArr.length-1];
  }

// 3
// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay)
		return true
	else return false
}

// 4
// Create a function that takes a string as an argument. The string is a random name.

// If the last character of the name is an 'n', return true.
// If the last character of the name is not an 'n', return false.

function isLastCharacterN(word) {
	let lastLetter = word.substring(word.length - 1, word.length)
	if (lastLetter == "n")
		return true
	else return false
}

// 5
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
function numberSyllables(word) {
	return word.split("-").length;
}

// 6
// Complete the solution so that it reverses the string value passed into it.

function solution(str){
    return str.split('').reverse().join('');  
  }


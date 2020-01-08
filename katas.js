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

// 7
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 == 0)
    return "Even"
    else return "Odd"
  }
// 8
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time * 0.5);
  }

// 9
// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year/100); 
  }

// 10
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
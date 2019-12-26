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
    // console.log(queueArr)
    for(var j = 0; j < line.length; j++) {
      queueArr[0] += line[j];
      console.log(queueArr)
      queueArr.sort(function(a,b){
        return a-b;
      });
    }
    
    return queueArr[queueArr.length-1];
  }
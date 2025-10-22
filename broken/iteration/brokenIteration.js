
/* Becky

Parameters:
end - number

Counts every odd number starting from 0 and ending at end argument.
Logs each number to the console.
*/

function countOdds(end) {
  for(let num = 0; num < end; num += 2) {
    console.log(num);
  }
}

/* Ben

Parameters:
end - number

Counts every even number starting from 0 and ending at end argument.
Logs each number to the console.
*/

function countEvens(end) {
  let num = 0;

  while (num < end) 
    console.log(num);

    num += 2;
}

/* Eduardo

Parameters:
gap - number

Counts up numbers from 0 to 100 increasing by the gap argument.
(passing in 2 would count all even numbers)
Logs each number to the console.
*/

function countEvery(gap) {
  for(let num = 0; num < 100; gap += num) {
    console.log(num);
  }
}

/* Kevin

Parameters:
start - number
end - number

Counts up every number from start argument to end argument.
Logs each number to the console.
*/

function countBetween(start, end) {
  for(let num = 0; start < end; num++) {
    console.log(num);
  }
}

/* Mely

Parameters:
start - number
end - number

Counts down every number from end argument to start argument.
Logs each number to the console.
*/

function countDownBetween(start, end) {
  let num = end;

  while(num > 0) {
    console.log(num);

    num--;
  }
}

/* Rock

Parameters:
start - number

Counts down every number from start argument to 0.
Logs each number to the console.
*/

function countDown(start) {
  let num = start;

  while(num < 0) {
    console.log(num);

    num--;
  }
}

/* Sofia

Parameters:
end - number

Starting with the number 1, doubles the number until it reaches the end argument.
Logs each number to the console.
*/

function doubleUntil(end) {
  for(let num = 1; num < end; num /= 2) {
    console.log(num);
  }
}

/* Victor

Parameters:
gap - number

Counts down numbers from 100 to 0 increasing by the gap argument.
(passing in 2 would count all even numbers)
Logs each number to the console.
*/

function countDownEvery(gap) {
  let num = 100;

  while(num > 0) {
    num -= gap;

    console.log(num);
  }
}
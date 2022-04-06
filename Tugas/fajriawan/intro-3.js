// // learn loop

// let output = 0
// for (let i = 0; i < 10; i++){
//     output ++
// }

// console.log(output);

// learn for in
function forInObject(theObject = { first: "fajri", last: "sutansa" }) {
  for (let x in theObject) {
    console.log(x, theObject[x]);
  }
}

// [1,2,3,4] = {
// 0: 1,
// 1: 2,
// 2: 3,
// 3: 4
// }

function forInArray(theArray = [1, 2, 3, 4]) {
  for (let x in theArray) {
    console.log(x, theArray[x]);
  }
}

function forOfArray(theArray = [1, 2, 3, 4]) {
  for (let x of theArray) {
    console.log(x);
  }
}

function learnWhile() {
  let output = 0;
  let i = 0;
  while (i < 10) {
    output++;
    i++;
  }
  console.log(output);
}

function learnDoWhile() {
  let output = 0;
  let i = 0;
  do {
    output++;
    i++;
  } while (i < 10);

  console.log(output);
}

// learnDoWhile();

// learn break and continue
function learnBreak() {
  let output = 0;
  for (let i = 0; i < 10; i++) {
    if(i === 3) {break;}
    output++;
    console.log(i);
  }
}

function learnContinue() {
    let output = 0;
    for (let i = 0; i < 10; i++) {
      if(i === 3) {continue;}
      output++;
      console.log(i);
    }
  }

//   learnBreak();

// learn function
//function as declaration
function myFunc(){
    // do something
}

//function as expression 
// ES5
const expFunc = function(a,b){
  return console.log(a+b)
}

//ES6

const arrowFunc = (a,b) => {
    let first = a;
    let second = b;
    return console.log(first+second);
}

arrowFunc(2,4);

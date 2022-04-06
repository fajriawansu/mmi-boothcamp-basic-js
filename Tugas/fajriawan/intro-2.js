function learnMath(num1, num2 = 3) {
  let learnAdd = num1 + num2;
  let learnMod = num1 % num2;

  let shortPlus = 12;

  return (shortPlus += num1);
}

function learnComparison(arg1, arg2) {
  return arg1 === arg2;
}

function learnLogical(arg1, arg2, arg3) {
  let first = arg1 === arg2 && arg1 < arg3;
  let second = arg1 > arg2 || arg2 < arg3;
  const phi = Math.PI;

  const roundNum = Math.round(arg1);
  const ceilNum = Math.ceil(arg1);
  const floorNum = Math.floor(arg1);
  const truncNum = Math.trunc(arg1);
  const powNum = Math.pow(arg1, arg2);

  const learnMax = Math.max(arg1, arg2, arg3);

  return learnMax;
}

function learnIfElse(arg1, arg2) {
  let x = 1;

  if (arg1 == arg2 && typeof arg1 === "number" && typeof arg2 === "number") {
    x = 10;
  } else if (arg1 == arg2) {
    x = 12;
  } else {
    x = 14;
  }

  return x;
}

// console.log(learnIfElse("4", 4))

function learnSwitch(arg1, arg2) {
  let x = "";
  switch (arg1 + arg2) {
    case 18:
      x = "Benar";
      break;
    default:
      x = "Salah";
  }
  return x;
}

function learnTernary(arg1, arg2) {
  return typeof arg1 === "number"
    ? "Arg 1 is number"
    : arg1 > arg2
    ? "Arg1 > Arg2"
    : arg2 > arg1
    ? "Arg2 > Arg1"
    : arg1 === arg2
    ? "Sama Persis"
    : "Gatau";
}

console.log(learnTernary(10, 10));

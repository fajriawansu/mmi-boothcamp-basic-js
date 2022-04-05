function learnMath(num1, num2 = 3){
    let learnAdd = num1 + num2;
    let learnMod = num1 % num2;

    let shortPlus = 12;

    return shortPlus += num1
}

function learnComparison(arg1, arg2){
    return arg1 === arg2
}

function learnLogical(arg1, arg2, arg3){
    let first = arg1 === arg2 && arg1 < arg3;
    let second = arg1 > arg2 || arg2 < arg3
    const phi = Math.PI;

    const roundNum = Math.round(arg1);
    const ceilNum = Math.ceil(arg1);
    const floorNum = Math.floor(arg1);
    const truncNum = Math.trunc(arg1);
    const powNum = Math.pow(arg1, arg2);

    return truncNum
}

console.log(learnLogical(12.00000001))


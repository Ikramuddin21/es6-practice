// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const add = (a, b) => a + b;

const give5 = () => 5;

const result = add(50, 50);
const result2 = give5();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);
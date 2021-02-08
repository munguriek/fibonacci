/*
*TDD using test first approach to calculate the fibonacci of a number
*Group Otim Benjamin Munguriek and Ndagire Mariat
*/
const fib = function(input){
    if(input < 3) return 1;
    let previousNumber = 1;
    let nextNumber = 1;
    let fibSeries = [previousNumber, nextNumber];
    for(let counter = 2; counter < input; counter++){
        const currentNumber = previousNumber + nextNumber;
        previousNumber = nextNumber;
        nextNumber = currentNumber;
        fibSeries.push(currentNumber);
    }
    console.log(fibSeries);
    return nextNumber;
}
module.exports = fib;
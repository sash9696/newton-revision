
//closures

//closure allows a function to access variables from its outer enclosing function even after the outer function has finished executing

//function bundled along with it lexical environment forms closures

// const a = 10;
// function outerFunction() {

//     const outerVariable = "I am from outer function";

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction
// }

// const closureFunction = outerFunction();
// closureFunction();


//private variables

// function createCounter() {

//     let count = 0;
//     return {
//         increment: function () {
//             count++;
//         },
//         decrement: function () {
//             count--;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount());

//memoization

// n = 4
// 1 + 2 + 3 + 4
//sum of n natural numbers


function createExpensiveFunction() {
    const cache = {};
    return function (n) {

        if (cache[n]) {
            console.log('Using cached result');
            return cache[n];
        } else {
            console.log('Calcuating result ...');
            const startTime = new Date().getTime();
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                for (let j = i; j <= i; j++) {
                    sum = sum + j;
                }
            }
            const endTime = new Date().getTime();
            const timeTaken = endTime - startTime;
            console.log(`Time taken: ${timeTaken}ms`)
            cache[n] = sum;
            return sum
        }

    }
}

const expensiveFunction = createExpensiveFunction();

console.log(expensiveFunction(30000))
console.log(expensiveFunction(40000))
console.log(expensiveFunction(30000))
console.log(expensiveFunction(40000))
console.log(expensiveFunction(30000))


//memoization
//if there is an expensive calculation
//calculate the result for the first time and then memoize that means put it inside a object or an array, 
//caching

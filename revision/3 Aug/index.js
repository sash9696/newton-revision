
//polyfills

// if(!Array.prototype.map){

// }


const numbers = [10, 20, 30, 40, 50]

const multiplier = {
    factor: 2
}
// const multipliedNumbers = numbers.map(function (num, index, array) {
//     return num * this.factor
// }, multiplier)



// Array.prototype.myMap = function (callback, thisArg) {

//     if (typeof callback !== 'function') {
//         throw new TypeError(callback + 'is not a fucntion');
//     }

//     var newArray = [];

//     //iterate through the original array

//     for (var i = 0; i < this.length; i++) {
//         //call the callback function

//         var mappedValue = callback.call(thisArg, this[i], i, this)

//         newArray.push(mappedValue)
//     }
//     return newArray


// }


// const multipliedNumbers = numbers.map(function (num, index, array) {
//     console.log({ num, index, array })
//     return num * this.factor
// }, multiplier)

// console.log({ multipliedNumbers, numbers })

//reduce polyfill as homework


var ages = [20, 30, 25, 40, 50, 15]
const threshold = {
    num: 18
}

Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    var newArray = [];

    //loop through the original array

    for (let i = 0; i < this.length; i++) {


        var shouldKeep = callback.call(thisArg, this[i], i, this)
        //if the value is truthy rpush the element inside the new array

        if (shouldKeep) {
            newArray.push(this[i])
        }
    }

    return newArray
}


var adults = ages.myFilter(function (age, index, array) {
    return age <= this.num;
}, threshold)

console.log(adults)
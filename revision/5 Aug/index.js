//constructor

// let x = true

// let count = 0;

// setTimeout(() => {

//     x = false;
//     // console.log(count)


// }, 2000)

// setInterval(() => {

//     if (x) {

//         console.log(count++)


//     }
//     console.log('hello')


// }, 200)




//constructor

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // this.greet = function () {
//     //     console.log(`Hello , my name is ${this.name} and I am ${this.age} years old`)
//     // }
// }

//add greet method to the prototype

// Person.prototype.greet = function () {
//     console.log(`Hello , my name is ${this.name} and I am ${this.age} years old`)
// }

// const person1 = new Person("John", 30);
// const person2 = new Person("Peter", 40);


// // console.log(person1)
// // console.log(person2)
// person1.greet()
// person2.greet()


//inheritance in prototype
//home work
//Base constructor
// function User(username, email) {
//     //username, email
// }

// User.prototype.displayProfile = function () {

// }

// function AdminUser(username, email, role) {
//     //username, email, role

//     //call the base constructor 
//     User.call(this, username, email)

// }

//AdminUser inherit from User prototype

// AdminUser.prototype = Object.create(User.prototype)
// AdminUser.prototype.constructor = AdminUser

// AdminUser.prototype.displayRole = function () {

// }

function simulateApiCall() {

    //additional task

    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            const data = { message: "API CALL SUCCESS", statusCode: 200 };
            // resolve(data);

            reject('Error something went wrong')


        }, 2000)
    })
}

simulateApiCall()
    .then((result) => {
        console.log(result.message)
        console.log("Status Code: ", result.statusCode)
    })
    .catch((error) => {
        console.log("Error Occured", error)
    })
    .finally(() => {
        console.log('finally')
    })

//call apply bind

//methods for functions
//these are used to control the context (this keyword) when calling a function


//call


const person1 = {
    name: "John",
    // greetings: function () {
    //     console.log(`Hello, ${this.name}!`)
    // }
};

const person2 = {
    name: "Peter",
};
function greetings(city, age) {
    console.log(this) //pointing to window object
    console.log(`Hello, ${this.name}! . from ${city} of age ${age}`)

}
// person1.greetings();

// person1.greetings.call(person2);


// greetings();
// greetings();
// greetings.call(person1, 'Delhi', 20);
// greetings.call(person2, 'Mumbai', 40);

greetings.apply(person1, ['Delhi', 20]);
greetings.apply(person2, ['Mumbai', 40]);



//interview like question 

let player1 = {
    health: 100,
    getHealth() {
        return this.health;
    }
};

let getPlayerHealth = player1.getHealth;

let player2 = {
    health: 50
}

console.log(getPlayerHealth());
console.log(getPlayerHealth.call(player2));
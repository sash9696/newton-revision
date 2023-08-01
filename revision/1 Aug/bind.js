
//bind 

//bind method creates a new functionwhen called has a fixed this
//that can be called lateron

const person = {
    name: 'John',
    sayHi: function (city, age) {
        console.log(`Hello ${this.name} from ${city} of age ${age}`)
    }
}


const anotherPerson = {
    name: 'Peter'
}

let boundFunction = person.sayHi.bind(anotherPerson, "Delhi", 20)
boundFunction()
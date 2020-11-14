// const person = {
//     name: 'John Doe',
//     age: 57
// } 

//I created a class constructor of Person; so marked by the capital P in the word Person, to make a Person object literal and used the this keyword to specify what name and age are in that particular constructor. I placed a greeting function in the constructor as well.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

//below is how an item is exported
module.exports = Person;
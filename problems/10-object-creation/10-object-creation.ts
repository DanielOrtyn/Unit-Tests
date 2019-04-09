/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let objLiteral = {
    name: `Literal Creation`,
    age: 10
}

function FunctionCreation(newName, newAge){
    this.name = newName,
    this.age = newAge
}
let objFunction = new FunctionCreation("Function Creation", 11)


class ES6Class {
    name: string
    age: number
    constructor(newName, newAge){
        this.name = newName,
        this.age = newAge
    }
}
let es6Object = new ES6Class('ES6 Class, Object', 12);

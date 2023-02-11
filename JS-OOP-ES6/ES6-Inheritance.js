// // Kalıtım - Inheritance
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.showInfos = function () {
//     console.log("İsim: " + this.name, "\nYaş: " + this.age)
// }
// Person.prototype.toString = function () {
//     console.log("Person içinde değiştirilmiş toString()")
// }
// function Employee(name, age, salary) {

//     Person.call(this, name, age)
//     this.salary = salary
// }
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.toString = function () {
//     console.log("Employee içinde değiştirilmiş toString()")
// }
// Employee.prototype.showInfos = function () { //Override - geçersiz kılmak
//     console.log("İsim: " + this.name, "\nYaş: " + this.age, "\nMaaş: " + this.salary)
// }
// const emp = new Employee("Kerem", 23, 40000)



class Person { // SuperClass, BaseClass
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showInfos() {
        console.log("İsim: " + this.name, "\nYaş: " + this.age)
    }
}

class Employee extends Person { // DerivedClass, SubClass, ChildClass
    constructor(name, age, salary) {
        // this.name = name
        // this.age = age
        super(name, age) // ↑ ile aynı işlem(SuperClass'ın constructorını kullanıyoruz)
        this.salary = salary
    }
    showInfos(){ // Override
        console.log("İsim: " + this.name, "\nYaş: " + this.age, "\nMaaş: " + this.salary)
    }
    toString(){
        console.log("Employee içinde değiştirilmiş toString()")
    }
}

const emp = new Employee("Kerem", 22, 40000)
console.log(emp)
emp.showInfos() //SuperClass
emp.toString()
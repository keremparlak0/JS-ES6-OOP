// Kalıtım - Inheritance
function Person(name, age) {
    this.name = name
    this.age = age

}
Person.prototype.showInfos = function () {
    console.log("İsim: " + this.name, "\nYaş: " + this.age)
}
Person.prototype.toString = function () {
    console.log("Person içinde değiştirilmiş toString()")
}
// const person = new Person("Kerem", 23)
// person.showInfos()
// console.log(person)

function Employee(name, age, salary) {
    // this.name = name
    // this.age = age
    Person.call(this, name, age)// Üst classın constructorunu kullandık
    this.salary = salary
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.toString = function () {
    console.log("Employee içinde değiştirilmiş toString()")
}
Employee.prototype.showInfos = function () { //Override - geçersiz kılmak
    console.log("İsim: " + this.name, "\nYaş: " + this.age, "\nMaaş: " + this.salary)
}

const emp = new Employee("Kerem", 23, 40000)
console.log(emp)
emp.showInfos()
emp.toString()

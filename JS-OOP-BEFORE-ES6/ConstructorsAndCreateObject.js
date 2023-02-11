// console.log(window) || console.log(this) //Global Scope
// CONSTRUCTOR

function Employee(name, age, salary) {// Yapıcı Fonksiyon - CONSTRUCTOR
    this.name = name
    this.age = age
    this.salary = salary
    this.showInfos = function() {
        console.log("Name: " + this.name, "\nAge: " + 
        this.age, "\nSalary($): " + this.salary)
    }

    // console.log(globalThis)//Global Scope
    // console.log(this) // Local Scope
}

const emp1 = new Employee("Kerem", 23, 40000)
console.log(emp1)
emp1.showInfos()
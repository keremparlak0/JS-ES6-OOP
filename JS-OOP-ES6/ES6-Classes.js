/////////////////////////////////////////////////
// function Employee(name, age, salary){
//     this.name = name
//     this.age = age
//     this.salary = salary
// }
// Employee.prototype.showInfos = function() {
//     console.log(this.name, this.age, this.salary)
// }
// const emp1 = new Employee("Kerem", 22, 40000)
// console.log(emp1)
/////////////////////////////////////////////////

// Syntactic Sugar
class Employee {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }
    showInfos() {
        console.log(this.name, this.age, this.salary)
    }
}

const emp1 = new Employee("Kerem", 22, 40000)
emp1.showInfos()
console.log(emp1)

/////////////////////////////////////////////////
// - İki yazım şeklinin yaptığı iş aynı
// - class yazımı arka planda en üsttekine dönüştürülüyor
/////////////////////////////////////////////////
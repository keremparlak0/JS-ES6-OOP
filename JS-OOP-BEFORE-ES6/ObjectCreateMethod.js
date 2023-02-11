// const obj = {
//     test1: function(){
//         console.log("Test 1")
//     },
//     test2: function(){
//         console.log("Test 2")
//     }
// }

// const emp = Object.create(obj)  //Inheritance(kalıtım)
//                                 //_proto_ = test1: f (), test2: f ()

// emp.name = "Kerem"
// emp.age = 22

// console.log(emp)
/***************************************************/

function Person(){}
Person.prototype.test1 = function() {
    console.log("Test1")
}
Person.prototype.test2 = function() {
    console.log("Test2")
}
const person1 = new Person()
console.log(person1)


function Employee(name, age){
    this.name = name
    this.age = age
}

Employee.prototype = Object.create(Person.prototype)
//↑↑ Employee objesinin prototype'ini Personunkine eşitliyoruz
//↑↑ Yani miras alıyoruz
Employee.prototype.myTest = function() {
    console.log("MyTest")
}
const emp1 = new Employee("Kerem", 22)
console.log(emp1)
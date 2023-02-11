// C++, Java gibi diller "class" tabanlı iken, JavaScript prototype tabanlıdır
// ES6 dan sonra "class" yazımı çıkmıştır ama bunlar arka tarafta prototype'a dönüştürülür
// Her objenin kendi içinde bir "proto" özelliği vardır.
// Her objenin kendi içinde bir prototype'i vardır ve her prototype'in içinde bir Object Prototype vardır.
// Her bir obje JS2deki Object Prototypden miras(inheritence) alıyor.
// Fonksiyonlarımızı prototype'lerin içine yazarsak, bütün objeler aynı prototype'i kullandığı için, bellekte çok yer kaplamaz


// const object = new Object() //Object Literal (En temel obje)
// object.name = "Kerem"
// console.log(object)

function Employee(name, age) {
    this.name = name
    this.age = age

    // this.showInfos = function() { // Çok fazla obje tarafından kullanılırsa bellekte çok gereksiz yer işgal eder
    //     console.log("Name: " + this.name, "\nAge: " + this.age)
    // }
}
Employee.prototype.showInfos = function(){ //Methodu prototype içine tanımlama
    console.log("Name: " + this.name, "\nAge: " + this.age)
}

const emp1 = new Employee("Kerem", 23)
const emp2 = new Employee("Arif", 21)

emp1.showInfos()
emp2.showInfos()

console.log(emp1)
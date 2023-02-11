// Durağan method
// Static method şeklinde yazarsak obje oluşturmadan kullanabiliriz
// Oluşturulan static method prototypte bulunmuyor. Bu yüzden obje oluşturup methodu çağıramıyoruz.
// Object üzerinden değil class üzerinden erişebiliriz.
// Object.create() - Object üzerine statik yazılmıştır.
// MAth.sqrt() - Yine static biçimde yazılmıştır.
class MathClass {
    static cube(x) {
        console.log(x * x * x)
    }
    square(x) {
        console.log(x * x)
    }
}
const mathObject = new MathClass()
//Correct use
MathClass.cube(8)
mathObject.square(8)

//Incorrect use(TypeError)
mathObject.cube(8)
MathClass.sqrt(8)
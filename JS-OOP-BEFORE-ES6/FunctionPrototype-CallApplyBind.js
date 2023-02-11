const obj1 = {
    num1: 45,
    num2: 88
}

function addNumbers(num3, num4) {
    console.log(this.num1 + this.num2 + num3 + num4)
    // ↑↑ Burada fonksiyonu çağırırken objeyi balirtmezsek
    //      - "this" anahtar kelimesi Global Scope'u gösterir.
    //       Global Scope olan "window" objesinde num1 ve num2 propertyleri bulunmuyor.
    //       Bundan dolayı fonksiyonu çağırırken objeyi de call, apply veya bind fonksiyonlarıyla belirtmeliyiz.
}

addNumbers(10,10) //Not a numbers(NaN)
addNumbers.call(obj1, 10, 10)
addNumbers.apply(obj1, [10, 10])

// Call ve Apply'ın aksine Bind, ekstra (kopya) bir fonksiyon üretiyor.

function getNumbersTotal(num3, num4) {
    return this.num1 + this.num2 + num3 + num4
}

const copyFunc1 = getNumbersTotal.bind(obj1)
console.log(copyFunc1(10,10))


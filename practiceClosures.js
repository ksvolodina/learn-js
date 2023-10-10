// Практика на замыкания

// Создайте функцию addByX, которая принимает 1 параметр (число) и возвращает новую функцию,
// которая также принимает число и возвращает его сумму с исходным параметром.

function addByX(x){
    const sumNumbers = (y) => x + y;
    return sumNumbers
}

const addByTwo = addByX(2);
console.log(addByTwo(3)) // 5
console.log(addByTwo(5)) // 7

const addByFour = addByX(4);
console.log(addByFour(3)) //7
console.log(addByFour(5)) //9
// Практика на деструктуризацию массивов
// Дана функция getInfo, возвращающая массив в результате вызова.
// Создайте переменные carName и carSeries и при помощи деструктуризации назначьте ей значения,
// возвращаемые функцией.

function getInfo() {
    return ['BMW', 'X3'];
}

const [carName, carSeries] = getInfo()
console.log(carName, carSeries)
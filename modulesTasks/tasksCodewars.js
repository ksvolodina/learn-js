// Задача: создать функцию, которая делает положительное число отрицательным.
// Остальные условия - полнейшая отсебятина

// function makeNegative(){
//     let tries = 0;
//     while (tries < 3){
//         let number = +prompt('Введите число')
//         if (number > 0){
//             alert(`Вау, мы сделали число отрицательным: ${number *= -1}!`)
//             break
//         } else if (isNaN(number)) {
//             alert('Введите число, а не буковки')
//         } else {
//             alert('Магия не работает для 0 и отрицательных чисел :(')
//         }
//         tries++;
//     }
//     alert('А всё, уже всё, приходите завтра')
// }
//
// makeNegative();

// Задача: получить непустой массив целых чисел, вернуть результат умножения значений массива
// function arrMultiply(numbers){
//     if (numbers.length > 0){
//         let result = 1;
//         for (let number of numbers){
//             result *= number;
//         }
//         console.log(result);
//     }
// }
//
// arrMultiply([1, 2, 3]);

// Задача: вернуть наименьшее целое число непустого массива
// function minNumber(numbers){
//     if (numbers.length > 0){
//         let min = numbers[0];
//         for (let number of numbers){
//             if (min > number) min = number;
//         }
//         return min;
//     }
// }
//
// console.log(minNumber([34, -345, -1, 100]));

// Задача: найти сумму всех чисел от 1 до num
function sumNumbers(num){
    let result = 0;
    for (let i = 1; i<=num; i++){
        result += i;
    }
    return result;
}

console.log(sumNumbers(2));
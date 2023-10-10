// Практика на рекурсию.

// Вычислить длину массива с помощью рекурсии, length не использовать
function getLength(arr){
    let counter = arr.pop();
    if (counter === undefined){
        return 0;
    }
    return 1 + getLength(arr);
}

console.log(getLength([1, 2, 3, 5, 7, 6, 8, 3]))
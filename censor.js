// Создайте функцию censor, которая не принимает аргументов. +
// Функция должна возвращать новую функцию, принимающую опционально 1 или 2 параметра (оба - строки).
// Когда возвращаемая функция принимает 2 параметра, то она ничего не возвращает,
// а сохраняет полученные значения как пару (пара - это массив с двумя значениями).
// Когда возвращаемая функция принимает 1 параметр, то она возвращает полученную строку,
// заменив в ней все слова, согласно ранее сохранённым парам.
// Пример использования:

function censor(){
    const arr = []
    function func(a, b){
        if (b){
            arr.push([a, b])
        } else {
            let str = a
            for (let item of arr){
                str = str.replaceAll(item[0], item[1])
            }
            return str
        }
    }
    return func
}

const changeScene = censor();
changeScene('PHP', 'JS');
changeScene('backend', 'frontend');
changeScene('is', 'is not');
console.log(changeScene('PHP is the most popular programming language for backend web-development'));
// должно распечатать 'JS is the most popular programming language for frontend web-development'

// Примечание: в переданной строке, в качестве единственного параметра,
// замена происходит согласно парам, где первое значение пары - что мы хотим заменить,
// второе значение пары - на что хотим заменить.
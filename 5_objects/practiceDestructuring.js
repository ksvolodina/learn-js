// Практика на деструктуризацию массивов
// Дана функция getInfo, возвращающая массив в результате вызова.
// Создайте переменные carName и carSeries и при помощи деструктуризации назначьте ей значения,
// возвращаемые функцией.

function getInfo() {
    return ['BMW', 'X3'];
}

const [
    carName = '',
    carSeries = ''
] = getInfo() || []
console.log(carName, carSeries)

// Практика по деструктуризации объекта
// Дан объект link. Используя деструктуризацию объекта,
// создайте новые переменные со значениями 'blank', 'link', 'anchor', 'Click me'.
// Имена переменных используйте согласно ключам (где необходимо, используйте переименование,
// создав переменную с именем renamed).

const link = {
    href: '#',
    title: 'simple link',
    target: 'blank',
    className: 'link',
    id: null,
    children: {
        span: {
            content: 'Click me',
            className: 'anchor',
        },
    },
}

const {
    target = '',
    className = '',
    children: {
        span: {
            content = '',
            className: renamed = ''
        } = {}
    } = {}
} = link || {}

console.log(target, className, renamed, content)
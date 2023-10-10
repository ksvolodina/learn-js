// Практика на фильтрацию №1
// Дан массив строк names.
// Создайте новый массив shortNames, сохранив в него только значения из оригинального массива,
// длина которых не превышает 5 символов.

const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];

const shortNames = names.filter((name) => name.length <= 5)
console.log(shortNames)
console.log(names)

// Практика на фильтрацию №2
// Дана коллекция products. Создайте на базе нее новую коллекцию cheapProducts,
// поместив в нее только элементы оригинальной коллекции, ключ price в которых ниже 300.

const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
    },
];

const cheapProducts = products.filter((product) => product.price < 300)

console.log(cheapProducts)
console.log(products)

// Практика на фильтрацию №3
// Дана коллекция developers, где у каждого элемента имеется свойство skills. Создайте новую коллекцию tsDevelopers,
// добавив туда только те элементы оригинальной коллекции, у которой в массиве skills есть значение 'TypeScript'.

const developers = [
    {
        id: 1,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
    },
    {
        id: 2,
        fullName: 'Petr Petrov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
    },
    {
        id: 3,
        fullName: 'Ian Melnikov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
    },
    {
        id: 4,
        fullName: 'Antonio Banderas',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
    },
];

const tsDevelopers = developers.filter((developer) => developer.skills.includes('TypeScript'))

console.log(tsDevelopers)
console.log(developers)

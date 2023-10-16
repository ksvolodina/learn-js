// Практика на маппинг №1
//
const numbers = [1, 2, 3]
const doubledNumbers = numbers.map(num => num * 2)
// console.log(doubledNumbers)
// console.log(numbers)

// Практика на маппинг №2
// Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers,
// увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'.

const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1000,
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 950,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
        salary: 850,
    },
];

const middleDevelopers = developers.map((developer) => {
    return {
        ...developer,
        skills: [...developer.skills, 'TypeScript'],
        salary: developer.salary + 500,
    }
})

console.log(middleDevelopers)
console.log(developers)




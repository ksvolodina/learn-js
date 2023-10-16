// Практика на работу с событием click
// Дана разметка и стили к ней. По умолчанию панели .panel не отображаются.
// Сделайте так, что при клике на кнопки .accordion открывались следующие за ними панели.
// При повторном клике панели должны скрываться.
//
// Примечание 1: нельзя повесить обработчик клика на коллекцию элементов, но можно на конкретный элемент.
//
// Примечание 2: используйте селекторы соседей относительно доступных элементов.

const accordionBtns = document.querySelectorAll('.accordion')

function accordion(){
    this.nextElementSibling.classList.toggle('show')
}

accordionBtns.forEach(btn => btn.addEventListener('click', accordion))

//-------------------------------------------------------------------------------------------------------

// Практика на работу с объектом события
// В html даны кнопки с id clicker1 и clicker2. У кнопок есть атрибут data-clicked,
// в котором хранится информация о количестве кликов по данной кнопке.
//
// Создайте одну общую функцию для обработки клика на эти кнопки,
// которая будет увеличивать информацию о количестве кликов на той кнопке, на которую был сделан клик.
// Предусмотрите, что количество кнопок в дальнейшем может меняться - три, пять кнопок и так далее.

const clickers = document.querySelectorAll('[data-clicked]')

function clickCounter (){
    this.dataset.clicked++
    this.lastElementChild.innerHTML = this.dataset.clicked
}

clickers.forEach( clicker => clicker.addEventListener('click', clickCounter))

// Практика на работу с формой
// Дана простая форма авторизации.
// Необходимо отменить отправку формы по умолчанию и проверить поля с логином и паролем по следующим признакам:
//
// 1. поля непустые (если одно из полей пустое, вывести в консоль сообщение "All fields are required")
//
// 2. логин и пароль должны соответствовать одной и записей в массива registeredUsers файла app.js
// (в случае несовпадения, вывести в консоль сообщение "Incorrect login or password")
//
// 3. если учетные данные подходят, вывести в консоль сообщение "Access granted" и очистить поля формы.
const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const btn = document.querySelector('#form button');
const login = document.querySelector('#form [name=login]');
const password = document.querySelector('#form [name=password]')
const form = document.querySelector('#form')

function handleEvent(event){
    event.preventDefault()

    if (isFieldsFulled() && isRegistered()){
        console.log('Access granted')
        form.reset()
    }
}

btn.addEventListener('click', handleEvent)

function isFieldsFulled(){
    if (!login.value.trim() || !password.value.trim()){
        console.log('All fields are required')
        return false
    }

    return true
}

function isRegistered (){
    let isValid = false

    registeredUsers.forEach(user => {
        if (login.value === user[0] && password.value === user[1]){
            isValid = true
        }
    })

    if (!isValid) {
        console.log('Incorrect login or password')
    }

    return isValid
}
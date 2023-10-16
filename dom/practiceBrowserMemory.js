const todos = document.querySelector('#todos')
document.querySelector('button').addEventListener('click', handleClick)
document.addEventListener('DOMContentLoaded', loadTodos)

function handleClick(event) {
    event.preventDefault()
    const newTodo = this.previousElementSibling.value.trim()
    if (newTodo){
        createTodo(newTodo)
        saveToStorage(newTodo)
        this.previousElementSibling.value = ''
    } else {
        alert('Заполните поле')
    }
}

function getFromStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || []
}

function saveToStorage(todo) {
    const todos = getFromStorage()
    localStorage.setItem('tasks', JSON.stringify([...todos, todo]))
}

function deleteFromStorage(todo) {
    const todos = getFromStorage()
    localStorage.setItem('tasks', JSON.stringify(todos.filter(el => el !== todo)))
}

function loadTodos() {
    const todos = getFromStorage()
    todos.forEach(todo => createTodo(todo))
}

function createTodo(todo) {
    const li = document.createElement('li')
    li.innerText = todo
    li.addEventListener('click', deleteTodo)

    todos.append(li)
}

function deleteTodo() {
    this.removeEventListener('click', deleteTodo)
    this.remove()
    deleteFromStorage(this.innerText)
}
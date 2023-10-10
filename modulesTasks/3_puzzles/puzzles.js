// Должны соблюдаться следующие условия:
//
// 1. В случае правильного ответа выдать пользователю сообщение "Правильный ответ"
// 2. В случае неправильного ответа выдать пользователю сообщение "Неправильный ответ"
// 3. В случае окончания попыток выдать пользователю сообщение "Игра окончена"
//
// Дополнительно (по желанию - не проверяется автотестами):
// - предоставьте пользователю подсказки в случае неправильного ответа
// - подсказки предлагаются после первых двух неправильных ответов
// - после третьего неправильного ответа подсказка не нужна (как вариант, можно сообщить правильный ответ)

var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(riddleAnswer) {
        // проверка на правильность
        if (riddleAnswer === this.correctAnswer){
            alert('Правильный ответ')
            this.tries = 0
            errorTries.classList.add("success")
            errorTries.innerText = 'Поздравляем, вы победили!'
        } else {
            this.tries--
            if (this.tries === 0) {
                errorTries.classList.add("error")
                errorTries.innerText = 'Вы проиграли. Правильный ответ: лампочка'
            }
        }
        // подсчет попыток и выдача подсказок
        if (this.tries > 0){
            const hint = this.hints[this.tries === 2 ? 0 : 1]
            alert(`Неправильный ответ. Подсказка: ${hint}. Осталось попыток: ${this.tries}`)
        } else {
            alert('Игра окончена')
            btn.disabled = true
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question
}

const btn = document.getElementById('btn')
const errorTries = document.getElementById('error')
const input = document.getElementById('input');

btn.onclick = function (event) {
    event.preventDefault()
    const guessedAnswer = input.value.toLowerCase();
    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer)
    }
    input.value = ''
}
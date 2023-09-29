// Должны соблюдаться следующие условия:
//
// 1. В случае правильного ответа выдать пользователю сообщение "Правильный ответ" (в alert и console.log)
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
    checkAnswer(guessedAnswer) {
        // проверка на правильность
        if (guessedAnswer === this.correctAnswer){
            alert('Правильный ответ')
            console.log('Правильный ответ')
        } else {
            alert('Неправильный ответ')
            console.log('Неправильный ответ')
            this.tries--
            console.log(this.tries)
        }
        // подсчет попыток
        if (this.tries === 1){
            alert(this.hints.join(', '))
        } else if (this.tries === 0){
            alert('Правильный ответ - лампочка')
            // добавим невозможность играть дальше
            btn.disabled = true
            errorTries.classList.add("active")
            errorTries.innerText = 'Вы проиграли'
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question
}

const btn = document.getElementById('btn')
const errorTries = document.getElementById('error')
btn.onclick = function (event) {
    event.preventDefault()
    const input = document.getElementsByTagName('input')[0];
    const guessedAnswer = input.value.toLowerCase();
    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer)
    }
}
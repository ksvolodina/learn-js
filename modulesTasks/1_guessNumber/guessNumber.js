let secretNum = Math.ceil(Math.random() * 10);
let step = 1;
const steps = 5;
let isFinished = false;

function guessNum(num) {
    if (isFinished == true){
        return
    }
    if (step < steps) {
        if (num !== secretNum) {
            let quantitySteps = steps - step;
            let tries;
            if (quantitySteps > 1){
                tries = 'попытки'
            } else {
                tries = 'попытка'
            }
            alert(`Вы не угадали, загаданное число ${num < secretNum ? 'больше' : 'меньше'}. У вас осталось ${quantitySteps} ${tries}`);
            step++;
        } else {
            alert('Вы угадали, игра окончена');
            isFinished = true;
        }
    } else {
        alert('Игра окончена, потому что исчерпаны все попытки');
    }
}
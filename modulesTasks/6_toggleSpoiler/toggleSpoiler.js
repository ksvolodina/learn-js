// В разметке дана кнопка #myBtn и блок #spoiler, который по умолчанию скрыт.
// Задача:
// При клике на кнопку блок #spoiler должен отображаться.
// При повторном клике на кнопку блок #spoiler снова должен скрываться.
// Когда блок #spoiler отображается, должна быть возможность закрыть его нажатием клавиши Escape на клавиатуре
// Когда блок #spoiler скрыт, клавиша Escape обрабатываться не должна.

document.querySelector('#myBtn').addEventListener('click', toggleSpoiler)

function toggleSpoiler() {
    const spoiler = document.querySelector('#spoiler')
    spoiler.classList.toggle('closed')
    if (!spoiler.classList.contains('closed')){
        this.innerText = 'Скрыть спойлер'
        attachSpoilerEvents()
    } else {
        this.innerText = 'Показать спойлер'
        detachSpoilerEvents()
    }
}

function attachSpoilerEvents() {
    document.addEventListener('keydown', handleEscape)
}
function detachSpoilerEvents() {
    document.removeEventListener('keydown', handleEscape)
}

function handleEscape(event){
    if (event.key === 'Escape') toggleSpoiler()
}

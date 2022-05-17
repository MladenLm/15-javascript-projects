//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', (e) => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})

// traversing the dom

// const buttons = document.querySelectorAll('.question-btn')

// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         const questions = e.currentTarget.parentElement.parentElement
//         questions.classList.toggle('show-text')
//     })
// })
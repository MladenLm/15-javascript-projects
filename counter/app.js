// setting inital value
let count = 0;

// getting elements from the DOM
const value = document.getElementById('value');
// const decrease = document.getElementById('decrease')
//const reset = document.getElementById('reset')
//const increase = document.getElementById('increase')

const btns = document.querySelectorAll('.btn')


btns.forEach(button => {
    button.addEventListener('click', (e) => {
        const classOfBtn = e.currentTarget.classList;

        if (classOfBtn.contains('decrease')) {
            count--
        } else if (classOfBtn.contains('reset')) {
            count = 0
        } else {
            count++
        }

        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = '#222'
        }

        value.textContent = count
    })
});

/*
// function to decrease value 
decrease.addEventListener('click', () => {
    count -= 1
    value.textContent = count
})

// function to reset value
reset.addEventListener('click', () => {
    count = 0
    value.textContent = count
})

// function to increase value
increase.addEventListener('click', () => {
    count += 1
    value.textContent = count
})
*/
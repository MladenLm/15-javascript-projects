// Array from which we are choosing random elements to form our hex value
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Taking our elements form the DOM
const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');

// Event listener that fires when our ouser clicks a button
btn.addEventListener('click', () => {
    let color = randomNumber()
    document.body.style.backgroundColor = color
    colorName.textContent = color
})

// Function that creates random hex value
function randomNumber() {
    let color = "#"

    for (let i = 0; i <= 5; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}
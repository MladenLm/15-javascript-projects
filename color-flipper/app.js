const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 3);
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber]
})


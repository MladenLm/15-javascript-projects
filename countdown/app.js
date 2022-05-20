const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let currentYear = new Date().getFullYear()
let randomMonth = () => Math.floor(Math.random() * 12)
let randomDay = () => Math.floor(Math.random() * 6)
let futureDate = new Date(
  currentYear + 1, 
  randomMonth(), 
  randomDay(),
  12,
  30,
  0
  )

const year = futureDate.getFullYear()
const month = futureDate.getMonth()
const day = futureDate.getDay()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()


giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${months[month]} ${year} ${hours}:${mins}`

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const currentTime = new Date().getTime()
  let remainingTime = futureTime - currentTime

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  
  let days = Math.floor(remainingTime / oneDay)
  let hours = Math.floor((remainingTime % oneDay) / oneHour)
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute)
  let seconds = Math.floor((remainingTime % oneMinute) / 1000)

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    } else {
      return item
    }
  }

  const values = [days, hours, minutes, seconds]

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

  if (remainingTime < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class='expired'>sorry this giveaway has expired</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
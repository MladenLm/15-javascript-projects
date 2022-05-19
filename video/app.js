// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// grabbing our elements from the DOM
const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

// event listener listening to click to pause / play video
btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play()
    }
})

// preloader function

const preload = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preload.classList.add('hide-preloader')
})

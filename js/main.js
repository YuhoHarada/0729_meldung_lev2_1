const result = document.getElementById("count")
const message = document.querySelector(".message")
let count = 10

let countdown = setInterval(() => {
    if (count == 0) {
        clearInterval(countdown)
        message.style.opacity = "0"
    }
    result.innerHTML = ("0" + count).slice(-2)
    count--
}, 1000)
let counter = document.querySelector('#number_counter')
let btnPlus = document.querySelector('#plus')
let btnMinus = document.querySelector('#minus')

let counterVal = 1
counter.innerText = counterVal

setInterval(function () {
    responsiveWindow()
}, 1000);

function incrementValue() {
    if (counterVal === 3) {
        btnPlus.src = './assets/images/plus_empty.svg'
    } else {
        counterVal++
        btnPlus.src = './assets/images/plus.svg'
        btnMinus.src = './assets/images/minus.svg'

    }
    counter.innerText = counterVal
}

function decrementValue() {
    if (counterVal === 1) {
        btnMinus.src = './assets/images/minus_empty.svg'
    } else {
        counterVal--
        btnPlus.src = './assets/images/plus.svg'
        btnMinus.src = './assets/images/minus.svg'
    }
    counter.innerText = counterVal
}

function responsiveWindow() {
    window.onresize = (el) => {
        el = window.outerWidth

        if (el >= 1366) {
            document.querySelector('#search').placeholder = "What are you looking for?"
            document.getElementById('user').classList.remove('remove')
            document.getElementById('wishlist').classList.remove('remove')
        } else {
            document.querySelector('#search').placeholder = " "
            document.getElementById('user').classList.add('remove')
            document.getElementById('wishlist').classList.add('remove')
        }
    }
}


btnPlus.addEventListener('click', incrementValue)
btnMinus.addEventListener('click', decrementValue)


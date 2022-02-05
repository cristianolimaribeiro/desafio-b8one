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
            document.querySelector('.bag').innerHTML = `<a href="#" id="user"><img src="./assets/images/user.svg" alt="user"><span>login</span></a>
                                                        <a href="#" id="wishlist"><img src="./assets/images/heart.svg" alt="wishlist"><span>wishlist</span></a>
                                                        <a href="#" id="bag"><img src="./assets/images/bag.svg" alt="bag"></a>`
        } else {
            document.querySelector('#search').placeholder = " "
            document.getElementById('user').remove()
            document.getElementById('wishlist').remove()
        }

    }



}


btnPlus.addEventListener('click', incrementValue)
btnMinus.addEventListener('click', decrementValue)


const debut = document.querySelector('#debut')
const header = document.querySelector('#header')
let h1 = document.querySelector('h1')
const h = document.querySelector('.h')
const section = document.querySelectorAll('section')
let moi = document.querySelector("#moi")

debut.addEventListener("click", () => {
    header.classList.toggle('visible')
    debut.classList.toggle('dv')
    h1.classList.toggle('hidden')
    h.classList.toggle('dv')
    section.forEach(function (sect) {
        sect.classList.toggle('visible')
    })


})
let tb = ["mon portofolio", "CLIK HERE"]
let i = 0
let b = 0
let text = () => {

    let span = document.createElement('span')
    h1.appendChild(span)
    span.textContent = tb[i][b]

    setTimeout(() => {
        span.remove()
    }, 2000);



}

let loop = () => {

    if (i >= tb.length) {
        b = 0
        i = 0

    }

    if (b < tb[i].length) {

        setTimeout(() => {
            text()
            loop()
            b++

        }, 50);

    } else {

        setTimeout(() => {
            b = 0
            i++
            loop()
            console.log(tb[i]);
        }, 2000);
    }
}

loop()

let tb2 = ["Prénom:", "Mohamed", "Nom:", "Ramdam", "Date de naissance:", "22/08/2000", "Meilleur qualité:", "êxtrement determiné"]

let compteur = 0
let letter = 0

let text2 = () => {
    let span2 = document.createElement('span')
    moi.appendChild(span2)

    span2.textContent = tb2[compteur][letter]
    setTimeout(() => {
        span2.remove()
    }, 2800);
}

let loop2 = () => {
    if (compteur >= tb2.length) {
        compteur = 0
        letter = 0


    }


    if (letter < tb2[compteur].length) {
        setTimeout(() => {
            text2()
            loop2()
            letter++
        }, 50);
    } else {
        setTimeout(() => {
            letter = 0
            compteur++
            loop2()
        }, 2800);
    }



}
loop2()
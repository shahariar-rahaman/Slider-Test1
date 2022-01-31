let slider = document.querySelectorAll(".slide")
let sliderArray = Array.from(slider)
let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")
let autoplay = document.querySelector(".autoplay")
let sliderBody = document.querySelector(".slider")
let note = document.querySelector(".note")
let prev
let next
let count = 0
let countNumber = 0
function prevnext() {
    let active = document.querySelector(".active")
    let activeIndex = sliderArray.indexOf(active)

    if (activeIndex == 0) {
        prev = sliderArray[sliderArray.length - 1]
    }
    else {
        prev = sliderArray[activeIndex - 1]
    }
    if (sliderArray.length - 1 == activeIndex) {
        next = sliderArray[0]

    }
    else {
        next = sliderArray[activeIndex + 1]
    }
    return [prev, next]
}
function transition() {
    let active = document.querySelector(".active")
    let activeIndex = sliderArray.indexOf(active)
    let [prev, next] = prevnext()
    sliderArray.map((items, index) => {
        if (activeIndex == index) {
            items.style.transform = "translateX(0)"
        }
        else if (items == prev) {
            items.style.transform = "translateX(-100%)"
        }
        else if (items == next) {
            items.style.transform = "translateX(100%)"
        }
        items.addEventListener("transitionend", function () {
            items.classList.remove("smooth")
        })
    })
}
prevbtn.addEventListener("click", function () {
    let active = document.querySelector(".active")
    let [prev, next] = prevnext()
    active.classList.add("smooth")
    prev.classList.add("smooth")
    active.classList.remove("active")
    active.style.transform = "translateX(100%)"
    prev.classList.add("active")
    prev.style.transform = "translateX(0)"
    transition()
})
nextbtn.addEventListener("click", function () {
    let active = document.querySelector(".active")
    let [prev, next] = prevnext()
    active.classList.add("smooth")
    next.classList.add("smooth")
    active.classList.remove("active")
    active.style.transform = "translateX(-100%)"
    next.classList.add("active")
    next.style.transform = "translateX(0)"
    transition()
})
sliderBody.addEventListener("click", function () {
    count++
    console.log(count)
    function nextauto() {
        if (count == 1) {
            let active = document.querySelector(".active")
            let [prev, next] = prevnext()
            active.classList.add("smooth")
            next.classList.add("smooth")
            active.classList.remove("active")
            active.style.transform = "translateX(-100%)"
            next.classList.add("active")
            next.style.transform = "translateX(0)"
            transition()
        }
        else {
            clearInterval(stop)
            count = 0
        }
    }
    let stop = setInterval(function () {
        nextauto()
    }, 2000)
})
function type() {
    note.innerHTML += note.dataset.text.charAt(countNumber)
    countNumber++
    if (countNumber == note.dataset.text.length) {
        clearInterval(stop)
    }
}
let stop = setInterval(function () {
    type()
}, 20)
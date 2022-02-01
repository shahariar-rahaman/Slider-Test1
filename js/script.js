let slider = document.querySelectorAll(".slide")
let sliderArray = Array.from(slider)
let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")
let sliderBody = document.querySelector(".sliderBody")
let prev
let next
let count = 0
let stop
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
function nextauto() {
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
stop = setInterval(function () {
    nextauto()
}, 2000)
sliderBody.addEventListener("mouseenter", function () {
    count++
    console.log(count)
    if(count==1){
        clearInterval(stop)
        count = 0
    }
    
})

sliderBody.addEventListener("mouseleave", function () {
    count++
    console.log(count)
    if(count==1){  
        stop = setInterval(function () {
            nextauto()
        }, 2000)
        count = 0
    }
})

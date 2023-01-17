//1
const block = document.querySelector(`.block`)
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX <= 440 && positionY <=0) {
        positionX+=14
        block.style.left = `${positionX}px`
        setTimeout(move, 10)
    }else if (positionX >= 440 && positionY <=440) {
        positionY+=14
        block.style.top = `${positionY}px`
        setTimeout(move, 10)
    }else if (positionY === 448 && positionX !== 0) {
        positionX-=14
        block.style.left = `${positionX}px`
        setTimeout(move, 10)
    }else {
        positionY-=14
        block.style.top = `${positionY}px`
        setTimeout(move, 10)
    }
}
move()

//2
const number = document.querySelector('.number')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

let numbers;
start.onclick = () => {
    let a = 0;
    numbers = setInterval(()=>{
        a++
        number.innerText = a
    },1000)
}
stop.onclick = () => clearInterval(numbers)


const result = document.getElementById("result")

const timeLeft = document.getElementById("time-left")

const boxes = document.querySelectorAll(".box")


function startGame() {
    let score = 0
    let currentTime = 5
    result.textContent = 0
    timeLeft.textContent =  5

    // console.log("score : ", score)
    // console.log("start Pressed")
    
    moveMole()

    function randomBox() {
    console.log("currentTime : ", currentTime)

        boxes.forEach( box => box.classList.remove("mole") )
        let randomPosition = boxes[Math.floor(Math.random() * 9)]
        randomPosition.classList.add("mole")
        hitPositon = randomPosition.id 

        
    }
    
    function countDown() {
        console.log(currentTime)
        timeLeft.textContent = currentTime
        currentTime--;
    }


    function clearTime() {
            timeLeft.textContent = currentTime
            console.log(currentTime)
            clearInterval(timerInterval)
            clearInterval(timerRandom)+
            console.timeEnd("End")
            alert("GAME OVER! Your score is " + result.textContent + " in 5 Seconds")
            boxes.forEach(e => { e.classList.remove("mole") })
            result.textContent = 0
            timeLeft.textContent =  5

    }
    
    
    
    function moveMole() {
        // randomBox()
        boxes.forEach(e => { e.classList.remove("mole") })

        timerRandom = setInterval(randomBox, 1000)
        timerInterval = setInterval(countDown, 1000)
        setTimeout(clearTime, 5500)
        console.time("End")
        console.log("Start")

        boxes.forEach(box => {
            box.addEventListener('click', (e) => {
                if(event.target.id === hitPositon) {
                    score++
                    console.log(score, "score")
                    result.textContent = score
                }
            })
        })
    }

}



    function resetAll() {
        console.log("reset Pressed")
        // startGame()
    }

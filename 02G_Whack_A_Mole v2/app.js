const value = document.getElementById("value")
// const start = document.getElementsByClassName("start")
// const reset = document.getElementsByClassName("reset")

const totalTime = Number([...document.getElementById("time-left").textContent].join(''))
console.log(totalTime)
const timeLeft = document.getElementById("time-left")

const boxes = document.querySelectorAll(".box")


function startGame() {
    console.log("start Pressed")

    moveMole()

        function randomBox() {

            score = Number(value.textContent)
            currentTime = Number(timeLeft.textContent)
            console.log(currentTime, "Time")
            boxes.forEach(e => {

                e.classList.remove("mole")
            })

            // console.log(Math.floor(Math.random() * 9))
            let randomPosition = boxes[Math.floor(Math.random() * 9)]
            // console.log(randomPosition, randomPosition.id)
            randomPosition.classList.add("mole")
            
            hitPositon = randomPosition.id 
            

        }

        boxes.forEach( b => {
            b.addEventListener('mouseup', () => {
                if(b.id === hitPositon) {
                    score++
                    value.textContent = score

                }
            })
        })



        function countDown() {
            currentTime--;
            timeLeft.textContent = currentTime
            if(currentTime === 0) {
                console.log("End")
                clearInterval(timer)
                clearInterval(timerId)
                alert("GAME OVER! Your score is " + value.textContent + " in " + totalTime +" Seconds")
                
                boxes.forEach(e => {

                    e.classList.remove("mole")
                })
                timeLeft.textContent = 5
                value.textContent = 0
                score = 0
            }
        }

    

        
        
        
        function moveMole() {
            timerId = setInterval(randomBox, 1000)
            timer = setInterval(countDown, 1000)
            console.log("Start")


        }


    }



    function resetAll() {
        console.log("reset Pressed")
        boxes.forEach(e => {

            e.classList.remove("mole")
        })
        timeLeft.textContent = 5
        value.textContent = 0
        score = 0
        startGame()
    }
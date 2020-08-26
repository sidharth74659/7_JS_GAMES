// Things we are going  to cover
//      •  push()
//      •  querySelector()
//      •  setAttribute()
//      •  getAttribute()
//      •  createElement()
//      •  appendChild()
//      •  Math.random()
//      •  sort()
//      •  For loops 
//      •  this
//      •  setTimeout()

document.addEventListener('DOMContentLoaded', () => {
  
   //card options
   const cardArray = [
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    }
   ] 

   cardArray.sort(
       () =>{ 0.5 - Math.random()  }
    )

   
   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   const h4 = document.querySelector('#h4')

   var cardsChosen =  []
   var cardsChosenId = []
   var cardsWon = []

   //create GameBoard   
   function createBoard() {
    //    for(i in cardArray) {
       for(let i = 0; i < cardArray.length; i++) {
           var card = document.createElement('img')
           card.setAttribute('src', 'img/black.png')
           card.setAttribute('data-id', i)
           card.addEventListener('click', filpCard)
           grid.appendChild(card)
           
        }
   }

    

   //flip your card
   function filpCard() {
    //    event.preventDefault()
    //    debugger
    //here 'this' object refers to 'card'
        var cardId = this.getAttribute('data-id')
        console.log(cardId.forEach(i => i))
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        // console.log(cardsChosen)
        // console.log(cardsChosenId)
        // console.log(this)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 100)
        }

   }

   //check for matches
   function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0] 
        const optionTwoId = cardsChosenId[1] 
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            console.log(cards[optionOneId])
            console.log(cards[optionTwoId])
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)    
            // console.log(cardsChosen)    
        } else {
            cards[optionOneId].setAttribute('src', 'img/black.png')
            cards[optionTwoId].setAttribute('src', 'img/black.png')
            alert('Sorry, Try Again ')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        console.log(cardsWon.length)
        if (cardsWon.length === cardArray.length/2) {
            h4.textContent = "Congratulations! You found them all"

        }
    }

   createBoard()
})
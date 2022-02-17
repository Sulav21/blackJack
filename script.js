let firstCard = randomCard()
let secondCard = randomCard()
let cardArray = [firstCard,secondCard]
let sum = cardArray[0]+ cardArray[1]
let hasBlackJack = false 
let isAlive = true
let message = ""
let messageEl= document.getElementById("message-el")
let cards = document.getElementById("cards")

let player = {
    name: "Per Game",
    chips: 100
}

let playerWinning = document.getElementById("price")
playerWinning.innerHTML = player.name+":"+" "+"$"+player.chips
let sumValue = document.getElementById("sum")

function randomCard(){
   let randomValue = Math.floor(Math.random()*11)+1
    if(randomValue===1){
        return 11
    }
   else if(randomValue>10){
return 10
   }
   else{
       return randomValue
   }
}
function startgame(){
    cards.innerHTML = "Cards: "
for(let i=0; i<cardArray.length;i++){
    cards.innerHTML+= cardArray[i] +" "
}



    sumValue.innerHTML = "Sum: "+sum

if(sum<21){
    message ="Do you want to pull out another card ?"
    isAlive = true
    hasBlackJack=false
   
}

else if(sum === 21){
    message ="YAAAAY! You have got blackjack🥳"
    hasBlackJack=true
    
    
}

else{
    message ="Sorry, you lost😥"
    isAlive=false
    hasBlackJack=false
  
}


messageEl.innerHTML =  message
 
}


function newcard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard =randomCard()
    sum += newCard 
    cardArray.push(newCard)
    startgame()
    }
}

let  numbers = [1,3,1,3,3,3,1]
let arrayOne= []
let arrayThree=[]

for(let i=0; i<numbers.length; i++ ){
    if(numbers[i]===1){
        arrayOne.push(numbers[i])
    }
    else{
        arrayThree.push(numbers[i])
    }
}
console.log(arrayOne)
console.log(arrayThree)
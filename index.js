
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl=document.getElementById("sum-el");
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let cards=[];
let player={
    name:"Guest Player",
    chips:300
}


let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ": ₹" + player.chips;

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1;

    if(Math.floor(randomNumber ===1)){
        return 11;
    }else if( randomNumber>10){
        return 10;
    }else{
        return randomNumber;
    }
}


function startGame(){
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function renderGame() {

    cardsEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+= " "+cards[i];
    }
    sumEl.textContent="Sum:"+sum;
    if (sum <= 20 && isAlive===true) {
        message = "Do you want to draw a new card?"
        isAlive==true
    } else if (sum === 21 && isAlive===true) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive==true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message;
}


function newCard(){
    if(!hasBlackJack && isAlive===true){
    let card=getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
}
}


let firstCard=4;
let secondCard=15;
let sumTwoCards= firstCard+secondCard;
let bJ=false;
let isAlive=true;
let message="";
let messageEl=document.getElementById("message-el");


function start(){
    if(sumTwoCards<=20){
        message ="Do you want to draw a new card";
        isAlive=true;
    }else if(sumTwoCards===21){
        message="Woohooo !!!";
        bJ=true;
    }else{
        message="You lost !!!";
        isAlive=false;
    }
    messageEl.textContent=message;
}

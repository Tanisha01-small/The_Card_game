
let firstCard=4;
let secondCard=17;
let sumTwoCards= firstCard+secondCard;
let bJ=false;
let isAlive=true;

if(sumTwoCards<=20){
    console.log("Do you want to draw a new card 🙂");
    isAlive=truel;
}else if(sumTwoCards===21){
    console.log("Woohooo !!! 🥳");
    bJ=true;
}else{
    console.log("You lost !!! 😭");
    isAlive=false;
}

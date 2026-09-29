const gameBoard = document.getElementById('game-board');
const dimension =150;
let firstCard=null;
let secondCard = null;
let lockBoard = false;//verouillage de porte 
let moves = 0;
let matchedCount=0;
const recommenncer=document.getElementById("retour");
var random  = Math.random();

var imgStart = Math.floor(random*100) +1;
console.log("le nombre  est : "+ imgStart);
const images =[];
for (let i =1;i<=8;i++){
    let img= `https://picsum.photos/seed/${imgStart+i}/${dimension}`;//crée 8 URL qui change  
    images.push(img);   
}
//console.log(images);
    let cards = [...images,...images];
    //console.log(cards.length);

    function shuffle(array ){
        for(let i =array.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [array[i],array[j]]=[array[j],array[i]];

            
        }
    }
   // console.log(`test ${dimension}`);
    function initGame(){
        shuffle(cards);
        cards.forEach(imgUrl => {
        const card=document.createElement('div');
        card.className='card';
        card.dataset.value=imgUrl;
        card.setAttribute('role','button');
        card.setAttribute('tabindex','0');
         card.addEventListener('click', () => handleCardClick(card));
        gameBoard.appendChild(card);
    });
}
function handleCardClick(card){
    if(lockBoard){
        return;
    }
    if(card===firstCard){
        return;
    }
    if(card.classList.contains('matched')){
        return;
    }
    const img = document.createElement('img');
    img.src =card.dataset.value;
    img.alt='Image du memory';
    card.appendChild(img);
    if(firstCard==null){
        firstCard=card
        return ;
    }
    else{
        secondCard=card
        lockBoard=true;
        moves++;
        checkMatch();
    }



 }
 function checkMatch(){
    if(firstCard.dataset.value=== secondCard.dataset.value){
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCount++;
        firstCard=null;
        secondCard=null;
        lockBoard=false;
        
    }
    else{
        setTimeout(() => {
            firstCard.innerHTML='';
            secondCard.innerHTML='';
            firstCard=null;
            secondCard=null;
            lockBoard=false;

        }, 800);
    }
 }
recommenncer.addEventListener('click',()=>{
    gameBoard.innerHTML='';
    moves=0
    matchedCount=0
    initGame();

});
initGame();
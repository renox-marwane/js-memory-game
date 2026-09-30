const gameBoard = document.getElementById('game-board');
const dimension =150;
let firstCard=null;
let secondCard = null;
let lockBoard = false;//verouillage de porte 
let moves = 0;
let matchedCount=0;
let seconde=0;
let timerInterval=null;
const timerDisplay = document.getElementById('temps');
const recommencer=document.getElementById("retour");
const resultat = document.getElementById("result");
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
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        gameBoard.innerHTML='';
        moves=0
        matchedCount=0
        seconde=0;
        timerDisplay.textContent=formatTime(0);
        resultat.textContent='';
        clearInterval(timerInterval)

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
    startTimer();
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
        checkVictory();
        
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
recommencer.addEventListener('click',()=>{
   initGame();
});
function formatTime(sec){
    let mm = 0
    mm=Math.floor(sec/60);
    let ss= sec%60
    return String(mm).padStart(2,'0')  + ':'+ String(ss).padStart(2,'0')
}
function startTimer(){
    timerInterval=setInterval(()=>{
        seconde++;
        timerDisplay.textContent=formatTime(seconde);
    },1000);
}
function checkVictory(){
    if(matchedCount=== cards.length/2){
        clearInterval(timerInterval);
        resultat.textContent='Gagné en ' + moves + ' coup !';
    }


}


initGame();

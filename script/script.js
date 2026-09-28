const gameBoard = document.getElementById('game-board');
const dimension =150;
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
        gameBoard.appendChild(card);
    });
}
initGame();
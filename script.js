var timer = 60;
var score = 0;
var hitrn = 0;

// jisper click karoge wo particular element par event raise hoga, our event listener na milne par event element ke parent par listener dhundheda, wha bhi naa milne par event parent ke parent par listener dhundhega. 

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
var clutter = "";

for (var i=1; i<=160; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1`;
        }        
    }, 1000);
} 

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent)); //details.target.textContent ye string hai iske captital Number() ke sath small bracket lga do to wo no. ban jayega. 
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
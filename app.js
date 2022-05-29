// const body = document.querySelector("body");
// function randColor(){
//     const randomNum1 = Math.floor((Math.random()*255)+1);
//     const randomNum2 = Math.floor((Math.random()*255)+1);
//     const randomNum3 = Math.floor((Math.random()*255)+1);
//     return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
// }
// setInterval(() => {
//     body.style.background =  `linear-gradient(to right,${randColor()} ,${randColor()})`;
// }, 3000);
let scoreCap = document.querySelector(".currentScoreCap");
let scoreLogan = document.querySelector(".currentScoreLogan");
let reset = document.querySelector("#board__btn");
let isGameOver = false;
let currentScoreCap = 0;
let currentScoreLogan = 0;
let winningPoint;

scoreCap.addEventListener(
    'click',function(){
    winningPoint = parseInt(document.querySelector("#pointCount").value);
    if(!isGameOver){
        if(currentScoreCap!==winningPoint){
            currentScoreCap++;
            scoreCap.innerText = currentScoreCap;
        }
        if(currentScoreCap === winningPoint) {
            isGameOver = true;
            scoreCap.style.color = "green";
            scoreLogan.style.color = "red";
        }
        
    }
    
});
scoreLogan.addEventListener(
    'click',function(){
    winningPoint = parseInt(document.querySelector("#pointCount").value);
    if(!isGameOver){
        if(currentScoreLogan!==winningPoint){
            currentScoreLogan++;
            scoreLogan.innerText = currentScoreLogan;
        }
        if(currentScoreLogan===winningPoint){
            isGameOver = true;
            scoreLogan.style.color = "green";
            scoreCap.style.color = "red";
        }
        
    }
});

reset.addEventListener(
    'click', function(){
        isGameOver= false;
        currentScoreCap = 0;
        currentScoreLogan = 0;
        scoreCap.innerText = 0;
        scoreLogan.innerText = 0;
        scoreLogan.style.color = "black";
        scoreCap.style.color = "black";
        document.querySelector("#pointCount").value = "6"
    }
);
let gameSeq= [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
document.addEventListener("keypress",function(){
    if(started == false){
        
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function levelUp(){
    userSeq = [];
    level++;
    
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}
function checkAns(indx){

    if(userSeq[indx] == gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over! Your score is <b>${level}</b> <br>Press any key to start.<br> <i>Your highest score ${maxScore(level)}</i>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
        
    }

}
function btnPress(){
   let btn = this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);



}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

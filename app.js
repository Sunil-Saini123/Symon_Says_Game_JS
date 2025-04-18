let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","blue"]

let start=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",()=>{
    if(start==false){
        console.log("game started");    
        start=true;

        levelUp();
    }
})

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx]; 
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove('userflash');
    },250);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over. Your Score was <b>${level}</b> Press any key to restart`
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },200)
        reset();
    }
}

function reset(){
    level=0;
    start=false;
    gameSeq=[];
    userSeq=[];
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

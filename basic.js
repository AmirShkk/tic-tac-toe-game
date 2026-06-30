let person0=true;
let draw=document.querySelector(".draw");
let winner=document.querySelector(".container");
let wintext=document.querySelector("#winner");
let drawtext=document.querySelector("#draw");
let btns=document.querySelectorAll(".button")
let count=document.querySelector(".countdown p")
let countdown=document.querySelector(".countdown");
let table=document.querySelectorAll(".table");
window.addEventListener("load",timer);
let winningpattern=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,4,2],
  [6,3,0],
  [6,7,8],
  [7,4,1],
  [8,5,2],
  [8,4,0]];
let boxes=document.querySelectorAll(".horizontal");
boxes.forEach((horizontal)=>{
    horizontal.addEventListener("click",()=>{
        if(person0){
          horizontal.innerText="X";
          person0=false;
        }
    else{
        horizontal.innerText="0";
        person0=true;
    }
  horizontal.style.pointerEvents="none";
  winning();
  });
 });
 const disable=()=>{
  for(let box of boxes){
    box.style.pointerEvents="none";
  }
 }
  const enable=()=>{
  for(let box of boxes){
    box.style.pointerEvents="auto";
    box.innerText="";
    }
 }
 const winning=()=>{
   let winnerfound=false;
  for(let pattern of winningpattern){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""&&pos2!="" &&pos3!=""){
      if(pos1==pos2&&pos2==pos3){
        table.forEach((tab)=>{
          tab.style.display="none";
        })
       winner.classList.remove("hide");
        wintext.innerText=`Winner is ${pos1}`;
      disable();
      winnerfound=true;
      break;
      }}}
      let count=0
      for(box of boxes){
        if(box.innerText!=""){
          count++;
        }
        }
      if(count==9&&!winnerfound){
        winner.classList.remove("hide");
        wintext.innerText=`Match Drawn`;
        disable();
      }
        };
const resetGame=()=>{
  person0=true;
  winner.classList.add("hide");
  countdown.classList.remove("hide");
  table.forEach((tab)=>{
          tab.style.display="block";
        })

}
function timer(){
disable();
const countdown=(sec,getnextcountdown)=>{
  setTimeout(()=>{
    count.innerText=sec;
  if(getnextcountdown){
    getnextcountdown();
  }
},1000);
}
countdown(3,()=>{
   countdown(2,()=>{
    countdown(1,()=>{
     countdown("START!",()=>{
      countdown("",()=>{
           enable();
     })
     });
    });
   })
})

}
btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    resetGame()
    timer();
    enable();
  })
})




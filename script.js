let music=new Audio("music.mp3");
let step=new Audio("ting.mp3");

let turn="X"
let gameover=new Audio("gameover.mp3");
let isgameover=false;
// change the turn 
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
// check the winner
const checkWin=()=>{
  let turn=document.getElementsByClassName("item");
      let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
   win.forEach(element=>{
    if((turn[element[0]].innerText===turn[element[1]].innerText)&&(turn[element[2]].innerText===turn[element[1]].innerText)&&(turn[element[0]].innerText!=="")){
      document.querySelector(".turn").innerText=turn[element[0]].innerText+" won";
      isgameover=true;
      gameover.play()
      music.pause();
      alert(turn[element[0]].innerText+" won please reset the game to play again")
    }
   
   })
}

// game logic
let box=document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let item=element.querySelector('.item')
      element.addEventListener('click',()=>{
        music.play();
        if(item.innerText===''){
          item.innerText=turn;
          turn=changeTurn();
          step.play();
          checkWin();
          if(!isgameover){
            document.getElementsByClassName("turn")[0].innerText="turn for "+turn
          }
          
          
        }
      })

})

// reset the value
let reset=document.getElementById("reset");
reset.addEventListener('click',()=>{
    let container=document.querySelectorAll(".item");
    Array.from(container).forEach(element=>{
        element.innerText='';
        isgameover=false;
    })
    let string=document.getElementsByClassName("turn")[0];
    string.innerText="";
    music.pause();

})

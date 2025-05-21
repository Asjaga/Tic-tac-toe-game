let boxes = document.querySelectorAll(".btn");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".finalbtn"); 
let count = 0;
let turnO=true;

for(box of boxes){
    box.disabled = true;
}

let disableBox= () =>{
    for(box of boxes){
        box.disabled = true;
    }
    
}
let enableBox= () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let checkwinner = ()=>{
   for(pattern of winpattern){
    let pos1text = boxes[pattern[0]].innerText; 
    let pos2text = boxes[pattern[1]].innerText; 
    let pos3text = boxes[pattern[2]].innerText; 
    if (pos1text != "" && pos2text != "" && pos3text != "" )
        if(pos1text === pos2text && pos2text === pos3text){
            msg.innerText = `Winner is ${pos1text}`;
            disableBox();
            newgame.innerText = "New Game";
            return true;
        }
   }
}

let gamedraw = () =>{
    msg.innerText = "Game was Draw";
    newgame.innerText = "New Game";
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turnO){
            box.innerText = "X"; 
            turnO=false;
        }
        else{
            box.innerHTML = "O";
            turnO = true;
        }
        box.disabled =true; 
        count++;
        let isWinner = checkwinner();

        if(count === 9 && !isWinner){
            gamedraw();
        }


    })
 
});

newgame.addEventListener("click", ()=>{
    enableBox();
    msg.innerText = "New Game";
    newgame.innerText = "Reset Game";
    count = 0;
});



















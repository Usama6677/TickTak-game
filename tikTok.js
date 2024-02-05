let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById(".reset");

let turnO = true; // playerX, PlayerY

// 2 DAY ARRAY 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was Clicked");
        // box.innerText= "HI " ;
        if(turnO) {
            box.innerText = "0";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner ();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern [0],pattern[1],pattern[2]);
       
          let pos1Val = boxes[pattern[0]].innerText
          let pos2Val = boxes[pattern[1]].innerText
          let pos3Val = boxes[pattern[2]].innerText

          if( pos1Val !="" && pos2Val != "" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val); {
            console.log("winner");
          }
        }
    }
};
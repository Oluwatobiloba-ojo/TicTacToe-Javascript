buttonCont = document.querySelector(".button_Div");
let gameTurn = 0;

buttonCont.addEventListener("click", (e) => {
    if(e.target.id == "input" && e.target.value === "" && gameTurn === 0){
        e.target.value = "X";
        gameTurn = 1;
    if(checkWinner("X") === true){
        let inputs = buttonCont.querySelectorAll("input");
        Array.from(inputs).forEach(element => {
            element.value = "";
        })
    }
    }else if(e.target.id == "input" && e.target.value === "" && gameTurn === 1){
        e.target.value = "O"
        gameTurn = 0;
        (checkWinner("O") === true) ? alert("Player O win"):
    (alert("Game continue"));
    }else{
        alert("Space is already filled");
    }
})


const checkWinner = (symbol)=>{
    if(rowWinner(symbol)) return true;
    else if(columnWinner(symbol)) return true;
    else if(rightDiagonalWinner(symbol)) return true;
    else if(leftDiagonalWinner(symbol)) return true;
    else return false;
}

function rowWinner(symbol){
    if(firstRow(symbol)) return true;
    else if(secondRow(symbol)) return true;
    else if(thirdRow(symbol)) return true;
    else return false;
}

function firstRow(symbol){
    const box = getBox();
    return box[0].value === symbol && box[1].value === symbol && box[2].value === symbol;
}

function secondRow(symbol){
    const box = getBox();
    return box[3].value === symbol && box[4].value === symbol && box[5].value === symbol;
}

function thirdRow(symbol){
    const box = getBox();
    return box[6].value === symbol && box[7].value === symbol && box[8].value === symbol;
}

function columnWinner(symbol){
    if(firstColumn(symbol)) return true;
    else if(secondColumn(symbol)) return true;
    else if(thirdColumn(symbol)) return true;
    else return false;
}

function firstColumn(symbol){
    const box = getBox();
    return box[0].value === symbol && box[3].value === symbol && box[6].value === symbol;
}

function secondColumn(symbol){
    const box = getBox();
    return box[1].value === symbol && box[4].value === symbol && box[7].value === symbol;
}

function thirdColumn(symbol){
    const box = getBox();
    return box[2].value === symbol && box[5].value === symbol && box[8].value === symbol;
}

function rightDiagonalWinner(symbol){
    const box = getBox();
    return box[0].value === symbol && box[4].value === symbol && box[8].value === symbol;
}

function leftDiagonalWinner(symbol){
    const box = getBox();
    return box[2].value === symbol && box[4].value === symbol && box[6].value === symbol;
}


function getBox(){
    const box = [
        {value : buttonCont.querySelectorAll("input")[0].value},
        {value : buttonCont.querySelectorAll("input")[1].value},
        {value : buttonCont.querySelectorAll("input")[2].value},
        {value : buttonCont.querySelectorAll("input")[3].value},
        {value : buttonCont.querySelectorAll("input")[4].value},
        {value : buttonCont.querySelectorAll("input")[5].value},
        {value : buttonCont.querySelectorAll("input")[6].value},
        {value : buttonCont.querySelectorAll("input")[7].value},
        {value : buttonCont.querySelectorAll("input")[8].value},
    ];
    return box;
}
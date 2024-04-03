class Player  {

    constructor(name, symbol){
        this.name = name;
        this.symbol = symbol;
    }
    
    getName(){
        return this.name;
    }

    getSymbol(){
        return this.symbol;
    }

    setName(name){
        this.name = name;
    }

    setSymbol(symbol){
        this.symbol = symbol;
    }

}
let player = new Player();
let secondPlayer = new Player();

function setFirstPlayerName(){
    let firstinput = document.getElementsByTagName("input")[0];
    player.setName(firstinput.value);
    player.setSymbol("X");
    console.log(player);
}

function setSecondPlayerName(){
    let secondinput = document.getElementsByTagName("input")[1];
    secondPlayer.setName(secondinput.value);
    secondPlayer.setSymbol("0");
    console.log(secondPlayer);
}

function getPLayers(){
    return {player, secondPlayer}
}


module.exports = {getPLayers}

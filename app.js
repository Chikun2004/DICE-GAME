function diceGame(){
    //Two Random Numbers
    let randomNum1 = Math.floor((Math.random()*6)+1);
    let randomNum2 = Math.floor(Math.random()*6)+1;
    
console.log('randomNum1',randomNum1)
    //Adding random number for different images
    let randomDice1 = `./images/dice${randomNum1}.png`
    let randomDice2 = `./images/dice${randomNum2}.png`
    // let randomDice3 = `./images/dice3${randomNum2}.png`
    // let randomDice4 = `./images/dice4${randomNum2}.png`
    // let randomDice5 = `./images/dice5${randomNum2}.png`
    // let randomDice6 = `./images/dice6${randomNum2}.png`

    //Target player 1 and 2 dice
    let diceImage1 = document.getElementById("p1");
    let diceImage2 = document.getElementById("p2");

    //Changing different dice using random dice images
    diceImage1.setAttribute("src", randomDice1)
    diceImage2.setAttribute("src", randomDice2)

    //displsy result
    let result = document.getElementById("result")
    let p1_box = document.querySelector(".player-1")
    let p2_box = document.querySelector(".player-2")

    if (randomNum1>randomNum2){
        result.innerHTML = "player 1 Winner !"
        result.style.color = "#05bfdb"
        p1_box.style.borderColor = "#05bfdb"
        p2_box.style.borderColor = "#2c2c2c"
    
    } else if (randomNum1===randomNum2){
        result.innerHTML = "Draw !"
        result.style.color = "yellowgreen"
        p1_box.style.borderColor = "yellowgreen"
        p2_box.style.borderColor = "yellowgreen"
    
    } else {
        result.innerHTML = "player 2 Winner !"
        result.style.color = "darkorange"
        p2_box.style.borderColor = "darkorange"
        p1_box.style.borderColor = "#2c2c2c"
    }
}
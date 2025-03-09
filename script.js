const choices = document.querySelectorAll('.img')
const message = document.querySelector('#message')
const userEl = document.querySelector('#user');
const computerEl = document.querySelector('#computer');

let userScore = 0;
let compScore = 0;


const genComChoice = () => {
    let option = ["rock", "paper", "scissors"];
    let randIndx = Math.floor(Math.random() * 3);
    return option[randIndx];
}

const showWiner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userEl.innerText = userScore

        message.innerText = `you win ${userChoice} beats ${compChoice}`
        message.style.backgroundColor = "green"

    } else {
        compScore++;
        computerEl.innerText = compScore;

        message.innerText = `you lost ${compChoice} beats your ${userChoice}`
        message.style.backgroundColor = " red"
    }
}

const drowGame = () => {

    message.innerText = ` Game Was Drow`
    message.style.backgroundColor = " black"

}
const playGame = (userChoice) => {


    // genrate computer choice 
    const compChoice = genComChoice();


    if (userChoice === compChoice) {
        drowGame()
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;

        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {
            userWin = compChoice === 'rock' ? false : true
        }
        showWiner(userWin, userChoice, compChoice)
    }


}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')


        playGame(userChoice)
    })

})
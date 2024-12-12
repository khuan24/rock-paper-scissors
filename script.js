let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button")

const gamePrompt = document.querySelector(".prompt")
const humanScoreboard = document.querySelector(".human-score")
const computerScoreboard = document.querySelector(".computer-score")
const humanChoice = document.querySelector(".human-choice")
const computerChoice = document.querySelector(".computer-choice")

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const choices = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * choices.length)

    return choices[random]
}

function getHumanChoice() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.textContent.toLowerCase(), getComputerChoice())
        })
    })
 }

 function playRound(playerSelection, computerSelection) {
    // upates prompt that declares the winner of the round
    // console.log("playing the game...")

    let outcome = ''

    if (computerSelection == 'Rock') {
        outcome = fightRock(playerSelection)
    } else if (computerSelection == 'Scissors') {
        outcome = fightScissor(playerSelection)
    } else if (computerSelection == 'Paper') {
        outcome = fightPaper(playerSelection)
    }

    let message = 'You ' + outcome + '! '
    
    if (outcome == 'win') {
        message += playerSelection + ' beats ' + computerSelection
        humanScore += 1
    } else if (outcome == 'lose') {
        message += computerSelection + ' beats ' + playerSelection
        computerScore += 1
    } else if (outcome == 'tie') {
        message += playerSelection + ' is the same as ' + computerSelection
    } else {
        message += 'Something is causing an error.'
    }

    gamePrompt.textContent = message
    humanChoice.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)
    computerChoice.textContent = computerSelection
    humanScoreboard.textContent = humanScore
    computerScoreboard.textContent = computerScore

    if (humanScore == 5 || computerScore == 5) {
        stopGame()
    }
}

function fightRock(playerSelection) {
    if (playerSelection == 'rock') {
        return 'tie'
    } else if (playerSelection == 'scissors') {
        return 'lose'
    } else if (playerSelection == 'paper') {
        return 'win'
    } else {
        return 'inserted invalid input'
    }
}

function fightScissor(playerSelection) {
    if (playerSelection == 'rock') {
        return 'win'
    } else if (playerSelection == 'scissors') {
        return 'tie'
    } else if (playerSelection == 'paper') {
        return 'lose'
    } else {
        return 'inserted invalid input'
    }
}

function fightPaper(playerSelection) {
    if (playerSelection == 'rock') {
        return 'lose'
    } else if (playerSelection == 'scissors') {
        return 'win'
    } else if (playerSelection == 'paper') {
        return 'tie'
    } else {
        return 'inserted invalid input'
    }
}

function stopGame() {
    let finalOutcome = ""

    if (humanScore>computerScore) {
        finalOutcome = "You're the winner!"
    } else {
        finalOutcome = "You lost. Restart the game to try again!"
    }
    
    gamePrompt.textContent = finalOutcome
    
    buttons.forEach((button) => {
        button.style.display = "none"
    })

    const replayBtn = document.createElement("button")
    replayBtn.textContent = "REPLAY"
    container = document.querySelector(".choice-container")
    container.appendChild(replayBtn)

    replayBtn.addEventListener("click", () => {
        replayBtn.style.display = "none"
        restartGame()
    })
}

function restartGame() {
    humanScore = 0
    computerScore = 0
    
    humanScoreboard.textContent = humanScore
    computerScoreboard.textContent = computerScore

    humanChoice.textContent = ""
    computerChoice.textContent = ""

    buttons.forEach((button) => {
        button.style.display = "block"
    })

    gamePrompt.textContent = "Waiting for your choice..."
    gamePrompt.style.animationPlayState = "running"
}

getHumanChoice()
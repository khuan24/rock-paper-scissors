function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const choices = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random() * choices.length)

    return choices[random]
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

function playRound(playerSelection, computerSelection) {
    // return a string that declares the winner of the round
    // console.log("playing the game...")

    // may need to check for null inputs before conversion
    const player = playerSelection.toLowerCase()
    const computer = computerSelection.toLowerCase()

    let outcome = ''

    if (computer == 'rock') {
        outcome = fightRock(player)
    } else if (computer == 'scissors') {
        outcome = fightScissor(player)
    } else if (computer == 'paper') {
        outcome = fightPaper(player)
    }

    let message = 'You ' + outcome + '! '
    
    if (outcome == 'win') {
        message += playerSelection + ' beats ' + computerSelection
        score += 1
    } else if (outcome == 'lose') {
        message += computerSelection + ' beats ' + playerSelection
    } else if (outcome == 'tie') {
        message += playerSelection + ' is the same as ' + computerSelection
    } else {
        message += 'Something is causing an error.'
    }

    return message
}

let score = 0

function game() {
    // player 5 rounds
    for (let i=0; i<5; i++) {
        // get player choice
        const playerSelection = prompt('What would you like to play?')
        // get computer choice
        const computerSelection = getComputerChoice()
        
        // output the result
        console.log(playRound(playerSelection, computerSelection))
        console.log("The score is " + score)
    }

}

game()
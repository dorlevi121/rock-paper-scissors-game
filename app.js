let userScore = 0;
let compuerScore = 0;

const userScore_span = document.getElementById("user-score");
const compuerScore_span = document.getElementById("computer-score");

const scoreBoard_dev = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convert(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    return "Scissors"
}


function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compuerScore_span.innerHTML = compuerScore;
    result_div.innerHTML = `${convert(user)} beats ${convert(comp)}. You win!`;
    document.getElementById(user).classList.add('.green-glow');
    setTimeout(function () {
        document.getElementById(user).classList
        .remove('.green-glow')
    }, 2000);
}

function lose(user, comp) {
    compuerScore++;
    userScore_span.innerHTML = userScore;
    compuerScore_span.innerHTML = compuerScore;
    result_div.innerHTML = `${convert(comp)} beats ${convert(user)}. You lose!`;
}

function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    compuerScore_span.innerHTML = compuerScore;
    result_div.innerHTML = `${convert(comp)} equals ${convert(user)}. It's a draw`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();


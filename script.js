const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');

        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.moves-left');
                moves++;
                movesLeft.innerText = `MOVES LEFT : ${10-moves}`;

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText,computerChoice)
                
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
    }

    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'COMPUTER WON';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }

            else if(computer == 'scissors'){
                result.textContent = 'PLAYER WON';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }

            else if(computer == 'rock'){
                result.textContent = 'TIE';
            }
        }

        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'COMPUTER WON';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }

            else if(computer == 'paper'){
                result.textContent = 'PLAYER WON';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }

            else if(computer == 'scissors'){
                result.textContent = 'TIE';
            }
        }

        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'COMPUTER WON';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }

            else if(computer == 'rock'){
                result.textContent = 'PLAYER WON';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }

            else if(computer == 'paper'){
                result.textContent = 'TIE';
            }
        }
    }

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseMove.innerText = 'GAME OVER!!!'
        movesLeft.style.display = 'none'

        if(playerScore == computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'TIE';
            result.style.color = 'yellow'; 
        }

        else if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'YOU WON';
            result.style.color = 'green';
        }

        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'COMPUTER WON';
            result.style.color = 'red';
        }

        reloadBtn.innerText = 'RESTART';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame();
}

game();
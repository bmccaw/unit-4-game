$(document).ready(function () {

    let targetNum = '';
    let crystalA = '';
    let crystalB = '';
    let crystalC = '';
    let crystalD = '';

    //Counters
    let wins = 0;
    let losses = 0;
    let playerScore = 0;

    function reset() { //RESET

        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min; //generates random numbers for the target and crystals
        }
        targetNum = randomNum(19, 120);
        crystalA = randomNum(1, 12);
        crystalB = randomNum(1, 12);
        crystalC = randomNum(1, 12);
        crystalD = randomNum(1, 12);

        //player score set to 0 before each game.
        playerScore = 0;
        console.log('RESET');

        test = false;
        startGame();
    }
    startGame();
    function startGame() {
        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min; //generates random numbers for the target and crystals
        }
        targetNum = randomNum(19, 120);
        crystalA = randomNum(1, 12);
        crystalB = randomNum(1, 12);
        crystalC = randomNum(1, 12);
        crystalD = randomNum(1, 12);

        //player score set to 0 before each game.
        playerScore = 0;

        console.log(targetNum);
        console.log(crystalA);
        console.log(crystalB);
        console.log(crystalC);
        console.log(crystalD);

        $('#target').html(targetNum);
        $('#score').html('Your score: ' + playerScore);
        $('#wins').html(wins);
        $('#losses').html(losses);
    }
    //Win/Lose conditions.
    function winLose() {
        if (playerScore === targetNum) {
            wins++;
            reset();
        }
        else if (playerScore > targetNum) {
            losses++;
            reset();
        }
    }
    //Assign buttons their crystal value and have it display as the player score on click. Additive with each button click.

    $('#crystalone').click(function () {
        playerScore = playerScore + crystalA;
        $('#score').html('Your score: ' + playerScore);
        winLose();
    });
    $('#crystaltwo').click(function () {
        playerScore = playerScore + crystalB;
        $('#score').html('Your score: ' + playerScore);
        winLose();
    });
    $('#crystalthree').click(function () {
        playerScore = playerScore + crystalC;
        $('#score').html('Your score: ' + playerScore);
        winLose();
    });
    $('#crystalfour').click(function () {
        playerScore = playerScore + crystalD;
        $('#score').html('Your score: ' + playerScore);
        winLose();
    });


});

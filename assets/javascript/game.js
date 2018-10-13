//Modal opens on page load. User needs to click to continue, which enables playing of sound files.
$(window).ready (function () {
        $('#myModal').modal ('show')
});
$(document).ready(function () {

    let targetNum = '';
    let crystalA = '';
    let crystalB = '';
    let crystalC = '';
    let crystalD = '';

    //Counters
    let winsCounter = 0;
    let lossesCounter = 0;
    let playerScore = 0;

    function reset() { //RESET

        //generates random numbers from the designated ranges for the target and crystals
        function randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        targetNum = randomNum(19, 120);
        crystalA = randomNum(1, 12);
        crystalB = randomNum(1, 12);
        crystalC = randomNum(1, 12);
        crystalD = randomNum(1, 12);

        //player score set back to 0 before each game.
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
        $('#wins').html(winsCounter);
        $('#losses').html(lossesCounter);

    //plays music when user clicks anywhere in the <body>
    $('body').click(function() {
        $('audio').get(4).play();
        $('#music').prop('volume', 0.5);
    });
    //plays thunderstorm sound file on click in the <body>
    $('body').click(function() {
        $('audio').get(5).play();
        $('#thunder').prop('volume', 0.25);
    });
    //Sounds trigger on mouse over. Seems to only work after clicking somewhere on page. Also not consistent, probably due to file lengths. 
    $('#crystalone').mouseenter(function() {
        $('audio').get(0).play();
    });
    $('#crystaltwo').mouseenter(function() {
        $('audio').get(1).play();
    });
    $('#crystalthree').mouseenter(function() {
        $('audio').get(2).play();
    });
    $('#crystalfour').mouseenter(function() {
        $('audio').get(3).play();
    });
    }
    //Win/Lose conditions.
    function winLose() {
        if (playerScore === targetNum) {
            winsCounter++;
            $(window).ready (function () {
                $('#winModal').modal ('show')
                $('audio').get(6).play();
                $('.shake').effect('shake', {times: 5}, 2000);
                //Fade out all elements and then fade into new background image on click.
                setTimeout(function () {
                $('.content').fadeOut();
                $('#winModal').appendTo('body');},3000);
                $('#grove').click(function() {
                    $('.content').switchClass('content', 'grove');
                    $('img, .container').hide();
                    $('div').removeClass('rain');
                    $('div').removeClass('shake');
                    $('.grove').fadeIn();
                    setTimeout(function () {
                        $('#playAgainModal').modal('show');},10000);
                });
        });            
            reset();
        }
        else if (playerScore > targetNum) {
            lossesCounter++;
            $(window).ready (function () {
                $('#lossModal').modal ('show')
        });
            reset();
        }
    }
    $('#playAgain').click(function() {
        $('.grove').fadeOut();
        $('.grove').switchClass('grove', 'content');
        $('img, .container').show();
        $('#rain').addClass('rain');
        $('#shake').addClass('shake');
        $('.content').fadeIn();
        $('.content').show();
    });
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

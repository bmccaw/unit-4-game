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
                    document.getElementById("music").muted = true;
                    document.getElementById("thunder").muted = true;
                    document.getElementById("grovemusic").muted = false;
                    document.getElementById("grovesound").muted = false;
                    $('audio').get(7).play();
                    $('audio').get(8).play();
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
        document.getElementById("grovemusic").muted = true;
        document.getElementById("grovesound").muted = true;
        document.getElementById("music").muted = false;
        document.getElementById("thunder").muted = false;
        $('.grove').fadeIn();
        $('.content').fadeIn();
    });
``
    //DEBUGGING -- comment out before submitting
    // $('#debug').click(function() {
    //     $('#winModal').modal ('show')
    //             $('audio').get(6).play();
    //             $('.shake').effect('shake', {times: 5}, 2000);
    //             //Fade out all elements and then fade into new background image on click.
    //             setTimeout(function () {
    //             $('.content').fadeOut();
    //             $('#winModal').appendTo('body');},3000);
    //             $('#grove').click(function() {
    //                 $('.content').switchClass('content', 'grove');
    //                 $('img, .container').hide();
    //                 $('div').removeClass('rain');
    //                 $('div').removeClass('shake');
    //                 $('.grove').fadeIn();
    //                 document.getElementById("music").muted = true;
    //                 document.getElementById("thunder").muted = true;
    //                 $('audio').get(7).play();
    //                 $('audio').get(8).play();
    //                 setTimeout(function () {
    //                     $('#playAgainModal').modal('show');},10000);
    //             });
    //         });

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
    //Fireflies
//     'use strict';

// var canvas = document.createElement('canvas');
// var ctx = canvas.getContext('2d');

// var MAX_FLIES = 15;
// var FLY_XSPEED_RANGE = [-1, 1];
// var FLY_YSPEED_RANGE = [-0.5, 0.5];
// var FLY_SIZE_RANGE = [1, 5];
// var FLY_LIFESPAN_RANGE = [75, 150];

// var flies = [];

// function randomRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function Fly(options) {
//   if (!options) { options = {}; }

//   this.x = options.x || randomRange(0, canvas.width);
//   this.y = options.y || randomRange(0, canvas.height);
//   this.xSpeed = options.xSpeed || randomRange(FLY_XSPEED_RANGE[0], FLY_XSPEED_RANGE[1]);
//   this.ySpeed = options.ySpeed || randomRange(FLY_YSPEED_RANGE[0], FLY_YSPEED_RANGE[1]);
//   this.size = options.size || randomRange(FLY_SIZE_RANGE[0], FLY_SIZE_RANGE[1]);
//   this.lifeSpan = options.lifeSpan || randomRange(FLY_LIFESPAN_RANGE[0], FLY_LIFESPAN_RANGE[1]);
//   this.age = 0;

//   this.colors = options.colors || {
//     red: 207,
//     green: 255,
//     blue: 4,
//     alpha: 0
//   };
// }

// function fitToScreen(element) {
//   element.width = window.innerWidth;
//   element.height = window.innerHeight;
// }

// function clearScreen() {
//   ctx.beginPath();
//   ctx.fillStyle = 'rgb(0, 0, 0)';
//   ctx.rect(0, 0, canvas.width, canvas.height);
//   ctx.fill();
// }

// function createFlies() {
//   if (flies.length !== MAX_FLIES) {
//     flies.push(new Fly());
//   }
// }

// function moveFlies() {
//   flies.forEach(function(fly) {
//     fly.x += fly.xSpeed;
//     fly.y += fly.ySpeed;
//     fly.age++;

//     if (fly.age < fly.lifeSpan / 2) {
//       fly.colors.alpha += 1 / (fly.lifeSpan / 2);

//       if (fly.colors.alpha > 1) { fly.colors.alpha = 1; }
//     } else {
//       fly.colors.alpha -= 1 / (fly.lifeSpan / 2);

//       if (fly.colors.alpha < 0) { fly.colors.alpha = 0; }
//     }
//   });
// }

// function removeFlies() {
//   var i = flies.length;

//   while (i--) {
//     var fly = flies[i];

//     if (fly.age >= fly.lifeSpan) {
//       flies.splice(i, 1);
//     }
//   }
// }

// function drawFlies() {
//   flies.forEach(function(fly) {
//     ctx.beginPath();
//     ctx.fillStyle = 'rgba(' + fly.colors.red + ', ' + fly.colors.green + ', ' + fly.colors.blue + ', ' + fly.colors.alpha + ')';
//     ctx.arc(
//       fly.x,
//       fly.y,
//       fly.size,
//       0,
//       Math.PI * 2,
//       false
//     );
//     ctx.fill();
//   });
// }

// function render() {
//   clearScreen();
//   createFlies();
//   moveFlies();
//   removeFlies();
//   drawFlies();
// }

// window.addEventListener('resize', function() {
//   fitToScreen(canvas);
// });

// document.querySelector('body').appendChild(canvas);
// fitToScreen(canvas);

// (function animationLoop() {
//   window.requestAnimationFrame(animationLoop);
//   render();
// })();
});

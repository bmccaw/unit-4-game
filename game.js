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
                        $('#playAgainModal').modal('show');},15000);
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
//     var w = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     width = w.innerWidth || e.clientWidth || g.clientWidth,
//     height = w.innerHeight|| e.clientHeight|| g.clientHeight;

// var setup = {
//   xs: {dim: 5, weight: 41},
//   s: {dim: 10, weight: 26},
//   m: {dim: 50, weight: 16},
//   l: {dim: 100, weight: 11},
//   xl: {dim: 250, weight: 6},
// };

// var numOfLights = 100;

// function randomInt(max){
//   return randomIntFromInterval(1, max);
// }

// function randomIntFromInterval(min,max){
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// function randomColorRGB(){
//   return {
//     r: randomInt(225),
//     g: randomInt(225),
//     b: randomInt(225)
//   }
// }

// function randomSize(){
//   var sizes = ['xs', 's', 'm', 'l', 'xl'];

//   var rand = randomInt(100);
//   var weightSum = 0;

//   for (var i = 0; i < sizes.length; i++){
//     var size = sizes[i];
//     weightSum += setup[size].weight;

//     if (rand <= weightSum){
//       return size;
//     }
//   }
// }

// function Light(options) {
//   this.size = options.size || randomSize(); // s: small, m: medium, l: large
//   this.color = options.color || randomColor(); // object representing rgb values
// }

// Light.prototype.draw = function(container){
//   var x = randomInt(width);
//   var y = randomInt(height);
//   var largerDim = width > height ? width : height;

//   var lightWrapper = document.createElement('div');
//   lightWrapper.setAttribute('class', 'lightWrapper');
//   lightWrapper.style.left = randomInt(width) + 'px';
//   lightWrapper.style.top = randomInt(height) + 'px';
//   lightWrapper.style.height = lightWrapper.style.width = randomInt(largerDim) + 'px';
//   var rotation = randomInt(360);
//   rotation *= randomInt(2) == 1 ? 1 : -1;
//   lightWrapper.style.transform = 'rotate(' + rotation + 'deg)';

//   var lightElement = document.createElement('div');
//   lightElement.setAttribute('class', 'light');
//   var rgbaString = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',1)';
//   lightElement.style.background = 'radial-gradient(ellipse closest-side, ' + rgbaString + ' 0%,' + rgbaString + ' ' + randomIntFromInterval(10, 75) + '%, transparent 100%)';
//   lightElement.style.height = lightElement.style.width = setup[this.size].dim + 'px';
//   lightElement.style.webkitAnimationDuration = randomIntFromInterval(100, 300) + 's';

//   lightWrapper.appendChild(lightElement);
//   container.appendChild(lightWrapper);
// }

// function LightFactory() {}
// LightFactory.prototype.createLight = function () {
//   return new Light({
//     size: randomSize(),
//     color: randomColorRGB()
//   });
// }

// $('#grove').click(function() {
//   var lightFactory = new LightFactory();
//   var lightsContainer = document.getElementById('lights');

//   for(i = 0; i < numOfLights; i++){
//     var light = lightFactory.createLight();
//     light.draw(lightsContainer);
//   }
// });
    //End Fireflies

});

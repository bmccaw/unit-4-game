# unit-4-game
The Sacred Grove (my take on a Crystal Collector game)

Click on the crystals in order to reach the target number. If you reach the number without going over, you win. Otherwise, you lose.

Currently Working
==============================
- random number chosen on game start
- crystals assigned random values on game start
- clicking on a crystal will add its value to the player's score
- wins increases by one when player score matches the target number
- losses increases by one when the player score goes over the target number
- random number values for target score and crystals reset on win/loss

Current Bugs
=============================
- ~~screen goes to black when after pressing 'Yes' in Play Again modall. seems to be an issue with a div being assigned display none. not sure how that is happening.~~ Fixed.
- ~~cannot get audio to stop upon transition~~ Fixed. Sort of. Muting sound instead of pausing it.

Added features
=============================
- modal on page load. user must click to close it and thus enable autoplay of sounds
- modal on win/loss scenarios. win modal includes sound and shake effect
- on win, screen transitions to new background image
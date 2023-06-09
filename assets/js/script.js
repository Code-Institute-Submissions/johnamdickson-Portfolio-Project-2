// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// code below for JSHint to silence warnings for ESversion 6.
/*jshint esversion: 6 */ 

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
      button.addEventListener("mousedown", function(){
        this.style.boxShadow = "inset 3px 3px 3px 0 rgba(255,255,255,0.7), inset -3px -3px 3px 0 rgba(255,255,255,0.5)";
        this.style.color = "rgba(186, 221, 233, 0.9)";
      });
// How to return styling to CSS: https://stackoverflow.com/questions/3506050/how-to-reset-the-style-properties-to-their-css-defaults-in-javascript
        button.addEventListener("mouseup", function(){
            this.style.boxShadow = "";
            this.style.color = "";
        });
    }
// set up properties that will interact with or contain buttons
    let blurredDiv = document.getElementById('blurred-div');
    let instructions = document.getElementById('instructions');
 // set up buttons
    let howToPlayStartButton = buttons[0];
    howToPlayStartButton.addEventListener("click", function(){
        // ensure blurred div and instructions are hidden/set to none display
        blurredDiv.style.visibility = 'hidden';
        instructions.style.display = 'none';
        // In all start game buttons the button is disabled for 1 second to prevent 
        // multiple animals appearing on cards. 
        howToPlayStartButton.disabled = true;
        setTimeout(function(){
            howToPlayStartButton.disabled = false;
        }, 1000);
        window.location.reload();
    });
    let goBackButton = buttons[1];
    goBackButton.addEventListener("click", function(){
        blurredDiv.style.visibility = 'hidden';
        instructions.style.display = 'none';
    });
    let newGameButton = buttons[2];
    newGameButton.addEventListener("click", function(){
        blurredDiv.style.visibility = 'hidden';
        instructions.style.display = 'none';
        newGameButton.disabled = true;
        setTimeout(function(){
            newGameButton.disabled = false;
        }, 1000);
        window.location.reload();
    });
    let gameStartButton = buttons[3];
    gameStartButton.addEventListener("click", function(){
        gameStartButton.disabled = true;
        setTimeout(function(){
            gameStartButton.disabled = false;
        }, 1000);
        window.location.reload();
    });
    let howToPlayButton = buttons[4];
    howToPlayButton.addEventListener("click", function(){
        // make blurred div visible and instructions display to block when button pressed
      blurredDiv.style.visibility = 'visible';
      instructions.style.display = 'block';
  });
  //  solution to handling media queries in JS found here: 
  //  https://css-tricks.com/working-with-javascript-media-queries/
  let twelveHundredPixQuery = window.matchMedia('(max-width: 1200px)');
  twelveHundredPixQuery.addEventListener("change", handleTwelveHundredChange);
  function handleTwelveHundredChange(event) {
    let gameStatus = document.getElementById('game-status-div');
    /* The code below checks if the gameStatus exists before adding to the DOM
     NOTE: the code below added in early iteration of the project where
     the start game button commenced a new game and the div appeared thereafter.
     Due to bug identified in README, the start game was revised to a window reload so this code
     was essentially redundant and could be recreated in HTML/CSS. However I opted to leave in to demonstrate
     this aspect of JS coding from a project perspective.
    */
    if (gameStatus !== null) {
        if (event.matches) {
            gameStatus.innerHTML = 
            `
            <p>Player <span id="player-number-span">1</span> turn.</p>
            `;
        } else {
            gameStatus.innerHTML = 
            `
            <p>Player<br><span id="player-number-span">1</span><br>turn.</p>
             `;
        }
    }
} setUpGame();
    });

/**
 * Function to set up game when the window loads or new game buttons are pressed.
 */
    function setUpGame() {
        // hide game outcome star if already in place.
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.style.display = 'none';
        let cards = document.getElementsByClassName("card");
        for (let card of cards) {
        /*
        pictureShowing variable to detect if the picture side is showing and then the if loop 
        detects any cards that do not have the "none" property for transform. On that basis, 
        the cards are then flipped back around to the starting position.
        */
          let pictureShowing = getComputedStyle(card).transform;
          if (pictureShowing != "none") {
            card.className = "card";
           }
      }
        removeOldImages();
        let playerInfoArea = document.getElementById("player-info-area");
        let gameStatusCheck = document.getElementById("game-status-div");
        let scoresArea = document.getElementById("scores-area");
        //  check if the game status div has been added. If not, add this div above player scores.
        setTimeout(function(){
            if (gameStatusCheck === null) {
                let windowWidth = window.innerWidth;
                let gameStatus = document.createElement('div');
                gameStatus.className = "game-control-divs";
                gameStatus.id = "game-status-div";
                let gameStatusInnerHTML;
         //   check window width to style game status div appropriately.
                if (windowWidth <= 1200) {
                    gameStatusInnerHTML = 
                     `
                     <p>Player <span id="player-number-span">1</span> turn.</p>
                     `;
                } else {
                    gameStatusInnerHTML =
                     `
                     <p>Player<br><span id="player-number-span">1</span><br>turn.</p>
                    `;
                }
                gameStatus.innerHTML = gameStatusInnerHTML ;
                /* solution to adding the game status div before the scores area div found here: 
                 https://stackoverflow.com/questions/2007357/how-to-set-dom-element-as-first-child
                 */
                playerInfoArea.insertBefore(gameStatus, playerInfoArea.firstChild);
                /* solution to animating in the game status div: 
                 https://stackoverflow.com/questions/14300210/animation-with-node-appendchild-html
                 */
                // animate in player information and scores areas.
                 document.getElementById('player-number-span').innerText = '1';
                gameStatus.animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
                ], {
                // timing options
                    duration: 1000,
                });
                scoresArea.style.visibility = 'visible';
                scoresArea.animate([
                    // keyframes
                    { opacity: '0' },
                    { opacity: '1' }
                    ], {
                    // timing options
                        duration: 1000,
                    });
            }
         }, 1000); 
        // reset scores on start of new game.
        document.getElementById('player-one-score').innerText = "0";
        document.getElementById('player-two-score').innerText = "0";
        /*
        Function below ensures that the animal images are not visible on card turn
        when new game is started from Start New Game Button click. 
        Solution found here: https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript
        */
        setTimeout(function(){
            addAnimalImages();
            playGame(1);
         }, 1000); 
    }

/**
 * Helper function that can be called to return the number of cards with pictures visible.
 */
    function cardsPicturesVisibleCalculator() {
        let cardsReverse = 0;
        let cardsPicture = 0;
        let cards = document.getElementsByClassName("card");
        for (let card of cards) {
            let visibility = getComputedStyle(card).transform;
            if (visibility === "none") {
                cardsReverse += 1;
            } else {
                cardsPicture += 1;
            }
        }
        return cardsPicture;
    }
/**
 * playGame function takes in the player number, counts the number of cards turned and stores the card elements
 *  in an array to be passed on to the checkForMatch function.
 */

    function playGame(playerNumber) {
        let numberOfCardsTurned = 0;
        let cardsTurned = [];
        let cardsTurnedInfo = [];
        let cards = document.getElementsByClassName("card");
         for (let card of cards){
            if (card.className === "card") {
                card.addEventListener("click", flipCard);
                card.addEventListener("click", count);
            }
        }
        function flipCard() {
            this.classList = "card flip";
        }
        function count() { 
            // obtain alt text from images using query selector and add to cardsTurned array.
            cardsTurned.push(this);
            let image = this.querySelector('.animal-image').alt;
            cardsTurnedInfo.push(image);
            // remove event listener once card selected so that it is not counted twice.
            this.removeEventListener('click', count);
            numberOfCardsTurned ++;
            if (numberOfCardsTurned === 2) {
                for (let card of cards){
                // remove this event listener to ensure no more cards can be flipped prior to checking for a match.
                    card.removeEventListener("click", flipCard);
                }
                checkForMatch(playerNumber, cardsTurned, cardsTurnedInfo);
            }
        }
    }
    /**
 * Helper function to remove old images from previous game and maintain readability of setUpGame function.
 */
    function removeOldImages () {
        let pictureCards = document.getElementsByClassName("card-front");
        for (let pictureCard of pictureCards){
            // Used query selector to check if card-front div contains anything of class animal image before removing. Solution found at link below.
            // https://bobbyhadz.com/blog/javascript-check-if-element-has-child-with-id#:~:text=Use%20the%20querySelector()%20method,null%20if%20no%20element%20matches.
            if (pictureCard.querySelector('.animal-image') !== null){
                let oldImages = document.getElementsByClassName("animal-image");
                for (let oldImage of oldImages){
                    oldImage.remove();
                }
            }
        }
    } 
      /**
   * addAnimalImages function creates an array of animal images and applies a shuffle function.
   * before adding random images to each card-front div.
 */
    function addAnimalImages() {
        let monkey = {image: "assets/images/monkey.png", alt: "Cartoon image of a monkey"};
        let elephant = {image: "assets/images/elephant.png", alt: "Cartoon image of an elephant"};
        let tiger = {image: "assets/images/tiger.png", alt: "Cartoon image of a tiger"};
        let lion = {image: "assets/images/lion.png", alt: "Cartoon image of a lion"};
        let panda = {image: "assets/images/panda.png", alt: "Cartoon image of a panda"};
        let zebra = {image: "assets/images/zebra.png", alt: "Cartoon image of a zebra"};
        let giraffe = {image: "assets/images/giraffe.png", alt: "Cartoon image of a giraffe"};
        let turtle = {image: "assets/images/turtle.png", alt: "Cartoon image of a turtle"};
        let animalCards = [monkey, monkey, elephant, elephant,tiger, tiger, lion, lion, panda, panda, zebra, zebra, giraffe, giraffe, turtle, turtle];
        let shuffledAnimalCards = shuffle(animalCards);
        let i = 0;
        let pictureCards = document.getElementsByClassName("card-front");
        for (let pictureCard of pictureCards){
            let picture = document.createElement('img');
            picture.className = "animal-image";
            picture.style.zIndex = '3';
            picture.src = shuffledAnimalCards[i].image;
            picture.alt = shuffledAnimalCards[i].alt;
            pictureCard.appendChild(picture);
            i++;
        }
    }
  /**
   * shuffle function to randomise order of game cards.
 */
    // Solution for this function found in stack overflow.
    // https://bost.ocks.org/mike/shuffle/  
   
    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
 /**
   * function with three parameters. First playerNumber to keep track of 
   * game and correctly increment score. Cards turned parameter is the element
   * for each card selected so that they can be turned back on unssuccessful match.
   * The third and last parameter is the cardsTurnedInfo which is taken from the alt
   * text property and used to compare for equality.
 */
    function checkForMatch(playerNumber, cardsTurned, cardsTurnedInfo) {
        let playerOneScore = parseInt(document.getElementById('player-one-score').innerText);
        let playerTwoScore = parseInt(document.getElementById('player-two-score').innerText);
        let playerStatus = document.getElementById('player-number-span');
        switch(playerNumber) {
            // first switch player number cases.
            case 1:
                // check for match. If true, increment score and then call the feedback match function
                if (cardsTurnedInfo[0] === cardsTurnedInfo[1]){
                    document.getElementById('player-one-score').innerText = ++ playerOneScore;
                    setTimeout(function(){
                        feedbackMatch(cardsTurnedInfo[0], 1);
                    }, 1000);
                }
                else {
                    // if false, flip cards back over.
                    setTimeout(function(){
                        for (let card of cardsTurned) {
                        card.className = "card";
                        }
                    }, 2000); 
                    // switch turns to player 2 and update the player status
                    setTimeout(function(){
                        //  Turn cards back around if they do not match. Time delay to stop this happening straight away.
                        playGame(2);
                        playerStatus.innerHTML = "2";
                    }, 2250); }
                break;
            case 2: 
                if (cardsTurnedInfo[0] === cardsTurnedInfo[1]){
                    document.getElementById('player-two-score').innerText = ++ playerTwoScore;
                    setTimeout(function(){
                        feedbackMatch(cardsTurnedInfo[0], 2);
                    }, 1000);
                }
                else {
                    setTimeout(function(){
                            for (let card of cardsTurned) {
                            card.className = "card";
                            }
                        }, 2000); 
                    setTimeout(function(){
                        playGame(1);
                        playerStatus.innerHTML = "1";
                    }, 2250); }
                break;
            default:
                console.log("Error, check for match switch had no player cases");
        }
        return;
    }
  /**
   * function to present a feedback star and message when a match is made. Function takes in two
   * parameters card information to describe the matched animals and the player number.
 */
    function feedbackMatch(info, player) {
        let cardsVisible = cardsPicturesVisibleCalculator();
        let playerOneScore = parseInt(document.getElementById('player-one-score').innerText);
        let playerTwoScore = parseInt(document.getElementById('player-two-score').innerText);
    //    check how many cards are flipped over. If 16 then game is over so calculate winner function is called.
        if (cardsVisible === 16) {
            calculateWinner(playerOneScore, playerTwoScore);
          } 
        else {
            // call feedback star to let user no they had a successful match
            let feedbackDiv = document.getElementById("feedback-div");
            feedbackDiv.style.visibility = 'visible';
            let star = document.getElementById("feedback");
            star.style.display = 'block';
            // solution to getting last word from string from here that can be added to feedback message:
            // https://bobbyhadz.com/blog/javascript-get-last-word-of-string
            let animal = info.split(' ').pop();
            let animalSpan = document.getElementById("animal-name");
            animalSpan.innerHTML = animal;
            // properties for animating out the star feedback block using tutorial below:
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
            // animateOut to bring the star towards user, creating an intersting effect.
            let animateOut = [
            { transform: "rotate(0) scale(1.5)", opacity: "0.95"},
            { transform: "rotate(270deg) scale(100)", opacity: "0" },
            ];
            let animateOutTiming = {
                duration: 750,
                iterations: 1
            };
            setTimeout(function(){
                star.animate(animateOut, animateOutTiming);
            },3000);
            setTimeout(function(){ 
                star.style.display = 'none';
                feedbackDiv.style.visibility = 'hidden';
            }, 3750);
            playGame(player);
        }
    }
  /**
   * function to calculate the winner by comparing the two parameters and then feedback the game 
   * outcome to the users with an approriate message. After a time delay, the text changes to prompt
   * initation of a new game along with the appropriate button to do so.
 */
    function calculateWinner(playerOneScore, playerTwoScore) {
        // make blurred div and game outcome star visible/block.
        let blurredDiv = document.getElementById('blurred-div');
        blurredDiv.style.visibility = 'visible';
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.style.display = 'block';
        let gameOutcomeMessage = document.getElementById('outcome-message');
        let newGameButton = document.getElementById('new-game-button');
        // check scores and feedback appropriate message on outcome star <p>
        if (playerOneScore === playerTwoScore) {
            gameOutcomeMessage.innerText = "That was close, its a draw!";
        } 
        else if (playerOneScore > playerTwoScore) {
            gameOutcomeMessage.innerText = "Congrats Player 1, you win!";
      } 
      else {
            gameOutcomeMessage.innerText = "Congrats Player 2, you win!";
      }
    //   after a timeout, change message to prompt for new game and newGameButton style to block.
      setTimeout(function(){ 
        gameOutcomeMessage.style.top = "42%";
        gameOutcomeMessage.style.fontSize = "1.5rem";
        gameOutcomeMessage.innerText = "Click below to begin a new game";
        newGameButton.style.display = "block";
      }, 3500);
    }
const audio = new Audio();
let gamePlay = false ;
const screen = document.getElementById('art-board')

function keyButtonPress(event) {
    if(gamePlay == false) return ;
    // pressed key
    const playerPressed = event.key;
    console.log(playerPressed);

    //  target key
    const targetAlphabet = document.getElementById('Letter')
    const targetLetter = targetAlphabet.innerText;

    // check the key 
    if (targetLetter === playerPressed) {
        console.log('correct');
        // using function
        const currentScore = getTxtValue('score')
        const Score = currentScore + 1;
        setValue('score', Score)
        /**
         * Manually
         
        // update score
        // 1. get current score
        const Element = document.getElementById('score');
        const currentScoreText = Element.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2.increment 
        const score = currentScore + 1;
        // 3.update score
        Element.innerText = score;
*/
        // start a new round
        removeHiLight(targetLetter);
        continueGame()
    }
    else {
        console.log('wrong');

        // audio
        audio.src = "../audio/negative_beeps.mp3";
        audio.play();
        
      
        // using function
        const currentLife = getTxtValue('life')
        const Life = currentLife - 1;
        setValue('life', Life);

        const updateLifePercentage = (currentLife/6)*100;
          // background change 
          screen.style.background =`linear-gradient(#FFFFFFB3 ${updateLifePercentage}%,red)`;

        /**manually  
        // update score
        // 1. get current score
        const Element = document.getElementById('life');
        const currentLifeText = Element.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2.decrement 
        const Life = currentLife - 1;
        // 3.update score
        Element.innerText = Life;
        */
        // end game
        if (Life === 0 || playerPressed === 'Escape') {
            removeHiLight(targetLetter);
            gameover();
        };

    };
}
//capture keyboard keypress
document.addEventListener('keyup', keyButtonPress);

function continueGame() {
    // get letter
    const letter = getLetter();
    // letter exchange
    const ID = document.getElementById('Letter')
    ID.innerText = letter;
    // hi-light the letter
    AddHiLight(letter);
}

function play() {
    console.log('play');
    gamePlay = true ;

    // remove  screens

    removeElement('screen-sec');
    removeElement('score-Board');
    // add play ground section
    addElement('playground');

    // reset value
    setValue('score', 0);
    setValue('life', 3)
    // letter related 
    continueGame();
};
function gameover() {
    removeElement('playground');
    addElement('score-Board');
    gamePlay = false ;
    screen.style.background =`linear-gradient(#FFFFFFB3 100%,red)`;

    // update score
    const lastScore = getTxtValue('score');
    setValue('last-score', lastScore);

};
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
    // remove  screen
    removeElement('screen-sec');
    // add play ground section
    addElement('playground');

    // letter related 
    continueGame();
};
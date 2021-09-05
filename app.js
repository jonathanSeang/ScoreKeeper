const score = document.querySelector("#score");
const p1ScoreSpan = document.querySelector("#p1Score");
const p2ScoreSpan = document.querySelector("#p2Score");
const scoreLimit = document.querySelector('#scoreLimit');
const p1AddBtn = document.querySelector('#p1');
const p2AddBtn = document.querySelector('#p2');
const resetBtn = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;

p1AddBtn.addEventListener('click', () => {
    p1ScoreSpan.innerHTML = (`${++p1Score}`);
    checkForWinner();
});

p2AddBtn.addEventListener('click', () => {
    p2ScoreSpan.innerHTML = (`${++p2Score}`);
    checkForWinner();
})

resetBtn.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    p1ScoreSpan.innerHTML = (`${p1Score}`);
    p2ScoreSpan.innerHTML = (`${p2Score}`);
    disableButtons(false);
});

function checkForWinner() {

    if(p1Score >= scoreLimit.value) {
        alert('P1 Wins');
        p1ScoreSpan.style.color = rgb(0, 0, 0);
        disableButtons(true);
    }

    else if(p2Score >= scoreLimit.value) {
        alert('P2 Wins');
        disableButtons(true);
    }

}

function disableButtons(enabled) {
    p1AddBtn.disabled = enabled;
    p2AddBtn.disabled = enabled;
}


let userScore = 0;
let compScore = 0;

const boxes = document.querySelectorAll('.box');

const msg = document.querySelector('.msg');

const userScorepara = document.querySelector('.user-score');

const compScorepara = document.querySelector('.comp-score');

const newgamebtn = document.querySelector('.newgamebtn');

const resetbtn = document.querySelector('.resetbtn');

let randomNumber = Math.floor(Math.random() * 9 + 1);

const NewGame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.style.backgroundColor = '';
        msg.innerText = 'Play Your Move';
        userScorepara.innerText = '0';
        // compScorepara.innerText = '0';
        userScore = 0;
        generateRandomNumber();
    }
};
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.style.backgroundColor = '';
    }
    msg.innerText = 'Play Your Move';
    msg.style.backgroundColor = '';
};

const generateRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 9 + 1);
    return randomNumber;
};

document.querySelectorAll('.box').forEach((box, index) => {
    box.addEventListener('click', () => {
        const guessedNumber = index + 1;
        if (guessedNumber === randomNumber) {
            userScore = userScore + 9;
            userScorepara.innerText = userScore;
            box.style.backgroundColor = 'green';
            msg.innerText = ` You Guess Correct ! ${guessedNumber} Comp Number is = ${randomNumber}`;
            msg.style.backgroundColor = 'green';
            disableboxes();
            randomNumber = generateRandomNumber();
        } else {
            // guessedNumber != randomNumber;
            // let user_idea = guessedNumber - randomNumber;
            // userScore = userScore + user_idea;
            let user_idea = guessedNumber - randomNumber;
            userScore = userScore + user_idea;
            userScorepara.innerText = userScore;
            disableboxes();
            box.style.backgroundColor = 'red';
            msg.style.backgroundColor = 'red';
            msg.innerText = ` You Guess Worng ! ${guessedNumber}  Comp Number is = ${randomNumber}`;
            randomNumber = generateRandomNumber();
        }
        console.log('===> randomNumber', randomNumber);
    });
});
newgamebtn.addEventListener('click', NewGame);
resetbtn.addEventListener('click', enableBoxes);

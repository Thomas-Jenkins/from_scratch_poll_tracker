// Import Functions
import { renderPoll } from './render-poll.js';
// elements in the current poll div
const questionDisplayEl = document.getElementById('current-question');


// elements in the poll input div
const votesOneTallyUp = document.getElementById('answer-one-tally-up');
const votesTwoTallyUp = document.getElementById('answer-two-tally-up');
const votesOneTallyDown = document.getElementById('answer-one-tally-down');
const votesTwoTallyDown = document.getElementById('answer-two-tally-down');

// elements in the poll input div
const questionInput = document.getElementById('enter-question');
const answerOneInput = document.getElementById('answer-one-input');
const answerTwoInput = document.getElementById('answer-two-input');
  // submit button Element
const submitPollButtonEl = document.getElementById('submit-poll'); 
const archiveEl = document.getElementById('archive');
const archivePoll = document.getElementById('archive-button');

// let state
let questionContent = '';
let answerOneContent = '';
let answerTwoContent = '';
let answerOne = 0;
let answerTwo = 0;

const pastPolls = [];

submitPollButtonEl.addEventListener('click', () => {
    questionContent = questionInput.value;
    answerOneContent = answerOneInput.value;
    answerTwoContent = answerTwoInput.value;

    questionInput.value = '';
    answerOneInput.value = '';
    answerTwoInput.value = '';
    
    displayCurrentPoll();    
});
votesOneTallyUp.addEventListener('click', () => {
    answerOne++;
    displayCurrentPoll();
});
votesOneTallyDown.addEventListener('click', () => {
    answerOne--;
    displayCurrentPoll();
});
votesTwoTallyUp.addEventListener('click', () => {
    answerTwo++;
    displayCurrentPoll();
});
votesTwoTallyDown.addEventListener('click', () => {
    answerTwo--;
    displayCurrentPoll();
});


function displayCurrentPoll() {
    questionDisplayEl.textContent = '';
    


    const pollEl = renderPoll(questionContent, answerOneContent, answerTwoContent, answerOne, answerTwo);

    questionInput.value = '';
    answerOneInput.value = '';
    answerTwoInput.value = '';
    
    questionDisplayEl.append(pollEl);
}

// function clearCurrentQuestion() {
//     questionContent = '';
//     answerOneContent = '';
//     answerTwoContent = '';
//     answerOne = 0;
//     answerTwo = 0;
// }

archivePoll.addEventListener('click', () => {
  
    let activePoll = {
        questionContent: questionContent,
        answerOneContent: answerOneContent,
        answerTwoContent: answerTwoContent,
        answerOne: answerOne,
        answerTwo: answerTwo
    };

    

    pastPolls.push(activePoll);
    

    questionContent = '';
    answerOneContent = '';
    answerTwoContent = '';
    answerOne = '';
    answerTwo = '';

    displayAllPolls();


    displayCurrentPoll();
});

function displayAllPolls() {
    archiveEl.textContent = '';
    for (let poll of pastPolls) {
        const pollArchive = renderPoll(poll.questionContent, poll.answerOneContent, poll.answerTwoContent, poll.answerOne, poll.answerTwo);
        archiveEl.append(pollArchive);
        pollArchive.classList.add('archive-box');

         // currentPoll.classList.add('box-sub');
    // answersEl.classList.add('');
    }
}
    


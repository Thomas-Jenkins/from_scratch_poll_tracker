export function renderPoll(question, answerOne, answerTwo, votesOne, votesTwo){
    const currentPoll = document.createElement('div');
    const currentQuestion = document.createElement('h3');
    const answersEl = document.createElement('div');
    const answerOneEl = document.createElement('p');
    const answerTwoEl = document.createElement('p');

    

    currentQuestion.textContent = question;
    answerOneEl.textContent = `${answerOne} ${votesOne}`;
    answerTwoEl.textContent = `${answerTwo} ${votesTwo}`;
    
    currentPoll.append(currentQuestion, answersEl);
    answersEl.append(answerOneEl, answerTwoEl);

    return currentPoll;
}





// let questionContent = '';
// let answerOneContent = '';
// let answerTwoContent = '';
// let answerOne = 0;
// let answerTwo = 0;
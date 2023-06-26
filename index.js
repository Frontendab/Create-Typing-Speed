const words = ["Front-end developer" 
, "HTML" 
, "CSS" 
, "JavaScript" 
, "Web development" 
, "User interface" 
, "User experience" 
, "Responsive design" 
, "Frameworks" 
, "Bootstrap" 
, "jQuery" 
, "Angular" 
, "React" 
, "Vue.js" 
, "DOM manipulation" 
, "Cross-browser compatibility" 
, "Mobile-first design" 
, "Accessibility" 
, "Performance optimization" 
, "Debugging" 
, "Version control" 
, "Git" 
, "Command line" 
, "APIs" 
, "AJAX" 
, "Front-end frameworks" 
, "Code refactoring" 
, "Browser testing" 
, "Front-end architecture"
,"User experience (UX)"];
let divTheWords = document.querySelector('.theWords');
let spanTimeLeft = document.querySelector('.span-time-left');
let wordLengthForLevels = document.querySelector('.span-length-theWords');
let levelEasy = document.querySelector('.easy');
let levelNormal = document.querySelector('.normal');
let levelHard = document.querySelector('.hard');
let score = document.querySelector('.span-score');
let pranteBtn = document.querySelector('.pranteBtn');
let btnStart = document.querySelector('.game .divSecondePrante .pranteBtn .button-start');
let spanWord = '';
let timer = '';
let inputType = document.querySelector('.game input');
let messageLevel = document.querySelector('.lvl');
let secondeLevel = document.querySelector('.seconde-level');
let random = '';
let control = document.querySelector('.control');
let boxs = document.querySelector('.boxs');

levelEasy.onclick = () => {
    document.getElementById('starMusic').pause();
    score.innerHTML = 0;
    inputType.value = '';
    messageLevel.textContent = levelEasy.innerHTML;
    divTheWords.innerHTML = '';
    for(let i =0; i < words.length / 3; i++){
        let span = document.createElement('span');
        textSpan = document.createTextNode(words[i].toLocaleLowerCase());
        span.className = 'span-theWord';
        span.appendChild(textSpan);
        divTheWords.appendChild(span);
    }
    
    let secondeEasy = 25;

    spanTimeLeft.textContent = secondeEasy;

    secondeLevel.textContent = secondeEasy;

    wordLengthForLevels.textContent = Math.round(words.length / 3);
    levelEasy.classList.add('click');
    levelNormal.classList.remove('click');
    levelHard.classList.remove('click');
    showMainWord();
    clearInterval(timer);
    mainFun(wordLengthForLevels);
};
levelNormal.onclick = () => {
    document.getElementById('starMusic').pause();
    score.innerHTML = 0;
    messageLevel.textContent = levelNormal.innerHTML;
    inputType.value = '';
    divTheWords.innerHTML = '';
    for(let i =0; i < words.length / 2; i++){
        let span = document.createElement('span');
        let textSpan = document.createTextNode(words[i].toLocaleLowerCase());
        span.className = 'span-theWord';
        span.appendChild(textSpan);
        divTheWords.appendChild(span);
    }    
    let secondeNormal = 20;
    secondeLevel.textContent = secondeNormal;
    spanTimeLeft.textContent = secondeNormal;
    wordLengthForLevels.textContent = Math.round(words.length / 2);
    levelNormal.classList.add('click');
    levelEasy.classList.remove('click');
    levelHard.classList.remove('click');
    showMainWord();
    clearInterval(timer);
    mainFun(wordLengthForLevels);
};
levelNormal.click();
levelHard.onclick = () => {
    document.getElementById('starMusic').pause();
    inputType.value = '';
    score.innerHTML = 0;
    messageLevel.textContent = levelHard.innerHTML;
    divTheWords.innerHTML = '';
    for(let i =0; i < words.length; i++){
        let span = document.createElement('span');
       let textSpan = document.createTextNode(words[i].toLocaleLowerCase());
        span.className = 'span-theWord';
        span.appendChild(textSpan);
        divTheWords.appendChild(span);
    }
    let secondeHard = words.length;
    secondeLevel.textContent = secondeHard;
    spanTimeLeft.textContent = secondeHard;
    wordLengthForLevels.textContent = words.length;
    levelHard.classList.add('click');
    levelNormal.classList.remove('click');
    levelEasy.classList.remove('click');
    showMainWord();
    clearInterval(timer);
    mainFun(wordLengthForLevels);
};
spanWord = document.createElement('span');
function showMainWord(){
    pranteBtn.appendChild(btnStart); 
    spanWord.innerHTML = '';
    btnStart.onclick = () => {
        btnStart.remove();
        inputType.focus();
       random = words[Math.floor(Math.random() * parseInt(wordLengthForLevels.innerHTML))];
        let textSpan = document.createTextNode(random);
        spanWord.className = 'span-word';
        spanWord.appendChild(textSpan);
        pranteBtn.appendChild(spanWord);
        timer = setInterval(() =>{
        if (spanTimeLeft.textContent > 0) {
            spanTimeLeft.textContent--;
        }else{
            clearInterval(timer);
            endTime();
        }
    },1000);
    };
};

function mainFun(wordLengthForLevels) {
  
    let spansDivTheWords = document.querySelectorAll('.span-theWord');
    let arraySpansDivTheWords = Array.from(spansDivTheWords);
    btnStart.addEventListener('click', () => {
        document.getElementById('starMusic').play();
        inputType.onkeyup = () =>{
        arraySpansDivTheWords.forEach((span,index) => {
                if(inputType.value.toLocaleLowerCase() === span.innerHTML){
                score.innerHTML++;
                arraySpansDivTheWords.splice(index, 1);
                spanWord.innerHTML = '';
                divTheWords.innerHTML = '';
              if (arraySpansDivTheWords.length > 0) {
                let random = arraySpansDivTheWords[Math.floor(Math.random() * arraySpansDivTheWords.length)];
                let randomWord = random.innerHTML;
                let textSpan = document.createTextNode(randomWord);
                spanWord.className = 'span-word';
                spanWord.appendChild(textSpan);
                pranteBtn.appendChild(spanWord);
                for(let i =0; i < arraySpansDivTheWords.length; i++){
                    inputType.value ='';
                    let span = document.createElement('span');
                    textSpan = document.createTextNode(arraySpansDivTheWords[i].innerHTML.toLocaleLowerCase());
                    span.className = 'span-theWord';
                    span.appendChild(textSpan);
                    divTheWords.appendChild(span);
                }
            }else{
                pranteBtn.remove();
                inputType.remove();
                divTheWords.remove();
                document.querySelector('.control').remove();
                document.querySelector('.boxs').remove();
                
                let divGood = document.createElement('div');
         
                divGood.className = 'end-game-good';
         
                let divDivGood = document.createElement('div');

                divDivGood.className = 'youAreWinner';
         
                let textdivDivGood = document.createTextNode(' YOU ARE WINNNER');

                let spanRestart = document.createElement('span');

                spanRestart.setAttribute('class', 'restart-game');

                let textDivRestart = document.createTextNode('Restart Game');
  
                spanRestart.appendChild(textDivRestart);
                
                divDivGood.appendChild(textdivDivGood);

                divGood.appendChild(divDivGood);
                
                divGood.appendChild(spanRestart);
         
                document.querySelector('.divSecondePrante').appendChild(divGood);

                let divScoreGood = document.createElement('div'); 
         
                divScoreGood.className = 'div-score';
         
                let spanScoreGood = document.createElement('span');
         
                spanScoreGood.className = 'span-score-good';
         
                spanScoreGood.innerHTML = `YOU CORE IS : <span class="scoreEnd-Num">${score.innerHTML} OF ${wordLengthForLevels.textContent}</span>`;
                
                divScoreGood.appendChild(spanScoreGood);
                  
                document.querySelector('.divSecondePrante').appendChild(divScoreGood);

                let btnRestartGame = document.querySelector('.restart-game');
                btnRestartGame.onclick = () => {
                    location.reload();
                };
            }
        };
    });
    let input = inputType.value;
    let word = spanWord.innerHTML;
    let isEqual = true;
    for (let i = 0; i < input.length; i++) {
       if(word[i] && word[i].toLocaleLowerCase() !== input[i].toLocaleLowerCase()){
       isEqual = false;
       break;
    }
    }
    if(isEqual){
        inputType.style.color = 'black';
     }else{
         inputType.style.color = 'red';
         isEqual = true;
     };
};
});  
};       
function endTime() {
    document.getElementById('starMusic').pause();
    pranteBtn.remove();
    inputType.remove();
    divTheWords.remove();
    control.remove();
    boxs.remove();

 let divEndTime = document.createElement('div');
         
    divEndTime.className = 'goodLuckAgain';
         
    let divDivEnd = document.createElement('div');

    divDivEnd.className = 'endTime';
         
    let textdivDivEndTime = document.createTextNode(' THE TIME IS END GOOD LUCK AGAING');

    let spanRestart = document.createElement('span');

    spanRestart.setAttribute('class', 'restart-game');

    let textDivRestart = document.createTextNode('Restart Game');
  
    spanRestart.appendChild(textDivRestart);
    
    divDivEnd.appendChild(textdivDivEndTime);

    divEndTime.appendChild(divDivEnd);
    
    divEndTime.appendChild(spanRestart);
         
    document.querySelector('.divSecondePrante').appendChild(divEndTime);
    
    let btnRestartGame = document.querySelector('.restart-game');
        btnRestartGame.onclick = () => {
            location.reload();
        };
};


//Array of deck of card img

const deckCards = ["americano.jpg", "americano.jpg", "espresso.jpg","espresso.jpg",  "iced latte.jpg", "iced latte.jpg", "latte.jpg", "latte.jpg", "lemonade.jpg", "lemonade.jpg", "machiato.jpg", "machiato.jpg", "sky juice.jpg", "sky juice.jpg", "sparkling grapefruit.jpg", "sparkling grapefruit.jpg" ];

//global arrays
//access ul with class of .deck
const deck = document.querySelector(".deck");

//create empty array to store opened cards
let opened = [];

//create empty array to store matched cards
let matched = [];

//access modal
const modal = document.getElementById("modal");

//access reset button
const reset = document.querySelector(".reset-btn");

//access the play again btn
const playAgain = document.querySelector(".play-again-btn");

//select class moves-counter to change html
const movesCount = document.querySelector(".moves-counter");

//create variable for moves counter
let moves = 0;
const star = document.getElementById("star-rating").querySelectorAll(".star");

let starCount = 3;
const timeCounter = document.querySelector(".timer");

let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

function shuffle(array){
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function startGame(){
    //shuffle function and store in variable
    const shuffledDeck = shuffle(deckCards);

    for(let i=0; i < shuffledDeck.length; i++){
        //create li tags
        const liTag = document.createElement('LI');

        //giv li class of card
        liTag.classList.add('card');

        //create img tags
        const addImage = document.createElement("IMG");

        //append img to li
        liTag.appendChild(addImage);

        //set img src with shuffled deck
        addImage.setAttribute("src", "" + shuffledDeck[i]);

        //update new li to deck ul
        deck.appendChild(liTag);
    }
}

startGame();

function removeCard(){
    while(deck.hasChildNodes()){
        deck.removeChild(deck.firstChild);
    }
}

function timer(){
    time = setInterval(function(){
        seconds++;

        if (seconds === 60){
            minutes++;
            seconds = 0;
        }

        timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "Timer: " + minutes + " Mins " + seconds + " Secs ";
    }, 1000);
}

function stopTime(){
    clearInterval(time);
}

function resetEverything(){
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;

    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + "Timer: 00:00";

    star[1].firstElementChild.classList.add("fa-star");
    star[2].firstElementChild.classList.add("fa-star");
    starCount = 3;

    //reset moves
    moves = 0;
    movesCount.innerHTML = 0;

    //clear array
    matched = [];
    opened = [];

    //clear deck
    removeCard();

    //create new deck
    startGame();
}

function movesCounter(){
    movesCount.innerHTML ++;
    moves ++;
}

function starRating(){
    if (moves === 14){
        star[2].firstElementChild.classList.remove("fa-star");
        starCount--;
    }
    if (moves === 18){
        star[1].firstElementChild.classList.remove("fa-star");
        starCount--;
    }
}

//compare two cards to see if they match
function compareTwo(){

    if (opened.length === 2){
        document.body.style.pointerEvents = "none";
    }

    if (opened.length === 2 && opened[0].src === opened[1].src){
        match();
    }else if (opened.length === 2 && opened[0].src != opened[1].src){
        noMatch();
    }
}

function match(){
    setTimeout(function(){
        opened[0].parentElement.classList.add("match");
        opened[1].parentElement.classList.add("match");
        matched.push(...opened);
        document.body.style.pointerEvents = "auto";
        winGame();
        opened = [];
    }, 600);
    movesCounter();
    starRating();
}

function noMatch(){
    setTimeout(function(){
        opened[0].parentElement.classList.remove("flip");
        opened[1].parentElement.classList.remove("flip");
        document.body.style.pointerEvents = "auto";
        opened = [];

    }, 700);
    
    movesCounter();
    starRating();
}

function AddStats(){
    const stats = document.querySelector(".modal-content");

    for(let i=1; i<=3; i++){
        const statsElement = document.createElement("p");
        statsElement.classList.add("stats");
        stats.appendChild(statsElement);
    }

    let p =stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Time to complete: " + minutes + " Minutes and " + seconds + " Seconds";
    p[1].innerHTML = "Moves Taken: " + moves;
    p[2].innerHTML = "Your Star Rating is: " + starCount + " out of 3";
}

function displayModal(){
    const modalClose = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    modalClose.onclick = function(){
        modal.style.display = "none";
    };

    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    };
}

function winGame(){
    if (matched.length === 16){
        stopTime();
        AddStats();
        displayModal();
    }
}

deck.addEventListener("click", function(evt){
    if (evt.target.nodeName == "LI"){
        console.log(evt.target.nodeName + "Was clicked");
        if (timeStart == false){
            timeStart = true;
            timer();
        }
        flipCard();
    }

    function flipCard(){
        evt.target.classList.add("flip");
            addToOpened();
        
    }
    function addToOpened(){
        if (opened.length === 0 || opened.length === 1){
            opened.push(evt.target.firstElementChild);
        }
        compareTwo();
    }
});

reset.addEventListener('click', resetEverything);
playAgain.addEventListener('click', function(){
    modal.style.display = "none";
    resetEverything();
});


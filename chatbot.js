//Nav bar functions
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

//Chat function

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10){
        houts = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage(){
    let firstMessage = "What can I help you?";
    let line1Message = "You can ask me these questions :";
    let line2Message = "1.How to order? ";
    let line3Message = "2.Payment Method";
    let line4Message = "3.Cancel Order";
    let line5Message = "4.Delivery Fees";
    let line6Message = "5.Delivery Time";
    let line7Message = "6.Dine-in";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '<br>' + line1Message + '<br>' + line2Message + '<br>' + line3Message + '<br>' + line4Message + '<br>' +line5Message +'<br>' + line6Message + '<br>' +line7Message + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatArea").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse(){
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatArea").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function buttonSendText(sampleText){
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatArea").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton(){
    getResponse();
}

//Press Enter to send a message

$("#textInput").keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
});


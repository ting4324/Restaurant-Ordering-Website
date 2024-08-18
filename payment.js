//Capture and display card number on card image
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}
//Capture and display card holder name on card image
document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}
//Capture and display card exp month on card image
document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}
//Capture and display card exp year on card image
document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}
//Rotate to back of card once mouse cursor hover on cvv input box
document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
//Rotate to front of card once mouse cursor leave cvv input box
document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
//Capture and display card cvv on card image
document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


function p_validation(){
    var cardNumberInput = document.getElementById("cardNumberInput");
    var cardHolderInput = document. getElementById("cardHolderInput");
    var expirationMonth = document. getElementById("monthInput");
    var expirationYear = document. getElementById("yearInput");
    var cvvInput = document. getElementById("cvvInput");

    var cardNumberInput_error = document.getElementById("cardNumberalert");
    var cardHolderInput_error = document.getElementById("cardHolderalert");
    var expirationMonth_error = document.getElementById("expirationMonthalert");
    var expirationYear_error = document.getElementById("expirationYearalert");
    var cvvInput_error = document.getElementById("cvvalert");

    if(cardNumberInput.value == ""){
        cardNumberInput_error.textContent = "*No card number is entered";
        cardNumberInput.focus();
        setTimeout(() =>{
            cardNumberInput_error.textContent = "";}, 3000);
    }
    if(cardHolderInput.value == " "){
        cardHolderInput_error.textContent = "*No card holder is entered";
        cardHolderInput.focus();
        setTimeout(() =>{
            cardHolderInput_error.textContent = "";}, 3000);
    }
    if(expirationMonth.value == ""){
        expirationMonth_error.textContent = "*No expiration month name is entered";
        expirationMonth.focus();
        setTimeout(() =>{
            expirationMonth_error.textContent = "";}, 3000);
    }
    if(expirationYear.value == ""){
        expirationYear_error.textContent = "*No expiration year is entered";
        expirationYear.focus();
        setTimeout(() =>{
            expirationYear.textContent = "";}, 3000);
    }
    if(cvvInput.value == ""){
        cvvInput_error.textContent = "*No cvv is entered";
        cvvInput.focus();
        setTimeout(() =>{
            cvvInput.textContent = "";}, 3000);
    }

    if(cardNumberInput.value == "" || cardHolderInput.value == "" || expirationMonth.value == "" || expirationYear.value == "" || cvvInput.value == ""){
        alert("Plese fill in the empty field.")
        return
    }
    console.log("testing")
    
}




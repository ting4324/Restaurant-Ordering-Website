function validation(){
    var email = document.getElementById("email");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var contactNumber = document.getElementById("contactNumber");

    //Get span id to display error messages
    var email_error = document.getElementById("emailalert");
    var firstName_error = document.getElementById("firstNamealert");
    var lastName_error = document.getElementById("lastNamealert");
    var contactNumber_error = document.getElementById("contactNumberalert");

    //Check for blank email
    if(email.value == ""){
        email_error.textContent = "*No email is entered";
        email.focus();
        setTimeout(() =>{
            email_error.textContent = "";}, 3000);
    }
    //Check for blank first name
    if(firstName.value == ""){
        firstName_error.textContent = "*No first name is entered";
        firstName.focus();
        setTimeout(() =>{
            firstName_error.textContent = "";}, 3000);
    }
    //Check for blank last name
    if(lastName.value == ""){
        lastName_error.textContent = "*No last name is entered";
        lastName.focus();
        setTimeout(() =>{
            lastName_error.textContent = "";}, 3000);
    }
    //Check for blank Contact number
    if(contactNumber.value == ""){
        contactNumber_error.textContent = "*No contact number is entered";
        contactNumber.focus();
        setTimeout(() =>{
            contactNumber_error.textContent = "";}, 3000);
    }
    //Check for blank field
    if(email.value == "" || firstName.value == "" || lastName.value == "" || contactNumber.value == "" ){
        alert("Plese fill in the empty field.")
        return
    }
    console.log("testing")
    window.location.href = '../home.html'
   
}

//Validate email with @
function checkemail(){
    var email = document.getElementById("email") 
    var email_error = document.getElementById("emailalert")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) || email.value == "")
    {
    return
    }
    email_error.textContent = "Email format incorrect";
        setTimeout(()=>{email_error.textContent = ""; email.value = ""}, 3000)
    return
    }
    

var stars = document.getElementsByClassName("fas fa-star");
var emoji = document.getElementById("emoji");

//If 1 star is rated, cry face will show
stars[0].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)"; 
}
//If 1 star is rated, sad face will show
stars[1].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-100px)"; 
}
//If 1 star is rated, poker face will show
stars[2].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-200px)"; 
}
//If 1 star is rated, smile face will show
stars[3].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-300px)"; 
}
//If 1 star is rated, lovely face will show
stars[4].onclick = function(){
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-400px)"; 
}


   
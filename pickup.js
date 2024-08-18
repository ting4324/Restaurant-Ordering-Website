var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");

var form_2_progessbar = document.querySelector(".form_2_progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
			form_1.style.display = "none";
			form_2.style.display = "block";
		
			form_1_btns.style.display = "none";
			form_2_btns.style.display = "flex";
		
			form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno))
  ){
      return true;
        }
      else
        {
        alert("Invalid Phone Number Format");
		window.location.href = 'pickupform.html';
        return true;
        }
}

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Only Input Alphabet on First Name");
	 window.location.href = 'pickupform.html';
     return true;
     }
  }

  function allLetter1(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Only Input Alphabet on Last Name");
	 window.location.href = 'pickupform.html';
     return true;
     }
  }









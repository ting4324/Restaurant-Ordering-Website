import { review, q_a, description } from './product_detail_database.js'; //import data of review,q_a,description from product_detail_database.js

let cartData = JSON.parse(localStorage.getItem('cart_data'))||[];  //get data from "cart_data"

let input = JSON.parse(localStorage.getItem('Item_Details')) || {}; //get data from "item_details"
console.log(input);


let im = document.createElement('img');
im.src = input.image;
document.getElementById('image').append(im);
document.getElementById('title').innerText = input.title;
document.getElementById('rating').innerText = 5;
document.getElementById('price').innerText = `RM${input.price}`;
document.getElementById('number').innerText = `${input.quantity}`;
document.getElementById('from_types').innerText = `${input.types}`;
input.rating = 5;



//Function for adding item to cart
document.getElementById('btn1').addEventListener('click', add_to_cart);

function add_to_cart() {
  let check = cartData.filter((el) => {
    return el.title == input.title;
  });
  if (check.length < 1) { //if the cart value is more than less than 1 which means it has not been added yet, push input 
    alert('Item successfully added in cart');
    let array = JSON.parse(localStorage.getItem('cart_data')) || [];
    array.push(input);
    localStorage.setItem('cart_data', JSON.stringify(array));
    window.location.reload();
  } else {
    alert('Item already exists in cart'); //Else if the cart data exist which value is more than 1 then display this msg
  }
}

function go_to_cart(){ //Function to go cart page 
  window.location.href = 'cart.html';
}

let i = 1;

document.getElementById('plus').addEventListener('click', increse);


//Function to increase the qty value
function increse() {
  i++;
  document.getElementById('number').innerText = `${i}`;
  input.quantity = i;
}

document.getElementById('minus').addEventListener('click', decrese);

//Function to decrease the qty value
function decrese() {
  i--;
  if (i < 1) {
    i = 1;
  }
  document.getElementById('number').innerText = `${i}`;
  input.quantity = i;
}

//Function to display the description 
document.getElementById('descrip').addEventListener('click', show_des);

function show_des() {
  
  document.getElementById('rev').style.color = 'black';
  document.getElementById('rev').style.backgroundColor = 'rgb(213, 209, 209)';

  document.getElementById('qa').style.color = 'black';
  document.getElementById('qa').style.backgroundColor = 'rgb(213, 209, 209)';

  document.getElementById('descrip').style.color = 'white';
  document.getElementById('descrip').style.backgroundColor = 'rgb(20, 74, 237)';

  document.getElementById('below_content').innerHTML = description(); //display the value from description function ("product_detail_database.js")
}

//Function to display the ratings
document.getElementById('rev').addEventListener('click', show_rev);
function show_rev() {
  document.getElementById('descrip').style.color = 'black';
  document.getElementById('descrip').style.backgroundColor =
    'rgb(213, 209, 209)';

  document.getElementById('qa').style.color = 'black';
  document.getElementById('qa').style.backgroundColor = 'rgb(213, 209, 209)';

  document.getElementById('rev').style.color = 'white';
  document.getElementById('rev').style.backgroundColor = 'rgb(20, 74, 237)';

  document.getElementById('below_content').innerHTML = '';
  document.getElementById('below_content').innerHTML = review(); //display the value from review function ("product_detail_database.js")
}

document.getElementById('qa').addEventListener('click', show_qa);



//Function to display the customer reviews
function show_qa() {
  document.getElementById('descrip').style.color = 'black';
  document.getElementById('descrip').style.backgroundColor =
    'rgb(213, 209, 209)';

  document.getElementById('qa').style.color = 'white';
  document.getElementById('qa').style.backgroundColor = 'rgb(20, 74, 237)';

  document.getElementById('rev').style.color = 'black';
  document.getElementById('rev').style.backgroundColor = 'rgb(213, 209, 209)';

  document.getElementById('below_content').innerHTML = '';
  document.getElementById('below_content').innerHTML = q_a(); //display the value from q_a function ("product_detail_database.js")
}



// Declare variables
const prevBtns = document.querySelectorAll('.btn-pre');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.querySelector('#progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
let formStepsNum = 0;
let parent = document.querySelector('#cartitemList');
let cartData = JSON.parse(localStorage.getItem('cart_data')) || [];
let selectedProduct = JSON.parse(localStorage.getItem('selected_product')) || {
  price: 0,
  itemNums: 0,
};
let ttl_itm = document.querySelector('.ttl_itm>b');
let cuser = JSON.parse(localStorage.getItem('c_user')) || [];
let chsed_item = document.querySelector('.chsed_item>b');
chsed_item.innerText = selectedProduct.itemNums;
ttl_itm.innerText = `RM ${selectedProduct.price}`;
display(cartData);

//Function to display the data 
function display(data) {
  let count = 0;
  parent.innerHTML = null;
  data.forEach((el, index) => {
    let row = document.createElement('tr');
    row.classList = 'shop_warehouse';
    let td1 = document.createElement('td');
    td1.classList = 'prd-dtls';
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList = 'with-10 check';
    checkbox.id = `check${count}`;
    checkbox.checked = el.checked;
    checkbox.addEventListener('click', () => {
      prdChecked(el, checkbox.id);
    });
    //Create elements
    count++;
    let img = document.createElement('img');
    img.src = el.image;
    let details = document.createElement('p');
    details.innerText = el.description;
    td1.append(checkbox, img, details); //show checkbox,item image,item details
    let td2 = document.createElement('td');
    td2.classList = 'shop_table_price';
    let price = document.createElement('span');
    price.innerText = `RM ${el.price}`; //show item price
    td2.append(price);
    let td3 = document.createElement('td');
    td3.classList = 'qwt';
    let qwtData = document.createElement('input');
    let tPrice = document.createElement('span');
    tPrice.innerText = `RM ${el.quantity * el.price}`; //show total item price
    qwtData.type = 'text';
    qwtData.value = el.quantity;
    let inc = document.createElement('i');
    inc.classList = 'icon';
    inc.addEventListener('click', () => {
      increment(el, qwtData, tPrice, checkbox.id); //increment for qty following with price
    });
    inc.innerText = '+';
    let dec = document.createElement('i');
    dec.classList = 'icon';
    dec.innerText = '-';
    dec.addEventListener('click', () => {
      decrement(el, qwtData, tPrice, checkbox.id); //decrement for qty following with price
    });
    td3.append(dec, qwtData, inc);
    let td4 = document.createElement('td');
    td4.append(tPrice);
    let td5 = document.createElement('td');
    td5.classList = 'shop_table_iconxin';   
    let rm = document.createElement('em');
    rm.innerText = 'Remove';        //remove button
    rm.addEventListener('click', () => {
      remove(el, index);
    });
    td5.append( rm);

    row.append(td1, td2, td3, td4, td5); //display (Food Products,Price,Quantity,Total,Remove button)
    parent.append(row);
  });
}

//Checkbox functionality
let prdChecked = (el, id) => {
  let checkBox = document.querySelector(`#${id}`);
  if (checkBox.checked == true) {
    selectedProduct.price += Math.floor(el.price * el.quantity);
    selectedProduct.itemNums += el.quantity;
    el.checked = true;
  } else {
    selectedProduct.price -= Math.floor(el.price * el.quantity);
    selectedProduct.itemNums -= el.quantity;
    el.checked = false;
  }
  ttl_itm.innerText = `RM ${selectedProduct.price}`;
  chsed_item.innerText = selectedProduct.itemNums;
  localStorage.setItem('selected_product', JSON.stringify(selectedProduct));
  localStorage.setItem('cart_data', JSON.stringify(cartData));
};

// Increment qty functionality
let increment = (el, qwtData, tPrice, id) => {
  el.quantity++;
  qwtData.value = el.quantity;
  tPrice.innerText = `RM ${Math.floor(el.price * el.quantity)}`;
  if (el.checked) {
    selectedProduct.price += Math.floor(el.price);
    selectedProduct.itemNums++;
    chsed_item.innerText = selectedProduct.itemNums;
    ttl_itm.innerText = `RM ${selectedProduct.price}`;
    // console.log(selectedProduct.price)
    localStorage.setItem('selected_product', JSON.stringify(selectedProduct));
  }
  localStorage.setItem('cart_data', JSON.stringify(cartData));
};
// Decrement qty functionality
let decrement = (el, qwtData, tPrice, id) => {
  if (el.quantity > 1) {
    el.quantity--;
    qwtData.value = el.quantity;
    tPrice.innerText = `RM ${Math.floor(el.price * el.quantity)}`;
    if (el.checked) {
      selectedProduct.price -= Math.floor(el.price);
      selectedProduct.itemNums--;
      ttl_itm.innerText = `RM ${selectedProduct.price}`;
      chsed_item.innerText = selectedProduct.itemNums;
      // console.log(selectedProduct.price)
      localStorage.setItem('selected_product', JSON.stringify(selectedProduct));
    }
    localStorage.setItem('cart_data', JSON.stringify(cartData));
  }
};
//Remove item functionality
let remove = (el, index) => {
  if (el.checked) {
    selectedProduct.price -= Math.floor(el.price * el.quantity);
    selectedProduct.itemNums -= el.quantity;
    ttl_itm.innerText = `RM ${selectedProduct.price}`;
    chsed_item.innerText = selectedProduct.itemNums;
    localStorage.setItem('selected_product', JSON.stringify(selectedProduct));
  }
  cartData.splice(index, 1);
  console.log(cartData);
  localStorage.setItem('cart_data', JSON.stringify(cartData));
  display(cartData);
};
// Progress Bar functionality
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (formStepsNum == 0) {
      if (cuser.length<1) { //if user did not sign up before jump to register
        window.location.href = 'register.html'; 
      } else if (selectedProduct.itemNums > 0) { //if selected item more than 0,proceed
        updateFormSteps(); 
        updateProgressbar();
      } else { //Did not select item
        alert('Please select an item.');
      }
    } else {
      updateFormSteps();
      updateProgressbar();
    }
    formStepsNum++; 
  });
});
prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

//Function to formstep for progress bar
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains('active') &&
      formStep.classList.remove('active');
  });

  formSteps[formStepsNum].classList.add('active');
}

//Function to update progress bar
function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add('active');
    } else {
      progressStep.classList.remove('active');
    }
  });
  const progressActive = document.querySelectorAll('.progress-step.active');
  let barLength =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';

  progress.style.width = barLength == '0%' ? '24%' : barLength;
}

// Checkout functionality
let checkoutBtn = document.querySelector('#checkout');
checkoutBtn.addEventListener('click', () => {
  checkout();
});
var checkout = () => {
  event.preventDefault(); 
  alert('Thank You for Choosing The Brew House');
  cartData.forEach((el, index) => {
    if (el.checked == true) { 
      cartData.splice(index, 1);
    }
  });
  selectedProduct = { price: 0, itemNums: 0 }; //Clear cart item
  localStorage.setItem('selected_product', JSON.stringify(selectedProduct));
  localStorage.setItem('cart_data', JSON.stringify(cartData));
  console.log('Hello');
  window.location.href = 'delivery.html';
};

// Checkout functionality
let pickupBtn = document.querySelector('#pickup');
pickupBtn.addEventListener('click', () => {
  pickup();
});
var pickup = () => {
  event.preventDefault(); 
  alert('Thank You for Choosing The Brew House for Pickup');
  cartData.forEach((el, index) => {
    if (el.checked == true) { 
      cartData.splice(index, 1);
    }
  });
  selectedProduct = { price: 0, itemNums: 0 }; //Clear cart item
  localStorage.setItem('selected_product', JSON.stringify(selectedProduct));
  localStorage.setItem('cart_data', JSON.stringify(cartData));
  console.log('Hello');
  window.location.href = 'PIckupform.html';
};




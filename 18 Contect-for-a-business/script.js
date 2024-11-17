let nameInput = document.querySelector(".name");
let emailInput = document.querySelector(".email");
let numberInput = document.querySelector(".number");
let addInput = document.querySelector(".addresses");
let submitButton = document.querySelector(".submit");

let fullname = document.querySelector(".fullname");
let add = document.querySelector(".add1 p");
let number = document.querySelector(".add2 p")
let email = document.querySelector(".add3 p");


submitButton.addEventListener("click",function(){
    fullname.innerText = nameInput.value;
    add.innerText = addInput.value;
    number.innerText = numberInput.value;
    email.innerText = emailInput.value;
})



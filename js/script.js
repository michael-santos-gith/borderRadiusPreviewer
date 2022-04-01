let contentBeModificate = document.getElementById("content-modify");
let leftUpSide = document.getElementById("left-up-side");
let rightUpSide = document.getElementById("right-up-side");
let rightDownSide = document.getElementById("right-down-side");
let leftDownSide = document.getElementById("left-down-side");

let buttonLeftUpSide = document.querySelector("#button-left-up-side");
buttonLeftUpSide.addEventListener('click', function() {
    contentBeModificate.style.borderTopLeftRadius = leftUpSide.value + 'px';
    leftUpSide.value = '';
})

let buttonRightUpSide = document.querySelector("#button-right-up-side");
buttonRightUpSide.addEventListener('click', function() {
    contentBeModificate.style.borderTopRightRadius = rightUpSide.value + 'px';
    rightUpSide.value = '';
})

let buttonRightDownSide = document.querySelector("#button-right-down-side");
buttonRightDownSide.addEventListener('click', function() {
    contentBeModificate.style.borderBottomRightRadius = rightDownSide.value + 'px';
    rightDownSide.value = '';
})

let buttonLeftDownSide = document.querySelector("#button-left-down-side");
buttonLeftDownSide.addEventListener('click', function() {
    contentBeModificate.style.borderBottomLeftRadius = leftDownSide.value + 'px';
    leftDownSide.value = '';
})
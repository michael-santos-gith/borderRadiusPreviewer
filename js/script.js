let contentBeModificate = document.getElementById("content-modify");
let leftUpSide = document.getElementById("left-up-side");
let rightUpSide = document.getElementById("right-up-side");
let rightDownSide = document.getElementById("right-down-side");
let leftDownSide = document.getElementById("left-down-side");
// Aplica o border-radius 
leftUpSide.addEventListener('input', function() {
    contentBeModificate.style.borderTopLeftRadius = leftUpSide.value + 'px';
})

rightUpSide.addEventListener('input', function() {
    contentBeModificate.style.borderTopRightRadius = rightUpSide.value + 'px';
})

rightDownSide.addEventListener('input', function() {
    contentBeModificate.style.borderBottomRightRadius = rightDownSide.value + 'px';
})

leftDownSide.addEventListener('input', function() {
    contentBeModificate.style.borderBottomLeftRadius = leftDownSide.value + 'px';
})

let resetAll = document.querySelector('#reset-all');
resetAll.addEventListener('click', function() {
    leftUpSide.value = '';
    rightUpSide.value = '';
    rightDownSide.value = '';
    leftDownSide.value = '';
    contentBeModificate.style.borderTopLeftRadius = leftUpSide.value = 0 + 'px';
    contentBeModificate.style.borderTopRightRadius = rightUpSide.value = 0 + 'px';
    contentBeModificate.style.borderBottomRightRadius = rightDownSide.value = 0 + 'px';
    contentBeModificate.style.borderBottomLeftRadius = leftDownSide.value = 0 + 'px';
})
let contentBeModificate = document.getElementById("content-modify");
let leftUpSide = document.getElementById("left-up-side");
let rightUpSide = document.getElementById("right-up-side");
let rightDownSide = document.getElementById("right-down-side");
let leftDownSide = document.getElementById("left-down-side");
let textAreaContent = document.getElementById('result-borders');
let resetAll = document.getElementById('reset-all');
let copyTextArea = document.getElementById('copy-text-area');
// APLICA O BORDER-RADIUS 
leftUpSide.addEventListener('input', function() {
    contentBeModificate.style.borderTopLeftRadius = leftUpSide.value + 'px';
    textAreaContent.value = `border-top-left-radius: ${leftUpSide.value}px;`;
})

rightUpSide.addEventListener('input', function() {
    contentBeModificate.style.borderTopRightRadius = rightUpSide.value + 'px';
    textAreaContent.value = `border-top-right-radius: ${rightUpSide.value}px;`;
})

rightDownSide.addEventListener('input', function() {
    contentBeModificate.style.borderBottomRightRadius = rightDownSide.value + 'px';
    textAreaContent.value = `border-bottom-right-radius: ${rightDownSide.value}px;`;
})

leftDownSide.addEventListener('input', function() {
    contentBeModificate.style.borderBottomLeftRadius = leftDownSide.value + 'px';
    textAreaContent.value = `border-bottom-left-radius: ${leftDownSide.value}px;`;
})

resetAll.addEventListener('click', function() {
    leftUpSide.value = '';
    rightUpSide.value = '';
    rightDownSide.value = '';
    leftDownSide.value = '';
    textAreaContent.value = '';
    contentBeModificate.style.borderTopLeftRadius = leftUpSide.value = 0 + 'px';
    contentBeModificate.style.borderTopRightRadius = rightUpSide.value = 0 + 'px';
    contentBeModificate.style.borderBottomRightRadius = rightDownSide.value = 0 + 'px';
    contentBeModificate.style.borderBottomLeftRadius = leftDownSide.value = 0 + 'px';
})

copyTextArea.addEventListener('click', function() {
    textAreaContent.select();
    textAreaContent.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(textAreaContent.value);
})
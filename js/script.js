let contentBeModificate = document.getElementById("content-modify");
let inputFocuSelect = document.querySelectorAll('.input-click');
let textAreaContent = document.getElementById('result-borders');
let buttonCopyReset = document.querySelectorAll('.button-choose');
let resetAll = document.getElementById('reset-all');
let copyTextArea = document.getElementById('copy-text-area');

function inputFocus(amount, indicator) {
    inputFocuSelect[indicator].addEventListener('input', function() {
        if (indicator == 0) {
            contentBeModificate.style.borderTopLeftRadius = amount.value + 'px';
        } else if (indicator == 1) {
            contentBeModificate.style.borderTopRightRadius = amount.value + 'px';
        } else if (indicator == 2) {
            contentBeModificate.style.borderBottomRightRadius = amount.value + 'px';
        } else {{
            contentBeModificate.style.borderBottomLeftRadius = amount.value + 'px';
        }}
    });
}
// APLICA O BORDER-RADIUS 
inputFocuSelect.forEach(inputFocus);

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
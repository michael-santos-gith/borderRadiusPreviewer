let contentBeModificate = document.getElementById("content-modify");
let inputFocuSelect = document.querySelectorAll('.input-click');
let buttonCopyReset = document.querySelectorAll('.button-choose');
let textAreaContent = document.getElementById('result-borders');

function inputFocus(amount, indicator) {
    inputFocuSelect[indicator].addEventListener('input', function() {
        if (indicator == 0) {
            contentBeModificate.style.borderTopLeftRadius = amount.value + 'px';
            textAreaContent.value = `border-top-left-radius: ${amount.value}px;`;
        } else if (indicator == 1) {
            contentBeModificate.style.borderTopRightRadius = amount.value + 'px';
            textAreaContent.value = `border-top-right-radius: ${amount.value}px;`;
        } else if (indicator == 2) {
            contentBeModificate.style.borderBottomRightRadius = amount.value + 'px';
            textAreaContent.value = `border-bottom-right-radius: ${amount.value}px;`;
        } else {
            contentBeModificate.style.borderBottomLeftRadius = amount.value + 'px';
            textAreaContent.value = `border-bottom-left-radius: ${amount.value}px;`;
        }
    });
}

function resetAndCopyButtons(amount, indicator) {
    buttonCopyReset[indicator].addEventListener('click', function() {
        if (indicator == 0) {
            inputFocuSelect.forEach(function(content) {
                content.value = '';
                textAreaContent.value = '';
                contentBeModificate.style.borderTopLeftRadius = 0 + 'px';
                contentBeModificate.style.borderTopRightRadius = 0 + 'px';
                contentBeModificate.style.borderBottomRightRadius = 0 + 'px';
                contentBeModificate.style.borderBottomLeftRadius = 0 + 'px';
            });
        } else {
            textAreaContent.select();
            textAreaContent.setSelectionRange(0, 9999);

            navigator.clipboard.writeText(textAreaContent.value);
        }
    })
}

inputFocuSelect.forEach(inputFocus);
buttonCopyReset.forEach(resetAndCopyButtons);
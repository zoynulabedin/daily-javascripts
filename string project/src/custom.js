var textarea = document.querySelector('#textarea');
var search = document.querySelector("#search");
var result = document.querySelector("#result");
search.addEventListener('keypress', function() {
    var match = textarea.value.indexOf(search.value);
    if (match === -1) {
        result.innerHTML = `The value ${search.value} was not found`;
    } else {
        result.innerHTML = `The value <strong> ${search.value} </strong>found at postion ${match}`;
    }
});
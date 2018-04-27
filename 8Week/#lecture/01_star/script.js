var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('result');
btnStarElement.addEventListener('click', onCickBtnStar);
function onCickBtnStar(event){
    event.preventDefault();
    var result = '';
    for(var i = 1; i <= 5; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    for(i = 5; i > 0; i--){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    resultElement.innerHTML = result;
}
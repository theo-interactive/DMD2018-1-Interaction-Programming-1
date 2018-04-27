var btnPrimeElement = document.getElementById('btn-prime');
var resultElement = document.getElementById('result');
btnPrimeElement.addEventListener('click', onCickBtnPrime);
function onCickBtnPrime(event){
    event.preventDefault();
    var result = getPrime();
    if(result[0] !== undefined){
        var resultRowElement = document.createElement('div');
        resultRowElement.classList.add('row');
        resultRowElement.innerHTML = '입력한 숫자 : ' + result[0] + '<br/> 소수 : ' + result[1];
        resultElement.appendChild(resultRowElement);
    }
}
var getPrime = function(){
    var number = prompt('숫자를 입력하세요.');
    var isPrime;
    var primes = '';
    for(var i = 2; i <= number; i++){
        isPrime = true;
        for(var j = 2; j < i; j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            if(primes !== ''){
                primes += ', ';    
            }
            primes += i;
        }
    }
    return [number, primes];
};

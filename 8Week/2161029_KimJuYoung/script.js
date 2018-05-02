var resultElement = document.getElementById("result");

var numGroup = document.getElementsByName("select_number");

var plusBtn = document.getElementById("btn-plus");
var minusBtn = document.getElementById("btn-minus");
var multipleBtn = document.getElementById("btn-multiple");
var devideBtn = document.getElementById("btn-divide");
var percentBtn = document.getElementById("btn-percent");

var resetBtn = document.getElementById("btn-reset");



var _num;

var numClick = function(){
    for(var i = 0; i < numGroup.length; i++){

        if(numGroup[i].checked){
            _num = Number(numGroup[i].getAttribute("value")); 
        }
        
    }
};



var plusBtn = document.getElementById ("btn-plus");

var plusClick = function () {
    numClick ();
    resultElement.innerHTML = Number(resultElement.innerHTML) + Number (_num);
}

plusBtn.addEventListener ('click', plusClick);



var minusBtn = document.getElementById ("btn-minus");

var minusClick = function () {
    numClick ();
    resultElement.innerHTML = Number(resultElement.innerHTML) - Number (_num);
}

minusBtn.addEventListener ('click', minusClick);



var multipleBtn = document.getElementById ("btn-multiple");

var multipleClick = function () {
    numClick ();
    resultElement.innerHTML = Number(resultElement.innerHTML) * Number (_num);
}

multipleBtn.addEventListener ('click', multipleClick);



var divideBtn = document.getElementById ("btn-divide");

var divideClick = function () {
    numClick ();
    resultElement.innerHTML = Number(resultElement.innerHTML) / Number (_num);
}

divideBtn.addEventListener ('click', divideClick);



var percentBtn = document.getElementById ("btn-percent");

var percentClick = function () {
    numClick ();
    resultElement.innerHTML = Number(resultElement.innerHTML) % Number (_num);
}

percentBtn.addEventListener ('click', percentClick);



var resetBtn = document.getElementById ('btn-reset');

var resetClick = function () {
    resultElement.innerHTML = Number ("0");
};

resetBtn.addEventListener ('click', resetClick);




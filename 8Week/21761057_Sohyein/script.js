var resultElemet = document.getElementById("result");

var numberBtns = document.getElementsByName("select_number");


var useNumber;

function numberCheck ()
{
    for (var i = 0; i < numberBtns.length; i++)
    {
            if (numberBtns[i].checked)
            {
                useNumber =  Number(numberBtns[i].getAttribute("value"));
            }
    }
}


/*---------------------------------plus---------------------------------*/
var plusBtn = document.getElementById("btn-plus");

function plusResult ()
{
    numberCheck();
    resultElemet.innerHTML = Number(resultElemet.textContent) + useNumber;
}

plusBtn.addEventListener("click", plusResult);


/*---------------------------------minus---------------------------------*/
var minusBtn = document.getElementById("btn-minus");

function minusResult ()
{
    numberCheck();
    resultElemet.innerHTML = Number(resultElemet.textContent) - useNumber;
}

minusBtn.addEventListener("click", minusResult);


/*---------------------------------multiple---------------------------------*/
var multipleBtn = document.getElementById("btn-multiple");

function multipleResult ()
{
    numberCheck();
    resultElemet.innerHTML = Number(resultElemet.textContent) * useNumber;
}

multipleBtn.addEventListener("click", multipleResult);


/*---------------------------------divide---------------------------------*/
var divideBtn = document.getElementById("btn-divide");

function divideResult ()
{
    numberCheck();
    resultElemet.innerHTML = Number(resultElemet.textContent) / useNumber;
}

divideBtn.addEventListener("click", divideResult);


/*---------------------------------percent---------------------------------*/
var percentBtn = document.getElementById("btn-percent");

function percentResult ()
{
    numberCheck();
    resultElemet.innerHTML = Number(resultElemet.textContent) % useNumber;
}

percentBtn.addEventListener("click", percentResult);
//혹시 여기는 그냥 퍼센트값 말고 나머지값 구하는게 맞는건가요?

// rh : 네, 나머지 값 구하는게 맞습니다만, 퍼센트 값 구하는 것도 시도해보세요.

/*---------------------------------reset---------------------------------*/
var resetBtn = document.getElementById("btn-reset");

function resetResult ()
{
    numberCheck();
    resultElemet.textContent = 0;
}

resetBtn.addEventListener("click", resetResult);





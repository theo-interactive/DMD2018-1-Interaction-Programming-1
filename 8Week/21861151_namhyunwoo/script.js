var Result = document.getElementById('result');
var BtnPlus = document.getElementById('btn-plus');
var BtnMinus = document.getElementById('btn-minus');
var BtnMultiple = document.getElementById('btn-multiple');
var BtnDivide = document.getElementById('btn-divide');
var BtnPercent = document.getElementById('btn-percent');
var BtnReset = document.getElementById('btn-reset');
var SelectNumbersElement = document.getElementsByName('select_number');
var SelectedNumber;

function NumberCheck()
{
    for(var i = 0; i<SelectNumbersElement.length; i++)
    {
        if(SelectNumbersElement[i].checked)
        {
            SelectedNumber = Number(SelectNumbersElement[i].getAttribute('value'));
        }
    }
}

function OnClickPlus()
{
    NumberCheck();
    Result.innerHTML = Number(Result.innerHTML) + SelectedNumber;
}

function OnClickMinus()
{
    NumberCheck();
    Result.innerHTML = Number(Result.innerHTML) - SelectedNumber;
}

function OnClickMultiple()
{
    NumberCheck();
    Result.innerHTML = Number(Result.innerHTML) * SelectedNumber;
}

function OnClickDivide()
{
    NumberCheck();
    Result.innerHTML = Number(Result.innerHTML) / SelectedNumber;
}

function OnClickPercent()
{
    NumberCheck();
    Result.innerHTML = Number(Result.innerHTML) % SelectedNumber;
}

function OnClickReset()
{
    NumberCheck();
    Result.innerHTML = 0;
}
BtnPlus.addEventListener('click', OnClickPlus);
BtnMinus.addEventListener('click', OnClickMinus);
BtnMultiple.addEventListener('click', OnClickMultiple);
BtnDivide.addEventListener('click', OnClickDivide);
BtnPercent.addEventListener('click', OnClickPercent);
BtnReset.addEventListener('click', OnClickReset);

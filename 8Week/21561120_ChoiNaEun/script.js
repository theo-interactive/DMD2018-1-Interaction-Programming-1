




var ResultGet = document.getElementById("result");

var clickNumber = document.getElementsByName("select_number");

var GetNumber;


function CheckNumber(){
    for (var i=0; i<clickNumber.length; i++)
    {
        if(clickNumber[i].checked)
        {
            GetNumber = Number(clickNumber[i].getAttribute("value"));
        }

    }
}
///+
var PlustBtn = document.getElementById('btn-plus');

PlustBtn.addEventListener('click',function(){

    CheckNumber();
    ResultGet.innerHTML = Number(ResultGet.innerHTML) + GetNumber;
});
///-

var MinBtn = document.getElementById('btn-minus');

MinBtn.addEventListener('click',function(){

    CheckNumber();
    ResultGet.innerHTML = Number(ResultGet.innerHTML) - GetNumber;
});

///x
var MulBtn = document.getElementById('btn-multiple');

MulBtn.addEventListener('click',function(){

    CheckNumber();
    ResultGet.innerHTML = Number(ResultGet.innerHTML) * GetNumber;
});
///div 
var divBtn = document.getElementById('btn-divide');

divBtn.addEventListener('click',function(){

    CheckNumber();
    ResultGet.innerHTML = Number(ResultGet.innerHTML) / GetNumber;
});
///%
var perBtn = document.getElementById('btn-percent');

perBtn.addEventListener('click',function(){

    CheckNumber();
    ResultGet.innerHTML = Number(ResultGet.innerHTML) % GetNumber;
})

// reset 


var ResetBtn = document.getElementById("btn-reset");

function ResetArea (){
    CheckNumber();
    ResultGet.textContent = 0;
}

ResetBtn.addEventListener("click",ResetArea);
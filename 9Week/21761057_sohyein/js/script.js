//

function q1(qtype)
{
    if (typeof qtype === "number")
    {
        var returnq1 = true;
    }
    else if (typeof qtype === "string")
    {
        returnq1 = false;
    }; 
    return returnq1;
}

console.log(q1(5));
console.log(q1('text'));

//

// function p3 (p3obg = {})
// {
//     for (i = 0; i < q3)
//     {

//     }
// }

// p3(
// {
// greeting : '안녕하세요',
// myName : '소혜인입니다.',
// today : '오늘은',
// month : 5,
// separate : '/',
// day : 3,
// is : '입니다.',
// luck : '행운을 빕니다.'}
// )

//4.
function q4 (q4array = [], q4array2 = [])
{
    var maxp4 = Math.max.apply(null, q4array)
    var minp4 = Math.min.apply(null, q4array2)

    var logq4 = "최대값 " + maxp4 + ", " +  "최소값 " + minp4

    return logq4;
}

console.log(q4([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]));

console.log(q4([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]));

//

var studentNumber = document.getElementById("btn-student-number");
var studentNumberCon = document.getElementById("student-number");
function myNumber (event)
{
    event.preventDefault();
    studentNumberCon.innerHTML = 21761057;
}

studentNumber.addEventListener("click", myNumber);

var studentName = document.getElementById("btn-student-name");
var studentNameCon = document.getElementById("student-name");
function myName (event)
{
    event.preventDefault();
    studentNameCon.innerHTML = "소혜인";
}

studentName.addEventListener("click", myName);

//

var evenElementBtn = document.getElementById("btn-even");
var evenElementresult = document.getElementById("even-result");

function q6even ()
{
    var q6prompt = prompt('숫자를 입력해주세요.');
    
    
    if (q6prompt)
    {
        var returnq6 = ""
        for (var i = 0; i <= Number(q6prompt); i++)
        {
            if (i % 2 === 0)
            {
                returnq6 + i;
                //if (returnq6 !== "")
                //{returnq6 + ", "}
            }
            evenElementresult.innerHTML = returnq6;
        }      
    }   
}

evenElementBtn.addEventListener("click", q6even);

//
var colorBtn = document.getElementById("btn-color")
var colorp = document.getElementsByClassName("sentence")
var toggle1 = true;
var toggle2 = false;
var toggle3 = false;
var toggle4 = false;

function colorToggle ()
{
    if(toggle1)
    {
        colorp[0].classList.add("color1");
        toggle2 = true;
    }
    else
    {
        colorp[0].classList.remove("color1");
    }

    if(toggle2)
    {
        colorp[1].classList.add("color1");
        toggle1 = false;
        toggle2 = false;
        toggle3 = true;
        toggle4 = false;

    }
    else
    {
        colorp[1].classList.remove("color1");
    }

    if(toggle3)
    {
        colorp[2].classList.add("color1");
        toggle1 = false;
        toggle2 = false;
        toggle3 = false;
        toggle4 = true;

    }
    else
    {
        colorp[2].classList.remove("color1");
    }

    if(toggle4)
    {
        colorp[3].classList.add("color1");
        toggle1 = true;
        toggle2 = false;
        toggle3 = false;
        toggle4 = false;

    }
    else
    {
        colorp[3].classList.remove("color1");
    }
}

colorBtn.addEventListener("click", colorToggle);

//
function q8console (q8number)
{
    var starq8 = "";
    var stars = "*";
    
    if (typeof q8number === "number")
    {
        for(i = 0; i <= q8number; i++)
        {
            stars++
        }
        console.log(stars);
    }
    else
    {
        console.log("숫자만 입력가능합니다.");
        starq8 = false;
    }
    return starq8;
}
console.log(q8console("t"));
console.log(q8console(5));

//
var q10 = document.getElementById("btn-star");

function q10star ()
{
    var prq10 = prompt("숫자를 입력해주세요.")
    if (prq10)
    {

    }
}

q10.addEventListener("click", q10star)

//





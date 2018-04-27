var mouseElement = document.getElementById('mouse');
var text = mouseElement.innerText;
var isClick = false;
mouseElement.addEventListener('click', onMouseClick);
mouseElement.addEventListener('dblclick', onMouseDblClick);

mouseElement.addEventListener('mouseover', onMouseOver);
mouseElement.addEventListener('mouseout', onMouseOut);

mouseElement.addEventListener('mousedown', onMouseDown);
mouseElement.addEventListener('mousemove', onMouseMove);
mouseElement.addEventListener('mouseup', onMouseUp);
function onMouseClick(e){
    e.preventDefault();
    console.log('click');
    if(!isClick){
        isClick = true;
        mouseElement.innerHTML = text.toUpperCase();
    }else{
        isClick = false;
        mouseElement.innerHTML = text;
    }
}
function onMouseDblClick(e){
    e.preventDefault();
    console.log('double click');
    mouseElement.classList.toggle('mouse1');
}
function onMouseOver(e){
    e.preventDefault();
    console.log('over');
    mouseElement.classList.add('mouse2');
}
function onMouseOut(e){
    e.preventDefault();
    console.log('out');
    mouseElement.classList.remove('mouse2');
}
function onMouseDown(e){
    e.preventDefault();
    console.log('down');
    mouseElement.classList.add('mouse3');
}
function onMouseMove(e){
    e.preventDefault();
    console.log('move');    
}
function onMouseUp(e){
    e.preventDefault();
    console.log('up');
    mouseElement.classList.remove('mouse3');
}

var divElement = document.getElementById('div');
var pElement = document.getElementById('p');
var spanElement = document.getElementById('span');

divElement.addEventListener('click', onClickDiv);
pElement.addEventListener('click', onClickP);
spanElement.addEventListener('click', onClickSpan);

function onClickDiv(e){
    e.preventDefault();
    console.log('Divide click');

}
function onClickP(e){
    e.preventDefault();
    console.log('Paragraph click');
}
function onClickSpan(e){
    e.preventDefault();
    e.stopPropagation();
    console.log('Span click');
}

/*********/
var radioElement = document.getElementsByName('select_number');
for(var i = 0; i < radioElement.length; i++){
    radioElement[i].addEventListener('change', onChangeRadio);  
}
function onChangeRadio(){
    var selectNumber = getSelectNumber();
    console.log(selectNumber);
}

var getSelectNumber = function(){
    var selectNumber;
    for(var i = 0; i < radioElement.length; i++){
        if(radioElement[i].checked){
            selectNumber = radioElement[i].value;
        }
    }
    return Number(selectNumber);
}
/*********/
var selectInputElement = document.getElementsByName('select_input');
selectInputElement[0].addEventListener('change', onChangeInput);
function onChangeInput(){
    selectInputElement[0].value = selectInputElement[0].value.toUpperCase();
}

var selectBrowserElement = document.getElementsByName('select_browser');
selectBrowserElement[0].addEventListener('change', onChangeBrowser);
function onChangeBrowser(){
    console.log(selectBrowserElement[0].value);
}


var emailElement = document.getElementById('email');
emailElement.addEventListener('focus', onFocusEmail);
function onFocusEmail(){
    console.log('focus');
}
emailElement.addEventListener('blur', onBlurEmail);
function onBlurEmail(){
    console.log('blur');
}
emailElement.addEventListener('select', onSelectEmail);
function onSelectEmail(){
    console.log('select');
}
emailElement.addEventListener('keydown', onKeyDownEmail);
function onKeyDownEmail(event){
    console.log('keydown');
}
emailElement.addEventListener('keypress', onKeyPressEmail);
function onKeyPressEmail(event){
    console.log('keypress');
}
emailElement.addEventListener('keyup', onKeyUpEmail);
function onKeyUpEmail(event){
    console.log('keyup');
}

var imgElement = document.getElementById('img');
imgElement.addEventListener('load', onLoadImg)
imgElement.addEventListener('error', onErrorImg)
function onLoadImg(){
    console.log('load');
}
function onErrorImg(){
    console.log('error');
}
window.addEventListener('resize', onResize);
function onResize(){
    console.log(window.innerWidth, window.innerHeight);
}
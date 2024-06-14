
let dislay = "";
function appendtoDisplay(input){
    dislay += input;
    document.getElementById("screen").value = dislay;
}

function erase(){
    dislay="";
    document.getElementById("screen").value = dislay;
}

function backspace(){
    dislay = dislay.slice(0, -1);
    document.getElementById("screen").value = dislay;
}

function calculate(){
    let ans = eval(dislay);
    document.getElementById("screen").value = ans;
    dislay=ans;
}
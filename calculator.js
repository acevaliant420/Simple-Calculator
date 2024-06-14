
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
    try{
        let ans = eval(dislay);
        console.log(ans);
        dislay=ans;
        document.getElementById("screen").value = dislay;
    }
    catch(Error){
        document.getElementById("screen").value = "Error";
    }
    
    dislay = "";
}
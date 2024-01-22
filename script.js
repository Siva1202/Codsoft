function displayValue(val){
    document.getElementById("output").value = document.getElementById("output").value+val;
}
function clearValue(){
    document.getElementById("output").value ="";
}
function finalValue(){
    var userValue =  document.getElementById("output").value;
    var result = eval(userValue);
    document.getElementById("output").value = result;
}
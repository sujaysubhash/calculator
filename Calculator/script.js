function btnClick(num){
    document.getElementById("screen").value=document.getElementById("screen").value+num;
    //The value of the input box is set as the value of the input box. It's done by passing the argument numbers as the function's parameter.

    //The value of the screen is get and combined with the value of the buttonClick(numbers).
    //Here the parameter will have its arments as the numbers, so it will be combined with the value of the input box.
}
function clearClick(){
    document.getElementById("screen").value="";
    //The value of the input box is set as none , while invoking the function.
}
function equalClick(){
    let val=document.getElementById("screen").value;
    let result=eval(val);
    document.getElementById("screen").value=result;
}
function cClick(){
    document.getElementById("screen").value="";
}
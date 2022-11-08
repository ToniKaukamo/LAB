// First calculator script
const formOne = document.getElementById('calc1')
function fstCalc() {
    const num1 = parseFloat(formOne.elements['num11'].value);
    const num2 = parseFloat(formOne.elements['num12'].value);
    const op =  formOne.elements['operator-1'].value;
    document.getElementById("result-1").innerHTML = `Result is ${calc(num1,num2,op)}`;
    return false
}
document.getElementById("submitOne").addEventListener("click", fstCalc);

// Second calculator script
const formTwo = document.getElementById('calc2')
function sndCalc() {
    const num1 = parseFloat(formTwo.elements['num21'].value);
    const num2 = parseFloat(formTwo.elements['num22'].value);
    if (formTwo.elements['+'].checked) {
        var op = "+";
        document.getElementById("result-2").innerHTML = `Result is ${calc(num1,num2,op)}`;
    } else if (formTwo.elements['-'].checked) {
        var op = "-";
        document.getElementById("result-2").innerHTML = `Result is ${calc(num1,num2,op)}`;
    } else if (formTwo.elements['*'].checked) {
        var op = "*";
        document.getElementById("result-2").innerHTML = `Result is ${calc(num1,num2,op)}`;
    } else if (formTwo.elements['/'].checked) {
        var op = "/";
        document.getElementById("result-2").innerHTML = `Result is ${calc(num1,num2,op)}`;
    }
    return False
}
document.getElementById("submitTwo").addEventListener("click", sndCalc);

// Third calculator script
const formThree = document.getElementById('calc3')
function thirdCalc()  {
    const num1 = parseFloat(formThree.elements['num31'].value);
    const num2 = parseFloat(formThree.elements['num32'].value);
    const op =  formThree.elements['operator-3'].value;
    document.getElementById("result-3").innerHTML = `Result is ${calc(num1,num2,op)}`;
    return false
}
document.getElementById("submitThree").addEventListener("click", thirdCalc);
// Increment for third one
var numb31 = document.getElementById('num31');
function increment1(num) { 
    count = parseInt(numb31.value);
    count += 1;
    numb31.value = count;
}
function decrement1() {
    count = parseInt(numb31.value);
    count -= 1;
    numb31.value = count;
}
var numb32 = document.getElementById('num32');
function increment2(num) { 
    count = parseInt(numb32.value);
    count += 1;
    numb32.value = count;
}
function decrement2() {
    count = parseInt(numb32.value);
    count -= 1;
    numb32.value = count;
}
// Switch for the inputs to reduce typing this multiple times
function calc(num1,num2,op) {
    switch(op){
        case "+":
            var result = num1 + num2;
            break;
        case "-":
            var result = num1 - num2;
            break;
        case "*":
            var result = num1 * num2;
            break;
        case "/":
            var result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            break;
    }
    return result;
}
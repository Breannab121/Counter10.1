let num1 = Number(prompt("pleaase enter the first number: "));


let operator = prompt("please enter the operator");


let num2 = prompt("pleaase enter the second number: ");
num2 = Number(num2)

console.log(num1);
console.log(operator);
console.log(num2);

function add(a,b) {
    return a + b;
}



if (operator === "+") {
    console.log(add(num1, num2))
} else if (operator === "-") {
    // call the sub function
}
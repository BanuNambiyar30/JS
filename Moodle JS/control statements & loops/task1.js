var num1=parseInt(prompt("Enter a Value:"));
var num2=parseInt(prompt("Enter a Value:"));
var num3=parseInt(prompt("Enter a Value:"));
let product = num1 * num2 * num3;
if (product > 0) {
  alert("The sign is positive:"+product);
} else if (product < 0) {
  alert("The sign is negative:"+product);
} else {
  alert("The sign is zero:"+product);
}
var firstValue=prompt(" Enter a 1st Value:");
var secondValue=prompt("Enter a 2nd Value:");
var thirdValue=prompt("Enter a 2nd Value:");
if(firstValue>secondValue && firstValue>thirdValue)
{
    alert("1st value is greater");
}
else if(secondValue>firstValue && secondValue>thirdValue)
{
    alert("2nd value is greater");
}
else if(thirdValue>firstValue && thirdValue>secondValue)
{
    alert("3rd value is greater");
}
else
{
    alert("Invalid");
}
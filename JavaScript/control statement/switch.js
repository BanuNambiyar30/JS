var a=parseInt(prompt(" Enter a 1st Value:"));
var b=parseInt(prompt("Enter a 2nd Value:"));
var ch=parseInt(prompt(" Enter a Choice:"));
switch(ch)
{
    case 1:
        var c=a+b;
        alert(c);
        break;
    case 2:
        var c=a*b;
        alert(c);
        break;
    case 3:
        var c=a-b;
        alert(c);
        break;
    default:
        alert("Invalid Choice");
        break;
}
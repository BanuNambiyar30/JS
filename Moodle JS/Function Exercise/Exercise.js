// function findLargest()
// {
//     var num1=9;
//     var num2=11;
//     var num3=16;
//     if(num1>num2&&num1>num3)
//     {
//       console.log('num1 is greater '+num1);
//     }
//     else if(num2>num1&&num2>num3)
//     {
//         console.log('num2 is greater '+num2);
//     }
//     else if(num3>num1&&num3>num2)
//     {
//         console.log('num3 is greater '+num3);
//     }
//     else
//     {
//         console.log('Invalid');
//     }
// }
// findLargest();

// var side1=3;
// var side2=3;
// var side3=2;
// if(side1==side2&&side1==side3)
// {
//     console.log('Equilateral triangle');
// }
// else if(side1==side2||side1==side3)
// {
//     console.log('Isosceles triangle.');
// }
// else
// {
//     console.log('Scalene triangle.');
// }

// var num1=parseInt(prompt('Enter a value'));
// function checkInRange()
// {
//     var startValue=15;
//     var endValue=30;
//     if(num1>=startValue&&num1<=endValue)
//     {
//         console.log('Between the range');
//     }
//     else
//     {
//         console.log('Outside the range');
//     }
// }
// checkInRange();

// var operator=prompt('Enter any Operator');
// function evaluNumbers()
// {
//     var num1=5;
//     var num2=4;
//     var valueOf;
//  if(operator=='+')
//  {
//     valueOf=num1+num2;
//     console.log(valueOf+' If operation is “add”'); 
//  }
//  else if(operator=='-') 
//  {
//     valueOf=num1-num2;
//     console.log(valueOf+' If operation is “subtract”');
//  }
//  else if(operator=='*') 
//  {
//     valueOf=num1*num2;
//     console.log(valueOf+' If operation is “multiply”');
//  }
//  else if(operator=='/') 
//  {
//     valueOf=num1/num2;
//     console.log(valueOf+' If operation is “divide”');
//  }
//  else if(operator=='%') 
//  {
//     valueOf=num1%num2;
//     console.log(valueOf+' If operation is “modulus”');
//  }
//  else 
//  {
//     console.log('Invalid operation');
//  }
// }
// evaluNumbers();

// var year=prompt("Enter a Year:");
// function checkLeapYear(yearCal)
// {
//    if ((0 == yearCal % 4) && (0 != yearCal% 100) || (0 == yearCal % 400)) {
//       console.log(yearCal + ' is a leap year');
//   } else {
//       console.log(yearCal + ' is not a leap year');
//   }
// }
// checkLeapYear(year);


// var stuMarks=parseInt(prompt('Enter your Mark:'));
// function findGrade()
// {
//    if(stuMarks>=90&&stuMarks<=100)
//    {
//       console.log('S grade');
//    }
//    else if(stuMarks>=80&&stuMarks<90)
//    {
//       console.log('A grade');
//    }
//    else if(stuMarks>=70&&stuMarks<80)
//    {
//       console.log('B grade');
//    }
//    else if(stuMarks>=60&&stuMarks<70)
//    {
//       console.log('C grade');
//    }
//    else if(stuMarks>=50&&stuMarks<60)
//    {
//       console.log('D grade');
//    }
//    else if(stuMarks>=40&&stuMarks<50)
//    {
//       console.log('E grade');
//    }
//    else if(stuMarks>=0&&stuMarks<40)
//    {
//       console.log('Student has failed');
//    }
//    else
//    {
//       console.log('Invalid marks');
//    }
// }
// findGrade();

function findDaysInMonth(putMonth,putYear)
{
    if(putMonth<=12)
    {
        if(putMonth==2)
        {
            if((putYear%4==0)&&(putYear%100!=0)||(putYear%400==0))
            {
                console.log('The month has 29 Days.');
            }
            else
            {
                console.log('The month has 28 Days.');
            }
        }    
        else if((putMonth==4)||(putMonth==6)||(putMonth==9)||(putMonth==11))
        {
            console.log('The month has 30 Days');
        }
        else
        {
            console.log('The month has 31 Days');
        }
    }
    else
    {
           console.log('Invalid');
    }
}
findDaysInMonth(2,2012);
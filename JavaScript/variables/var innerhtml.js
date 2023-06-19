var firstName='Banupriya NS';
var ageNo=25;
var dob='30/11/1998';
var nativePlace='Madurai';
var favColor='Blue';
var paragraphId=document.getElementById('paraId');
var paraDoc=document.getElementById('paraId1');
var para1=document.getElementById('paraId2');
var para2=document.getElementById('paraId3');
var para3=document.getElementById('paraId4');

paragraphId.innerHTML='Name:'+firstName;
paragraphId.style.fontStyle='italic';
paragraphId.style.color='green';
paragraphId.style.fontSize='20px';

paraDoc.innerHTML='Age:'+ageNo;
paraDoc.style.color='red';
paraDoc.style.fontSize='20px';

para1.innerHTML='DOB:'+dob;
para1.style.textDecoration='underline';
para1.style.color='pink';
para1.style.fontSize='20px';

para2.innerHTML='Native:'+nativePlace;
para2.style.fontWeight='bold';
para2.style.fontSize='20px';
para2.style.color='orange';

para3.innerHTML='FavoriteColor:'+favColor;
para3.style.color='blue';
para3.style.fontSize='20px';
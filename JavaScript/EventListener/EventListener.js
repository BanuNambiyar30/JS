// without event listener:

function f1(){
    alert('before');
}
function f2(){
    alert('after');
}
btn1.onclick=f1;
btn1.onclick=f2;

// with event listener:

btn2.addEventListener("click",f1);
btn2.addEventListener("click",f2);
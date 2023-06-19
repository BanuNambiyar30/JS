// function paraFunction(){
//       document.getElementById("para1").textContent="Sucessfully Stored Your Data..";
//    document.getElementById("para1").style.color="green";
//    document.getElementById("para1").style.textShadow="1px 1px red";
//       document.getElementById("para1").style.color="green";
//       document.getElementById("para1").style.backgroundColor="yellow";
//       setTimeout(() => document.getElementById("para1").style.background="pink",1000);
// }

     //create an input element onclick:

// const btn = document.createElement("button");
// btn.innerHTML="Start";
// document.body.appendChild(btn);

// const ipt= document.createElement("input");
// ipt.placeholder="enter your name";
// document.body.appendChild(ipt);

//set attribute:

// function setAtt() {
// var newline=document.createElement("br");
// document.body.appendChild(newline);
// var x = document.createElement("input");
// x.setAttribute("type","text");
// x.setAttribute("value","Hello World!");
// x.setAttribute("id","re");
// x.style.color="pink";
// x.style.fontSize="16px";
// x.style.fontFamily="Arial";
// document.body.appendChild(x);
// var newline=document.createElement("br");
// document.body.appendChild(newline);
// }
// function rem(){
//      var remo=document.getElementById("re");
//      remo.remove();
//      }

// function rem(){
//      var chocolates=document.getElementById('chocoList');
//      if(chocolates.lastChild){
//           chocolates.lastChild.remove();
//      }
// }

//Get Atrribute:
function banupriya(){
     var b=document.getElementById("ip").getAttribute("placeholder");
     document.getElementById("banu").innerHTML=b;
}

var rightClick=document.getElementById('res_con');
rightClick.addEventListener("contextmenu",conMenu);
function conMenu(arg){
    arg.preventDefault();
    alert("Right-click here is prohibited");
}

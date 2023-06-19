var flower=["Rose","Sunflower","Lily","Jasmine"];
// flower.push("Tulips");
// flower.unshift("Marigold");
// flower.pop();
// document.getElementById("arr").innerHTML=flower;

//array splice 

document.write(flower);
document.write("<br>----------------<br>");
flower.splice(0,1);
document.write(flower);
document.write("<br>----------------<br>");
flower.splice(0,2,"Lotus","Daisy");
document.write(flower);
document.write("<br>----------------<br>");
document.write(flower[1]);
document.write("<br>----------------<br>");
document.write(flower[flower.length-1]);








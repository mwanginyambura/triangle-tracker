function sides(){
var sidex= document.getElementById('x').value;
var sidey= document.getElementById('y').value;
var sidez= document.getElementById('z').value;

var x= parseInt(sidex);
var y= parseInt(sidey);
var z= parseInt(sidez);
if(x+y>z && y+z>x && z+x>y){
  if (x===y && y===z && x===z){
  alert("equilateral triangle");
  }else if (x===y || y===z || x===z){
  alert("isoscele triangle");
  }else if (x!==y || y!==z || x!==z){
  alert("scalene triangle");
  }
}else{
  alert("Not a triangle")
}
}

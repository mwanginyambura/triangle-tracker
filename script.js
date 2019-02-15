function sides(){
var sidex= Document.getElementById('x').value();
var sidey= Document.getElementById('y').value();
var sidez= Document.getElementById('z').value();

var x= parseInt(sidex);
var y= parseInt(sidey);
var z=parseInt(sidez);
if x===y && y===z && x===z;
alert("equiateral triangle");
}

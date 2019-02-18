// // Business Logic
// function sides(sidex,sidey,sidez){
// var sidex= document.getElementById('x').value;
// var sidey= document.getElementById('y').value;
// var sidez= document.getElementById('z').value;
//
// var x= parseInt(sidex);
// var y= parseInt(sidey);
// var z= parseInt(sidez);
// if(x+y>z && y+z>x && z+x>y){
//  if (x===y && y===z && x===z){
//  alert("equilateral triangle");
//  return "equilateral triangle";
//  }else if (x===y || y===z || x===z){
//  alert("isoscele triangle");
//  return "isoscele triangle";
//  }else if (x!==y || y!==z || x!==z){
//  alert("scalene triangle");
//  return "scalene triangle";
//  }
// }else{
//  alert("Not a triangle");
//  return "Not a triangle";
// }
// }
//
// $(document).ready(function() {
//
// 	$("#put").submit(function(event){
// 	$("#result").text("");
// 	var sideX = parseInt($("input#x").val());
//     var sideY = parseInt($("input#y").val());
//     var sideZ = parseInt($("input#z").val());
//     var result = sides(sideX,sideY,sideZ);
//
//     $("#result").append(result);
//     sideOne = parseInt($("input#x").val(""));
//     sideTwo = parseInt($("input#y").val(""));
//     sideThree = parseInt($("input#z").val(""));
//
// 	event.preventDefault();
// 	});
// });

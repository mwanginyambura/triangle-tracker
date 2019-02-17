function sides() {
  var sidex = parseInt(document.getElementById('x').value);
  var sidey = parseInt(document.getElementById('y').value);
  var sidez = parseInt(document.getElementById('z').value);

  if (sidex + sidey > sidez && sidey + sidez > sidex && sidez + sidex > sidey) {
    if (sidex == sidey && sidey == sidez && sidex == sidez) {
      alert("equilateral triangle");
      // return "equilateral triangle";
    }
    // else if (x===y || y===z || x===z){
    //   alert("isoscele triangle");
    //   return "isoscele triangle";
    //   }
    else if (sidex != sidey && sidey != sidez && sidex != sidez) {
      alert("scalene triangle");
      // return "scalen triangle";
    } else {
      alert("this is an isosceles");
      // return "this is an isosceles";
    }
  } else {
    alert("Not a triangle");
    // return "Not a triangle"
  }
}

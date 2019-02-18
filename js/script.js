function sides() {
  var sidex = parseInt(document.getElementById('x').value);
  var sidey = parseInt(document.getElementById('y').value);
  var sidez = parseInt(document.getElementById('z').value);

  var result = document.querySelector("#result");


  result.innerHTML = "";
  if (sidex + sidey > sidez && sidey + sidez > sidex && sidez + sidex > sidey) {
    if (sidex == sidey && sidey == sidez && sidex == sidez) {
      result.innerHTML = "equilateral triangle";

    } else if (sidex != sidey && sidey != sidez && sidex != sidez) {
      result.innerHTML = "scalene triangle";
      // return "scalen triangle";
      console.log(result);

    } else {
      result.innerHTML = "isosceles triangle";

      // return "this is an isosceles";
      console.log(result);

    }
  } else {
    // console.log("oops");
    result.innerHTML = "not a triangle";

    // return "Not a triangle"
  }
}

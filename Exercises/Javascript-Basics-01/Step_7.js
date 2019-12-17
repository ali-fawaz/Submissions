function f() {
  var shoe_size = document.getElementById("shoe_size").value;
  var year = document.getElementById("year").value;
  var mult = (shoe_size * 2 + 5) * 50;
  var result = mult - year + 1766;

  alert("The result is :" + result);
}

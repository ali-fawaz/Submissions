function division() {
  var first_number = document.getElementById("first_number").value;
  var second_number = document.getElementById("second_number").value;
  var div = first_number / second_number;
  var remainder = first_number % second_number;

  alert("The answer is :" + div);
  alert("The remainder is :" + remainder);
}

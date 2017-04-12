var numbers = [];

function submitForm() {
  event.preventDefault();
  var newNumber = document.numberForm.number.value;
  if (isNaN(newNumber)) {
    alert("This is not a valid number.")
  } else {
    numbers.push(newNumber);
    updateResults();
  }
  document.numberForm.number.value = "";
}

function resetForm() {
  event.preventDefault();
  document.numberForm.number.value = "";
  numbers = [];
  updateResults();
  document.getElementById("average").innerHTML = 0;
}

function updateResults() {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }
  document.getElementById("count").innerHTML = numbers.length;
  document.getElementById("sum").innerHTML = total;
  document.getElementById("average").innerHTML = total / numbers.length;
}
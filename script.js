let rIndex,
  box = document.getElementById('calc-box');

// check the empty input
function checkEmptyInput() {
  let isEmpty = false,
    grade1 = document.getElementById('grade1').value,
    grade2 = document.getElementById('grade2').value,
    grade3 = document.getElementById('grade3').value,
    grade4 = document.getElementById('grade4').value;

  if (grade1 === '') {
    alert('O campo 1ª Nota" não pode está vazia');
    isEmpty = true;
  } else if (grade2 === '') {
    alert('O campo "2ª Nota" não pode está vazia');
    isEmpty = true;
  } else if (grade3 === '') {
    alert('O campo "3ª Nota" não pode está vazia');
    isEmpty = true;
  } else if (grade4 === '') {
    alert('O campo "4ª Nota" não pode está vazia');
    isEmpty = true;
  }
  return isEmpty;
}

var grade1 = document.getElementById('grade1');
var grade2 = document.getElementById('grade2');
var grade3 = document.getElementById('grade3');
var grade4 = document.getElementById('grade4');
var calResult = document.getElementById('calResult');
var txtMedia = document.getElementById('average');

calResult.addEventListener('click', function (event) {
  var valor01 = grade1.valueAsNumber || 0;
  var valor02 = grade2.valueAsNumber || 0;
  var valor03 = grade3.valueAsNumber || 0;
  var valor04 = grade4.valueAsNumber || 0;

  average.value = (valor01 + valor02 + valor03 + valor04) / 4;
});

// place approved or disapproved in the "Resultado Final" field when the "Frequência" field is filled
calResult.addEventListener('click', function (event) {
  var average = document.getElementById('average');
  var result = document.getElementById('final-result');

  var minapproved = '7';

  if (average.value >= minapproved) {
    result.value = 'Aprovado';
  } else {
    result.value = 'Reprovado';
  }
});

calResult.addEventListener('click', function (event) {
  var average = document.getElementById('average');
  var result = document.getElementById('final-result');

  var minapproved = '7';

  if (average.value >= minapproved) {
    result.style.color = 'green';
  } else {
    result.style.color = 'red';
  }
});

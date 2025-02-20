let numbers = [];
for (let i = 1; i < 77; i++) {
  numbers.push(i);
}
console.log(numbers);

const createCellNumber = function () {
  for (let i = 0; i < numbers.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('casellanumerata');
    cell.innerText = i + 1;

    cellInsert = document.getElementById('tabellone');
    cellInsert.appendChild(cell);
  }
};
createCellNumber();

const estrazione = function () {
  let numero = Math.floor(Math.random() * 76) + 1;
  while (numeriEstratti.includes(numero)) {
    numero = Math.floor(Math.random() * 76) + 1;
  }
  numeriEstratti.push(numero);
  return numero;
};
estrazione();

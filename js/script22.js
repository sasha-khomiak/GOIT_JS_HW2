// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max.

//ТЕСТИ

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   // Change code above this line
//   return numbers;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (var i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

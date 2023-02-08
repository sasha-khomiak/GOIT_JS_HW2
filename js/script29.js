// Напиши функцію getEvenNumbers(start, end),
// яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

//ТЕСТИ

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function getEvenNumbers(start, end) {
//    // Change code below this line

//     // Change code above this line
//   }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function getEvenNumbers(start, end) {
  // Change code below this line
  let arr = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
  // Change code above this line
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));

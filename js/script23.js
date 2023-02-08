// Напиши функцію filterArray(numbers, value),
// яка приймає масив чисел(параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers,
// які більші за значення параметра value(число).

//ТЕСТИ

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function filterArray(numbers, value) {
//    // Change code below this line

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function filterArray(numbers, value) {
  // Change code below this line

  const arr = [];

  for (let i of numbers) {
    if (i > value) {
      arr.push(i);
    }
  }
  return arr;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

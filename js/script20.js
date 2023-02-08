// Напиши функцію calculateTotalPrice(order), яка приймає один
// параметр order - масив чисел, і обчислює загальну суму його
// елементів.Загальна сума елементів повинна зберігатися у змінній
// total, яка повертається як результат роботи функції.

//ТЕСТИ

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // Change code above this line
//   return total;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // Change code above this line
  for (const i of order) {
    total += i;
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

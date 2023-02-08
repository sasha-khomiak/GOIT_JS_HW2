// Напиши функцію calculateTotal(number), яка приймає ціле
// число(параметр number) і повертає суму всіх цілих чисел
// від одиниці і до цього числа.Наприклад, якщо number
// дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

//ТЕСТИ

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function calculateTotal(number) {
//  // Change code below this line

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function calculateTotal(number) {
  // Change code below this line

  var sum = 0;

  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }

  return sum;
  // Change code above this line
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

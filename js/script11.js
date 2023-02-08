// Сервісу гравірування прикрас потрібна функція, яка б автоматично
// рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає рядок, що складається зі слів, розділених
// лише пробілами(параметр message) та ціну гравірування одного
// слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість
// гравірування усіх слів в рядку.

//ТЕСТИ

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const numberWords = words.length;
  const totalPrice = numberWords * pricePerWord;
  return totalPrice;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

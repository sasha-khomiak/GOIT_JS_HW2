// Оголоси дві зміні:

// Ім'я змінної -> Очікуване значення
// lastElementIndex -> Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement -> Значення останнього елемента масиву

//ТЕСТИ

// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// ------------------ВИКОНАНИЙ КОД ----------------------//

const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// Change code below this line

console.log(lastElementIndex);
console.log(lastElement);

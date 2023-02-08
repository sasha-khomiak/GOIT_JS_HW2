// Напиши функцію getExtremeElements(array),
// яка приймає один параметр array - масив елементів
// довільної довжини.Функція повинна повертати масив
// з двох елементів - першого і останнього елемента параметра array.

//ТЕСТИ

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function getExtremeElements(array) {
//    Change code below this line

//    Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function getExtremeElements(array) {
  const arr = [];
  arr[0] = array[0];
  arr[1] = array[array.length - 1];

  return arr;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.table(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.table(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
console.table(getExtremeElements(["apple", "peach", "pear", "banana"]));

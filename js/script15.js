// Доповни код таким чином, щоб у змінній allClients утворився
// масив усіх елементів масивів oldClients і newClients.

//ТЕСТИ

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = ; // Change this line

// ------------------ВИКОНАНИЙ КОД ----------------------//

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line

console.log(oldClients);
console.log(newClients);
console.log(allClients);

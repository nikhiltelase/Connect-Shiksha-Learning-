//--------------task-1-----------------

// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];


//--------------task-2-----------------
// let numbers = [10, 20, 30, 40, 50];
// console.log([numbers[2]])


//--------------task-3-----------------
// let animal = ["cat", "dog", "rabbit"];
// animal.push("horse")
// console.log(animal)


//--------------task-4-----------------
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
// let threeMonths = months.slice(0, 3)
// console.log(threeMonths)


//--------------task-5-----------------
// let numbers = [5, 3, 2, 6, 8, 9, 3487, 364, 37];

// // Sorting in ascending order
// let ascendingOrder = numbers.sort(function(a, b){return a-b})
// console.log("Ascending Order:", ascendingOrder);

// // Sorting in descending order
// let descendingOrder = numbers.sort(function(a, b){return b-a})
// console.log("Descending Order:", descendingOrder);


//--------------task-6-----------------
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let array = arr1.concat(arr2);
// console.log(array)


//--------------task-7-----------------
let numbers = [1, 2, 3, 4, 5];

console.log("Using for...of loop:");

for (let num of numbers) {
  console.log(num);
}

console.log("Using forEach() method:");

numbers.forEach(function(num) {
  console.log(num);
});

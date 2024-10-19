// ----- array methods -----
////////////////////////////////////////////

let array1 = ["Ranil", "Namal", "Sajith"];
console.log(array1);

// push - Adds one or more elements to the end of an array and returns thenew length of the array.
array1.push("AKD");
console.log(array1);

array1.push("Dlith");
console.log(array1);

///////////////////////////////////////////

// pop - Removes the last element from an array and returns that element.
array1.pop();
console.log(array1);

///////////////////////////////////////////

// shift - Removes the first element from an array and returns that element.
array1.shift();
console.log(array1);

///////////////////////////////////////////

// unshift - Adds one or more elements to the beginning of an array and returns the new length of the array.
array1.unshift("Ranjan");
console.log(array1);

array1.unshift("Prasad", "Yasendra");
console.log(array1);

///////////////////////////////////////////

let number_array1 = [1, 2, 3];
let number_array2 = [4, 5, 6, 7, 8, 9, 10];

// concat - Joins two or more arrays and returns a new array.
let number_array_result = number_array1.concat(number_array2);
console.log("number_array1: ", number_array1);
console.log("number_array2: ", number_array2);
console.log("number_array_result: ", number_array_result);

number_array_result = number_array2.concat(number_array1);
console.log("number_array_result_2: ", number_array_result);

///////////////////////////////////////////

// slice - Returns a shallow copy of a portion of an array into a new array.
let my_number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let copy1 = my_number_array.slice(2);
console.log("Copy1: ", copy1); // [3, 4, 5, 6, 7, 8, 9, 10]

let copy2 = my_number_array.slice(2, 6);
console.log("Copy2: ", copy2); // [3, 4, 5, 6]

let copy3 = my_number_array.slice(-1);
console.log("Copy3: ", copy3); // [10]

let copy4 = my_number_array.slice(-2);
console.log("Copy4: ", copy4); // [9, 10]

let copy5 = my_number_array.slice(-5);
console.log("Copy5: ", copy5); // [6, 7, 8, 9, 10]

// ---- shallow copy

// let new_my_number_array = my_number_array;

let new_my_number_array = my_number_array.slice(0);

console.log("my_number_array: ", my_number_array);
console.log("New my_number_array: ", new_my_number_array);

new_my_number_array[0] = 100;

console.log("my_number_array: ", my_number_array);
console.log("New my_number_array: ", new_my_number_array);

///////////////////////////////////////////

// splice - Adds or removes elements from an array at a specified position.

let new_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// new_array.splice(7);
// console.log("Splice 1: ", new_array);

// new_array.splice(3, 4);
// console.log("Splice 2: ", new_array);

new_array.splice(1, 1, "hello", "hi", "Sri Lanka", "IJSE", true, "ICT");
console.log("Splice 3: ", new_array);

///////////////////////////////////////////

// sort - Sorts the elements of an array in place and returns the array.
let arr1 = [10, 40, 50, 20, 70, 60, 80, 30];
let sorted_array = arr1.sort();
console.log("Sorted Array: ", sorted_array);

///////////////////////////////////////////

// reverse - Reverses the order of the elements in an array.
let arr2 = ["A", "B", "C"];
let reversed_array = arr2.reverse();
console.log("Reversed Array: ", reversed_array);

///////////////////////////////////////////

// indexOf
let arr3 = ["USA", "UK", "SL", "UAE", "SL"];

let idx1 = arr3.indexOf("UK");
console.log("UK: ", idx1);

let idx2 = arr3.indexOf("UAE");
console.log("UAE: ", idx2);

let idx3 = arr3.indexOf("SL");
console.log("SL: ", idx3);

///////////////////////////////////////////

// lastIndexOf

let idx4 = arr3.lastIndexOf("SL");
console.log("Last SL: ", idx4); // 4

///////////////////////////////////////////

// includes
let arr4 = [1, 2, "Hello", true, "hi"];
// let includeHello = arr4.includes("Hello");
let includeHello = arr4.includes("hello");
console.log("includeHello: ", includeHello);

///////////////////////////////////////////

// filter
let arr5 = [2, 5, 7, 8, 9, 11, 12];

let filtered_array = arr5.filter(function (item) {
    return item%2==0;
})

console.log("Filtered Array: ", filtered_array);

///////////////////////////////////////////

// map

let arr6 = ["USA", "India", "Japan", "Sri Lanka", "Russia"];
// for(let i = 0; i<arr6.length; i++) {
//     console.log(arr6[i]);
// }

arr6.map((item, index) => {
    console.log(index + ": " + item);
});

///////////////////////////////////////////

let arr7 = ["A", "B", "C", "D", "E"];
console.log("ToString: ", arr7.toString());

// 1. Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function checkScope() {
    var a = "Var declared";       
    let b = "let declared";       
    const c = "const declared";   

    if (true) {
        var a = "Var redeclared";     
        let b = "Let redeclared";     
        const c = "const redeclared"; 

        console.log("1. Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}

checkScope();

//2.Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
var fruits=["guava","banana","mango","chikoo","pineapple"];
function secondElement(array){
    return array[1];
}
console.log("2. second element of fruits array is ",secondElement(fruits));

//3. Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
function pushPopExample(arr){
    arr.push("new item");
    arr.pop();
    return arr;
}
console.log("3. ",pushPopExample([1,2,3,4]));

//4. Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
var numbers=[1,2,3,4];
function squareNumbers(arr){
    return arr.map(n=>n*n);
}
console.log("4. squared numbers :",squareNumbers(numbers));

//5. Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

function oddNumbers(arr){
    return arr.filter(n=>n%2!==0);
}
console.log("5. Odd numbers :",oddNumbers([1,2,3,4,5,6,7,8,9]));

//6. Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

let person1 = {
  name: "Pratik",
  age: 34,
  occupation: "Choreographer"
};
function greetPerson(p) {
  console.log(`6. Hello, my name is ${p.name}. I am ${p.age} years old and I work as a ${p.occupation}.`);
}
greetPerson(person1);

//7. Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
function getArea(rectangle) {
  return rectangle.width * rectangle.height;
}

let myRectangle = {
  width: 20,
  height: 20};

console.log("7. Area of rectangle:", getArea(myRectangle)); // Output: 50

//8. Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
function getObjectKeys(obj) {
  return Object.keys(obj);
}


let person2 = {
  name: "Snehal",
  age: 30,
  occupation: "Doctor"
};

console.log("8. ",getObjectKeys(person2)); 

//9. Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

let objectA = { name: "Snehal", age: 30 };
let objectB = { occupation: "Doctor", country: "India" };

let merged = mergeObjects(objectA, objectB);
console.log("9. ",merged);

//10. Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.
function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

let nums = [10, 20, 30, 40];

console.log("10. Sum of numbers:", sumArray(nums)); // Output: 100
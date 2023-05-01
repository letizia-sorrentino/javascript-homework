
// 1. In a series of variables store:
// A string
// A number
// A Boolean

var myName = 'Letizia';

var myAge = 41;

var IamHappy = true;

console.log(IamHappy);


// 2. Add two numbers

var sum = 2 + 2;

console.log(sum);


// 3. Use the shorthand to add 1 to a number
//sum += 1;
sum+++
console.log(sum);

// 4. Use the shorthand to remove 1 from a number
//sum -= 1;
sum---
console.log(sum);

// 5. Concatenate two string

var concatenate = 'Hello ' + 'World';

console.log(concatenate);


// 6. Create an IF statement which checks if a variable matches another variable, 
//if so it should console log a message


if (myAge >= 35) {
    console.log(true);
}

else {
    console.log(false);
}

41

//Correction

let time;
let lunchTime;

function checkTime(time, lunchTime) {

if (time === lunchTime) {
    console.log ('Time to have lunch');
}

else {
    console.log('Time to rest.');
};

}

checkTime(12, 12);

// 7. Extend one of the IF statements to check if two things are true, 
//if so show a message

if (myAge >= 35 && myAge <= 45) {
    console.log(true);
}

else {
    console.log(false);
}

41

// 8. Store in a variable someone’s name, age and height. 
//Choose between an object and an array.

var avatar = {
    name: 'Letizia',
    age: 41,
    height: 165,
};

console.log(avatar);

// Create a function that accepts two numbers, adds them and returns the result

const add = (x, y) => {
    console.log(x + y);
};

add(2, 2)

// Create a defensive check inside the function that handles if the inputs to the function are invalid/non existent

const sayHello = (myName, myAge) => {
    if (typeof myName !== 'string' || typeof myAge !== 'number') {
        return;
    }

    return `Hello, my name is ${myName} and I am ${myAge}.`;
}

console.log(sayHello(myName, myAge));

const sumUp = (x, y) => {
    if (typeof x !== 'number' || y !== 'number') {
        return;
    } 
    return x + y;
}

const result = sumUp(2, '2');
console.log(result);


// Create an array containing a few items

var myArray = ['bread', 'milk', 'coffee']
console.log(myArray);

// Loop over the array using:
//for of
//for each
//for (the full blown one)


for (var element of myArray) {
    console.log(element);
}

myArray.forEach(element => console.log(element));


for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Create an object

const newObject = {
    hair: 'brown',
    eyes: 'brown',
    height: 165,
}

console.log(newObject);

// Add an item to the above object (using . syntax)
newObject.name = 'Letizia';
console.log(newObject);

// Add an item to the above object dynamically (using the [] syntax)
var item = 'age';
newObject[item] = '41';
console.log(newObject);

// Loop over the object using for in
for (var key in newObject) {
    console.log(newObject[key]);
}

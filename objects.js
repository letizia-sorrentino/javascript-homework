//1. Create a function in a second file, use export to export it
// see utils.js and index.html

//2. In your main file import and execute the function
import { multiply } from './utils.js';
console.log(multiply(2, 2));

//3. Write out a fat arrow function using the same line to return (as in no return keyword)
//4. Add default parameters to the above function
const add = (x = 2, y = 1) => {return x + y;};
console.log(add());
//5. Create an object that has a child object, that itself has a child object (3 levels).
const car = {
    color: 'green',
    make: 'Fiat',
    model:'500',
    engine: {
        type: 'Hybrid',
        energy: {fuel: 'electricity', emissions: 'low'},
    }
}
//6. Use object destructuring to pull out the parts at level 3
const {energy} = car.engine;
//console.log(energy);

//7. Add a default value to the above destructuring
//const {fuel, emissions= "very low", battery="lithium"} = energy;
console.log(energy);

//8. Destructure an array
const fruits = ['banana', 'apple', 'pear'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
//9. Create two objects. Add more than two keys/values to both objects. 
//Copy all the items from the first object into the second object. Use the spread operator.
const dog = {
    color: 'black',
    ears: 'pointy',
    food: 'chicken',
};

const cat = {
    fur: 'short',
    eyes: 'green',
    tail: 'long'
};

const newAnimal = {...dog, ...cat};
console.log(newAnimal);

//10. Send 5 arguments to a function and use the rest operator to group them
const data = {a: 'A', b:'B', c:'C'};
const getFunc = () => {
return {...data, d:'D', e:'E'};
}
console.log(getFunc());  

//11. Add a function to one of the objects, use the object method shorthand.  
function favFood() {
    console.log(`my favorite food is ${this.food}`);
  };

dog.favFood = favFood;

dog.favFood();



//1. Create a function in a second file, use export to export it
// see utils.js and index.html

//2. In your main file import and execute the function
//import { multiply } from './week4-utils.js';
//console.log(multiply(2, 2));

//3. Write out a fat arrow function using the same line to return (as in no return keyword)
//4. Add default parameters to the above function
const add = (x = 2, y = 1) => { return x + y; };
console.log(add());
//5. Create an object that has a child object, that itself has a child object (3 levels).
const car = {
    color: 'green',
    make: 'Fiat',
    model: '500',
    engine: {
        type: 'Hybrid',
        energy: { fuel: 'electricity', emissions: 'low emissions' },
    }
}
//6. Use object destructuring to pull out the parts at level 3
const { fuel, emissions } = car.engine.energy;
console.log(fuel, emissions);

//7. Add a default value to the above destructuring
car.engine.energy.battery = 'lithium';
console.log(car.engine.energy);

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
    get favFood() {
        return this.food;
    }
};

const cat = {
    fur: 'short',
    eyes: 'green',
    tail: 'long'
};

const newAnimal = { ...dog, ...cat };
console.log(newAnimal);

//10. Send 5 arguments to a function and use the rest operator to group them
const args = { a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' };

const spread = (...args) => {
    return args;
}

console.log(spread());

//11. Add a function to one of the objects, use the object method shorthand.  
console.log(dog.favFood);



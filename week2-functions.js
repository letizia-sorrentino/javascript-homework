// 1.	Create a function, inside the function add a second function, and again add a third function into the second function.
// 2.	Create 3 variables.
// 3.	Define 3 the variables in the correct place so that:
//  a.	The first variable is accessible inside every function.
//  b.	The second variable is accessible inside the second and third function only.
//  c.	The third variable is accessible inside the third function only.
// 4.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// 5.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.

function first() {
    var one = 'one';
    console.log(one);

    function second() {
        var two = 'two';
        console.log(one, two);

        function third() {
            let three = 'three';
            four = 'four';
            console.log(one, two, three, four);

            {
                let five = 'five';
                console.log(five);
            };

        };
        third();
    };
    second();
};
first();

// 6. Create an object which contains a function which console.logs this.something, where something is any name you like.

const person = {
    firstName: 'Letizia',
    sayHello: function () {
        console.log(`Hello ${this.firstName}!`)
    }
};

person.sayHello();

// 7. Create an object that contains information about the make/model of a car
const car = {
    make: 'BMW',
    model: 'Mini',
}

// 8. Create a function outside the object which returns the make/model of the car
const type = function () {
    return this.make + " " + this.model;
};

// 9. Insert a reference to the function into the object created
//Object.defineProperty(car, 'type', {type: type});
car.type = type;

// 10. Invoke the method on the object (you should see the make/model)
console.log(car.type);

// 11. Use call to execute the function using a different context
console.log(car.type.call({make: 'FIAT', model: '500',}));

// 12. Use bind to create an instance of the function that is bound to a different object
const car2 = {
    make: 'FIAT',
    model: '500',
};

let type2 = car.type.bind(car2);

console.log(car.type.call(car2));

// 13. Use a try/catch block to ensure you understand the syntax
try {
    console.log(ciao)
}
catch (error) {
    console.log('That did not work, but it did not crash');
} finally {
    console.log('I always run')
};

// 14. Create a timer that runs once
function handler() {
    console.log('Handler ran as a result of a timer.');
}

const myTimeout = setTimeout(handler, 1500);
console.log('Handler ran only once')

function myStopFunction() {
    clearTimeout(myTimeout);
}
// 15. Create a timer that runs many times

const myTimer = setTimeout(handler, 1 * 200);
console.log('Handler ran many times.');

// 16. Clear one of the timers
setTimeout(function () { 
    clearInterval(myTimer)
}, 1500)

// 17. Use a ternary
const weather = 'rain';
const forecast = 'rain' ? 'it is going to be rainy' : 'it is going to be sunny';
console.log(forecast);
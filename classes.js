//Create a class that represents anything you like

class Animal {
    constructor(type) {
        this.animalType = type;
    }

get type() {
    return this.animalType;
}
}
const baloo = new Animal ('dog');
console.log(baloo.type);

//Create a class that extends the first class
class Dog extends Animal {
    constructor (animalType, firstName, bark) {
        super(animalType);
        this.firstName = firstName;
        this.bark = bark;
    }

   get speak() {
        return `My ${this.animalType} ${this.firstName} says ${this.bark}!`;
    }

}
const baloo1 = new Dog ('dog', 'Baloo', 'woof');
console.log(baloo1.speak);

//Create a class that extends the second class
//Make sure each class has at least one method and one piece of data unique to it

class Pet extends Dog {
    constructor (animalType, firstName, bark, food) {
        super(animalType, firstName ,bark);
        this.food = food;
    }

    set newFood (newFood) {
        this._food = newFood;
    }

    eat() {
        return `My ${this.animalType} ${this.firstName} says ${this.bark} when he eats ${this.food} or ${Pet.newFood}!`
    }
}
Pet.newFood = 'fish';
console.log(Pet.newFood);

const baloo2 = new Pet ('dog', 'Baloo', 'woof', 'chicken', 'fish');
console.log(baloo2.eat());




//Create an instance of the final class
const _instanceOfPet = new Pet ('pet','Baloo', 'Woof', 'chicken');
Pet.prototype.isHungry = function () { 
    //console.log(this.name, 'is hungry.');
    return `My ${this.animalType} ${this.firstName} says: "${this.bark}! I am hungry and I want ${this.food}!"`
}

console.log(_instanceOfPet.isHungry());

//Modify the classes above to use get/set 

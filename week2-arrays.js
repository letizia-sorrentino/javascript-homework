// 1. Create an array with 10 items
rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black', 'brown'];

// 2.  Update one of the items 
rainbowArray[0] = 'pink';
console.log(rainbowArray);

// 3. Delete half of the array
rainbowArray.splice(5, 5);
//or rainbowArray.lenght = 5;
console.log(rainbowArray);

// 4. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)   

//Pop
rainbowArray.pop();
console.log(rainbowArray);

//Push
rainbowArray.push('purple', 'turquoise', 'grey');
console.log(rainbowArray);

//Shift
rainbowArray.shift();
console.log(rainbowArray);

//Unshift
rainbowArray.unshift('neonred');
console.log(rainbowArray);

//Concatenating
const otherColours = ['beige', 'salmon'];

const newRainbow = rainbowArray.concat(otherColours);
console.log(newRainbow);

//Splicing
rainbowArray.splice(5, 1);
console.log(rainbowArray);

//Slicing
const newRainbow2 = rainbowArray.slice(0, 2);
console.log(newRainbow2);

//Reverse
const reversedArray = rainbowArray.reverse();
console.log(reversedArray);

//Join
const joinedArray = rainbowArray.join(' - ');
console.log(joinedArray);

//forEach
rainbowArray.forEach(colour => console.log(colour));

//Includes
console.log(rainbowArray.includes('yellow'));

//indexOf
console.log(rainbowArray.indexOf('grey'));

//Every 
const checkRainbow = (colour) => colour.length > 2;
console.log(rainbowArray.every(checkRainbow));

//Some 
const checkColours = (colour) => colour === 'orange';
console.log(rainbowArray.some(checkColours));

//Filter
const colourFilter = rainbowArray.filter(colour => colour.length < 5);
console.log(colourFilter);

//Find
const found = rainbowArray.find(colour => colour === 'grey');
console.log(found);

//findIndex
const colourIndex = (colour) => colour === 'neonred';
console.log(rainbowArray.findIndex(colourIndex));

//Sort
rainbowArray.sort();
console.log(rainbowArray);

//Map
const mapColours = rainbowArray.map(function (colour, index) {
    return colour + index;
});
console.log(mapColours);


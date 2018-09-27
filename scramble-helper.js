let greeting = 'The quick brown fox jumped over the lazy dog.'; //string
const arrayGreeting = greeting.split(' '); // becomes array of words
let arrayToString = arrayGreeting.join(' '); // becomes a string again
// let randomArrayItem = arrayToString;

// arrayGreeting 
// newWord = arrayGreeting[getRandomArbitrary(0, arrayGreeting.length+1)];

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


function getRandomWord(list) {
  console.log('');
  let randomIndexOne = Math.floor(Math.random()* list.length);
  let randomWordOne = list[randomIndexOne];

  let randomIndexTwo;
  let randomWordTwo;
  randomIndexTwo = Math.floor(Math.random()* list.length);

  if (randomIndexTwo === randomIndexOne) {
    randomIndexTwo = Math.floor(Math.random()* list.length);
  }
  else {
    (randomWordTwo = list[randomIndexTwo]);
  }
  console.log('index 1', randomIndexOne);
  console.log('index 2', randomIndexTwo);
  console.log('rand word 1', list[randomIndexOne]);
  console.log('rand word 3', list[randomIndexTwo]);

  list[randomIndexOne] = randomWordTwo;
  list[randomIndexTwo] = randomWordOne;
  console.log(list);
}


// Maps

const candy = new Map();
candy.set('Purple', 'Grape');
candy.set('Red', 'Strawberry');
candy.set('Green', 'Sour Apple');
candy.set('Blue', 'Blueberry');
candy.set('Pink', 'Watermelon');
// function findFlavorFromColor(flavor, color)
for (let [color, flavor] of candy) {
  console.log(`The ${flavor} flavor is colored ${color}`);
}


// Functions

function candyFlavor(color) {

  if (candy.has(color)) {
    console.log(candy.get(color));
  }
  else {
    console.log(`Sorry, that color doesn't have a flavor!`);
  }
}



// Create a function that reverses a word

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.

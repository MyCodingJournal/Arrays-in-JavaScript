//Define Array
const theBeatles = [ "John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]

//You provide a name (theBeatles), an assignment operator (=) and then a list of data, separated by commas, that should go in the Array, wrapped in []. Each bit of information is often a scalar value, but it could also be another collection.


//Define Array element
const theBeatles = [ "John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]

//The individual pieces of data inside an Array are called elements. Some people also call the elements the members. In a collection of theBeatles, the String "George Harrison" is an element.


//Define Array index
const theBeatles = [ "John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]

//Arrays provide a number that identifies each element called an index. The index for the element "Ringo Starr" above is 2.

//An Array is a list, with the items listed in a particular order, surrounded by square brackets ([]) and separated by commas:
['This', 'is', 'an', 'array', 'of', 'strings.'];
// => ["This", "is", "an", "array", "of", "strings."]

//The members or elements in an Array can be data of any type in JavaScript:
['Hello, world!', 42, null, NaN];
// => ["Hello, world!", 42, null, NaN]

//Arrays are ordered, meaning that the elements in them will always appear in the same order. This also means that the Array [1, 2, 3] is different from the Array [3, 2, 1].

//We can find out how many elements an Array contains by checking the Array's built-in length property:
const myArray = ['This', 'array', 'has', 5, 'elements'];

myArray.length;
// => 5

//rewriting lottery code-------------------------------------------
const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers (numbers) {
  console.log('Winning numbers:', numbers);
}

logWinningNumbers(winningNumbers);
// LOG: Winning numbers: [32, 9, 14, 33, 48, 5]
// => undefined

//-----------------------------------------------------------------
//Accessing an element
//To access an element, we use the computed member access operator like this: nameOfArray[index]
const winningNumbers = [32, 9, 14, 33, 48, 5];
// => undefined

winningNumbers[0];
// => 32

winningNumbers[3];
// => 33

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// => undefined
//returns number of elements
alphabet.length;//=> returns 26

// starting from index 0
alphabet[alphabet.length-1];//=> returns z

alphabet[25];//=> returns z

//-----------------------------------------------------------------
//Updating the Value of an Element
//use the computed member access operator ([]) — along with the assignment operator (=) — to update the value of an element in the array. To do that, we access the element we want then reassign that element's value using =. 

const planets = ["Mercury", "Venus", "Earth", "Mars", "Juptier", "Saturn", "Uranus", "Neptune"];

planets[4] = "Jupiter"; 

planets;
//=> ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

//Note:We are not able to reassign the array itself but we can reassign any of its elements. We can also add or delete elements. JavaScript Objects work similarly when declared using const (which isn't surprising, given that Arrays are a special type of Object).

//-----------------------------------------------------------------
//Adding an Element to the End of an Array
//Note: the the best way
planets[planets.length] = "Planet Nine"; // Why did we use planets.length here?=> at the end of the length
// => "Planet Nine"

planets;
//=> ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Planet Nine"];

//-----------------------------------------------------------------
//Nested arrays
const egregiouslyNestedArray = ['How', ['deep', ['can', ['we', ['go', ['?'], 'Pretty'], 'dang'], 'deep,'], 'it'], 'seems.'];

egregiouslyNestedArray[0];
//=> 'How'

egregiouslyNestedArray[1];
//=> [ 'deep', [ 'can', [ 'we', [Array], 'dang' ], 'deep,' ], 'it' ]

egregiouslyNestedArray[2];
//=> 'seems.'

//access the array nested inside that array? We simply add another set of brackets:
egregiouslyNestedArray[1][0];
//=> 'deep'

egregiouslyNestedArray[1][1];
//=> [ 'can', [ 'we', [ 'go', [Array], 'Pretty' ], 'dang' ], 'deep,' ]

egregiouslyNestedArray[1][2];
//=> 'it'

//Note: In general, it is best to keep your Arrays to no more than two levels deep. Two levels is perfect for representing two-dimensional things like a tic-tac-toe board:
const board = [
  ['X', 'O', ' '],
  [' ', 'X', 'O'],
  ['X', ' ', 'O']
];

board;
// => [["X", "O", " "], [" ", "X", "O"], ["X", " ", "O"]]

//The first [] operator grabs the row that we want, top (board[0]), middle (board[1]), or bottom (board[2]).
//The second [] operator specifies the column, or the square within that row: left (board[1][0]), middle (board[1][1]), or right (board[1][2]). For example:
board[0][0];
// => "X"

board[0][2];
// => " "

board[2][2];
// => "O"

//Effectively, we're using X and Y coordinates to refer to data within a two- dimensional structure.
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Mutability
//Some methods update or mutate the object they are called on; these methods are referred to as destructive. 
//Other methods, known as nondestructive methods, leave the object intact.

/////Arrays/////
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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/////Array Methods/////

// Add Elements to an Array .push() and .unshift() & Spread Operator '...'

//.push() and .unshift() These two methods work in the same way:
//they take one or more arguments (the element or elements you want to add)
//they return the length of the modified array
//they are 'destructive methods'

//The difference is that the .push() method adds elements to the end of an Array and unshift() adds them to the beginning of the array:

//.push() method adds elements to the end of an Array
const superheroes = ['Catwoman', 'She-Hulk', 'Jessica Jones'];

superheroes.push('King Kong', 'Batman');
// => 5 return the length of the modified array

superheroes;
// => [ 'Catwoman', 'She-Hulk', 'Jessica Jones', 'King Kong', 'Batman' ]

//unshift() adds them to the beginning of the array
const cities = ['New York', 'San Francisco'];

cities.unshift('Las Vegas', 'Boston', 'Chicago');
// => 5 return the length of the modified array

cities;
// => [ 'Las Vegas', 'Boston', 'Chicago', 'New York', 'San Francisco' ]

//-----------------------------------------------------------------

//Spread Operator '...' (nondesructive)
//The spread operator, which looks like an ellipsis: ..., allows us to "spread out" the elements of an existing Array into a new Array, creating a copy:

//const coolCities = ['New York', 'San Francisco'];

//const copyOfCoolCities = [...coolCities];//creating a copy of coolCities

//copyOfCoolCities;
//=> ["New York", "San Francisco"]

//spread operator comes in especially handy is when we want to add one or more new elements either before or after the elements in the original array (or both) without mutating the original array. To add an element to the front of the new array, we simply type in the new element before spreading the elements in the original array:

const coolCities = ['New York', 'San Francisco'];

const allCities = ['Los Angeles', 'Las Vegas', ...coolCities];

coolCities;
// => ["New York", "San Francisco"]

allCities;//copied with edit
// => ["Los Angeles", "Las Vegas", "New York", "San Francisco"]

//-----------------------------------------------------------------

//Remove Elements from an Array .pop() and .shift()

//As with .push() and .unshift(), these two methods work in the same way:
//they don't take any arguments
//they remove a single element
//they return the element that is removed
//they are destructive methods

//The .pop() method removes the last element in an Array:

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.pop();
// => "Sun"

days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

//The .shift() method removes the first element in an Array:

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.shift();
// => "Mon"

days;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

//-----------------------------------------------------------------

//.slice() method: To remove elements from an Array nondestructively (without mutating the original Array)

//With No Arguments
//If we don't provide any arguments, .slice() will return a copy of the original Array with all elements intact:

const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice();

primes;
// => [2, 3, 5, 7]

copyOfPrimes;
// => [2, 3, 5, 7]

//Note that creating a copy using .slice() works the same way as if you use the spread operator: they both create a shallow copy, and with both the copy points to a different object in memory than the original.

const primes = [2, 3, 5, 7];

const copyOfPrimesUsingSlice = primes.slice();

const copyOfPrimesUsingSpreadOperator = [...primes];

primes.push(11);//returns total number of elements ie.5
// => 5

primes;
// => [2, 3, 5, 7, 11]

copyOfPrimesUsingSlice;
// => [2, 3, 5, 7]

copyOfPrimesUsingSpreadOperator;
// => [2, 3, 5, 7]

//With Arguments
//We can also provide one or two arguments to .slice(): the first is the index where the slice should 'begin' and the second is the index 'before' which it should end:

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.slice(1, 5);//index 1 to before 5
// => [ 'Tue', 'Wed', 'Thu', 'Fri' ]

//no second argument- runs from the index specified till the end

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.slice(3);// 'sliced out' first 3
// => [ 'Thu', 'Fri', 'Sat', 'Sun' ]

//return a new Array with the first 'element' removed, we call .slice(1)
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.slice(1);
//// => ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] here (1) removes elements by length not index

//return an array with the last element removed 
days.slice(0,days.length -1);

//.slice() provides an easier syntax for referencing the last element (or elements) in an Array:

days.slice(-1);
// => ["Sun"] returns the 'sliced out' element counting from back

days.slice(-3);
// => ["Fri", "Sat", "Sun"]

days.slice(0, -1);
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] returns whole array except the last element. -1

//note:When we provide a negative index, the JavaScript engine knows to start counting from the last element in the Array instead of the first.

//-----------------------------------------------------------------

//.splice() performs destructive actions. Depending on how many arguments we give it, .splice() allows us to remove elements, add elements, or replace elements (or any combination of the three).

//With a Single Argument
//.splice performs by ('elements') count not index
//array.splice(start)

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.splice(2);//removes last 5 elements
// => returns element removed["Wed", "Thu", "Fri", "Sat", "Sun"]

days;
// => ["Mon", "Tue"]

//negative 'start' index with splice()
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

days.splice(-2);
// => returns elements removed counting from back ["Sat", "Sun"]

days;
// => [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ]

//With Two Arguments
//array.splice(start, deleteCount)

//two arguments to .splice(), the first is still the ('index') at which to begin splicing, and the second dictates how many elements we want to remove from the Array. For example, to remove 3 elements, starting with the element at index 2:

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

days.splice(2, 3);
//remove 3 elements, starting with the element at index 2
// => ["Wed", "Thu", "Fri"]

days;
// => ["Mon", "Tue", "Sat", "Sun"]

//Replace Elements in an Array

//.splice() with 3+ arguments
//array.splice(start, deleteCount, item1, item2, ...)

const cards = ['Ace of Spades', 'Jack of Clubs', 'Nine of Clubs', 'Nine of Diamonds', 'Three of Hearts'];

//After the first two, every additional argument passed to .splice() will be inserted into the Array at the position indicated by the first argument. 

cards.splice(2, 1, 'Ace of Clubs');
// => returns the elements removed ["Nine of Clubs"] and replaced by new element "Ace of Clubs".

cards;
// => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]

const menu = ['Jalapeno Poppers', 'Cheeseburger', 'Fish and Chips', 'French Fries', 'Onion Rings'];

menu.splice(1, 2, 'Veggie Burger', 'House Salad', 'Teriyaki Tofu');
// => ["Cheeseburger", "Fish and Chips"]

menu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]

//We aren't required to remove anything with .splice() — we can use it to insert any number of elements anywhere within an Array by passing 0 as the second argument. 

const books = ['Bleak House', 'David Copperfield', 'Our Mutual Friend'];

books.splice(2, 0, 'Great Expectations', 'Oliver Twist');
// => []
//returns an empty Array when we provide a second argument of 0. This makes sense because the return value is the set of elements that were removed, and we're telling it to remove 0 elements.
books;
// => ["Bleak House", "David Copperfield", "Great Expectations", "Oliver Twist", "Our Mutual Friend"]

//Using the Computed Member Access Operator to Replace Elements []
//easier when you only want to replace single element
//same as .splice its a destrutive method.

const cards = ['Ace of Spades', 'Jack of Clubs', 'Nine of Clubs', 'Nine of Diamonds', 'Three of Hearts'];

cards[2] = 'Ace of Clubs';//insert new element at index 2
// => "Ace of Clubs"

cards;
// => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]

//a nondestructive way to replace or add items at arbitrary points within an Array; to do it we need to combine the slice() method and the spread operator.

//Slicing and Spreading
//Combining .slice() and the spread operator allows us to replace elements nondestructively, leaving the original Array unharmed:

const menu = ['Jalapeno Poppers', 'Cheeseburger', 'Fish and Chips', 'French Fries', 'Onion Rings'];

const newMenu = [...menu.slice(0, 1), 'Veggie Burger', 'House Salad', 'Teriyaki Tofu', ...menu.slice(3)];

menu;
// => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]

newMenu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]

//-----------------------------------------------------------------
//break down of newMenu- Slicing and Spreading
const menu = ['Jalapeno Poppers', 'Cheeseburger', 'Fish and Chips', 'French Fries', 'Onion Rings'];

//...menu.slice(0,1) 
const newMenu = [...menu.slice(0,1), 'Veggie Burger', 'House Salad', 'Teriyaki Tofu']//first is the index where the slice should begin and the second is the index before which it should end, in this case is 'Jalapeno Poppers'

newMenu;
// => [ 'Jalapeno Poppers', 'Veggie Burger', 'House Salad', 'Teriyaki Tofu' ]

//...menu.slice(3) spreading from index 3 onwards from original into the new array.
const newMenu = ['Veggie Burger', 'House Salad', 'Teriyaki Tofu', ...menu.slice(3)];

newMenu;
// => 'Veggie Burger', 'House Salad', 'Teriyaki Tofu','French Fries','Onion Rings'



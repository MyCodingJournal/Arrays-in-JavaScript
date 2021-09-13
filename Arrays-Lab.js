//Arrays Lab
//Learning Goals
//Practice writing arrays
//Practice using destructive methods to manipulate arrays
//Practice using nondestructive methods to manipulate arrays

/*
destructivelyAppendCat(name)
        1) appends a cat to the end of the cats array
destructivelyPrependCat(name)
        2) prepends a cat to the beginning of the cats array
destructivelyRemoveLastCat()
        3) removes the last cat from the cats array
destructivelyRemoveFirstCat()
        4) removes the first cat from the cats array
appendCat(name)
        5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
prependCat(name)
        6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
removeLastCat()
        7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
removeFirstCat()
        8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
*/

//workings
//Array methods- block code into a function
const cats = ["Milo", "Otis", "Garfield"]
cats.push('Ralph');
cats;

//

function pushCat (){
  //const cats = ["Milo", "Otis", "Garfield"]
  let newCat = cats.push('Ralph')
  //return newCat;
  console.log(newCat)
}
pushCat(); => retuns total number of elements in array = 4

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//https://github.com/VGDJP-07/phase-0-intro-to-js-2-array-lab
//code reset the array to its original contents before each test is run

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
//describe 'cats', function; 
//is assigned an initial value of ["Milo", "Otis", "Garfield"];
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function cats() {
   return cats = ["Milo", "Otis", "Garfield"]
}
cats();

//

//describe destructivelyAppendCat(name) function;
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);

function destructivelyAppendCat(name) {
  let cats = ["Milo", "Otis", "Garfield"];
  cats.push(name);
  return cats;
}
destructivelyAppendCat('Ralph');
// => return [ 'Milo', 'Otis', 'Garfield', 'Ralph' ]

//

//describe destructivelyPrependCat(name) function;
//expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);

function destructivelyPrependCat(name) {
  let cats = ["Milo", "Otis", "Garfield"];
  cats.unshift(name)
  return cats;
}
destructivelyPrependCat('Bob');
// => return [ 'Bob', 'Milo', 'Otis', 'Garfield' ]

//

//describe destructivelyRemoveLastCat();
//expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');

function destructivelyRemoveLastCat() {
  let cats = ["Milo", "Otis", "Garfield"];
  cats.pop();
  return cats;
}
destructivelyRemoveLastCat();
// => retuns [ 'Milo', 'Otis' ]

//

//describe destructivelyRemoveFirstCat();
//expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');

function destructivelyRemoveFirstCat() {
  let cats = ["Milo", "Otis", "Garfield"];
  cats.shift();
  return cats;
}
destructivelyRemoveFirstCat();
// => return [ 'Otis', 'Garfield' ]

//

//describe appendCat(name) function;
//expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function appendCat(name) {
  let cats = ["Milo", "Otis", "Garfield"];
  let appendCat = [...cats,"Broom"];//creating a copy of cat swith spread operator
  return appendCat;
}
appendCat();// => [ 'Milo', 'Otis', 'Garfield', 'Broom' ]
//cats;// => [ 'Milo', 'Otis', 'Garfield' ]

//or solution 2
function appendCat(name) {
        let appCats = cats.slice();//creating a copy of cats with .slice()
        appCats.push('Broom');
        return appCats;
    }
appendCat();// => [ 'Milo', 'Otis', 'Garfield', 'Broom' ]
cats;// => [ 'Milo', 'Otis', 'Garfield' ]

//

//describe prependCat(name) function; 
//expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function prependCat(name) {
  const cats = ["Milo", "Otis", "Garfield"];
  let prependCat = ["Arnold",...cats,]//creating a copy of cat swith spread operator
  return prependCat;
}
prependCat();// => [ 'Arnold', 'Milo', 'Otis', 'Garfield' ]
cats;// => [ 'Milo', 'Otis', 'Garfield' ]

//or
function prependCat(name) {
        let prepCats = cats.slice();//creating a copy of cats with .slice()
        prepCats.unshift("Arnold")
        return prepCats;
    }
prependCat();// => [ 'Arnold', 'Milo', 'Otis', 'Garfield' ]
//cats;// => [ 'Milo', 'Otis', 'Garfield' ]

//

//describe removeLastCat() function;
//expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function removeLastCat() {
  let rmLastCat = cats.slice();//creating a copy of cats with .slice();
  rmLastCat.pop();
  return rmLastCat;
}
removeLastCat();// => [ 'Milo', 'Otis' ]
cats;// => [ 'Milo', 'Otis', 'Garfield' ]

//describe removeFirstCat() function;
//expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
//expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);

function removeFirstCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  let rmCat = cats.slice();//creating a copy of cats with .slice();
  rmCat.shift();
  return rmCat;
}
removeFirstCat();// => [ 'Otis', 'Garfield' ]
cats;// => [ 'Milo', 'Otis', 'Garfield' ]


//Extra practice---------------------------------------------------

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.splice(2,1,name);// start from index 2, remove count 1
  return cats;
}
destructivelyAppendCat('Ralph');// =>[ 'Milo', 'Otis', 'Ralph' ]

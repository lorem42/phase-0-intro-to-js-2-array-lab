// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   cats.push(name);
}

function destructivelyPrependCat(name) {
   cats.unshift(name);
}

function destructivelyRemoveLastCat() {
   cats.pop();
}

function destructivelyRemoveFirstCat() {
   cats.shift();
}

function appendCat(name) {
   var newArr = [...cats];
   newArr.push(name);
   return newArr;
}

function prependCat(name) {
   var newArr = [...cats];
   newArr.unshift(name);
   return newArr;
}

function removeLastCat() {
   var newArr = [...cats];
   newArr.pop();
   return newArr;
}

function removeFirstCat() {
   var newArr = [...cats];
   newArr.shift();
   return newArr;
}
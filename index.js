// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(`${name}`);
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newArray = [...cats];
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    let newArray1 = [...cats];
    newArray1.unshift(name);
    return newArray1;
}

function removeLastCat(name) {
    let newArray2 = [...cats];
    newArray2.pop(name);
    return newArray2;
}

function removeFirstCat(name) {
    let newArray3 = [...cats];
    newArray3.shift(name);
    return newArray3;
}
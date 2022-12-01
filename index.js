const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name){
    return cats.shift();
}

function appendCat() {
    var newArray = cats.slice();
    newArray.push("Broom");
    return newArray;
}

function prependCat(){
    var newArray = cats.slice();
    newArray.unshift("Arnold");
    return newArray;
}

function removeLastCat(){
    var newArray = cats.slice();
    newArray.pop();
    return newArray;
}

function removeFirstCat(){
    var newArray = cats.slice();
    newArray.shift();
    return newArray;
}
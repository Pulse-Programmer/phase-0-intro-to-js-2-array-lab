const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const copycats = [...cats, name];
    return copycats;
}

function prependCat(name) {
    const copycats = [name, ...cats];
    return copycats;
}

function removeLastCat() {
    const copycats = cats.slice(0, -1);
    return copycats;
}

function removeFirstCat() {
    const copycats = cats.slice(1);
    return copycats;
}
var a = 2;
var b = 50;
var n =2.22222;

function add(a,b) {
    return a+= b;
}

function subtract(a,b) {
    return a-= b;
}

function multiply(a,b) {
    return a*= b;
}

function divide(a,b) {
    return a/= b;
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    return parseInt(n, 10);
}


function preserveDecimal(n) {
    return parseFloat(n);
}
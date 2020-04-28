// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input == "string")
        return "Hello, " + input + "!";
    else
        return "Hello, World!";
}

function isFive(input) {
    if (parseFloat(input) === 5)
        return true;
    else
        return false;
}

function isEven(input) {
    if (input % 2 === 0)
        return true;
    else
        return false;
}

function isVowel(input) {
    return (/^[aeiouy]$/i).test(input)
}

function add() {

}
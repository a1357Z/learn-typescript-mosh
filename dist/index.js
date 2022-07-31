"use strict";
let age = 23;
if (age < 50)
    age += 10;
let sales = 123234567;
let numberUsingUnderScores = 123;
let aBoolean = true;
let anyTypeVariable;
function render(document) {
    console.log(document);
}
let stringsArray = ["A", "b"];
stringsArray.forEach(s => s.length);
let tuple = [1, 2, "ajay"];
tuple[0].toFixed();
tuple[2].includes("a");
let mySize = "l";
function checkReturnType(type) {
    if (type == 'number') {
    }
    return "a string";
}
function calculateTax(income, year = 10) {
    if (year > 10 && income > 10) {
    }
}
let employee = { name: "ajay", code: 1, retire: (date) => console.log(date) };
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight;
    }
    else {
        return weight.length;
    }
}
//# sourceMappingURL=index.js.map
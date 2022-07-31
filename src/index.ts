// tsc -v  -->  this will give the typescript compiler version

// tsc <fileName> --> the typescript compiler will compile the ts file to js

// anything js is valid in ts.

let age: number = 23;
// age = "adf" --> gives error

// tsc --init --> create a typescript configuration file

//tsc --> compile all tsc files to js

if (age < 50) age += 10;

let sales = 123_234_567; // this way we are actuall representing the number 123234567
let numberUsingUnderScores = 1_23;
let aBoolean = true;
let anyTypeVariable;  // this creates any type variable and we lose the benefit of using typescript

function render(document: object | any) {
    console.log(document)
}

// !arrays in typescript

// let numbersArray: number[] = [1, 2, 3, '4']  --> this gives error
let stringsArray: string[] = ["A", "b"];
stringsArray.forEach(s => s.length /*here we get all the methods on a string object which wont happen in js*/)

//!tuples in typescript
// arrays of fixed length with type predefined
let tuple: [number, number, string] = [1, 2, "ajay"];
tuple[0].toFixed()
tuple[2].includes("a")

//! enums

// enum Size{small = "s", medium = "m", large = "l"}  --> this is verbose in js
const enum Size { small = "s", medium = "m", large = "l" }
let mySize: Size = Size.large;


//!functions

function checkReturnType(type: string): string {
    // let x;  nounused variables
    if (type == 'number') {
        // return 1; --> this throws an error
    }
    return "a string";
}

/*
function calculateTax(income: number, year?: number){ //year is optional
    if(year > 10){ // throws error
        //do something
    }
}
*/

function calculateTax(income: number, year: number = 10) { //year with default value
    if (year > 10 && income > 10) { // throws error
        //do something
    }
}


//!objects

//#region

//? type aliases

type Employee = {
    retire: (date: Date) => void // this is the definition of argument and return types for retire method
    readonly name: string, code: number, age?: number,
}

let employee: Employee = { name: "ajay", code: 1, retire: (date: Date) => console.log(date) }

// employee.name = "vijay"  --> throws an error
// employee.age = 10 --> throws error or we can make age optional as well.

// employee.retire("asdf");  --> throws error

//#endregion

//! union types

function kgToLbs(weight: number | string): number {
    //narrowing
    if (typeof weight === "number") {
        //here we have all the number methods
        return weight
    } else {
        //methods of string
        return weight.length
    }
}

//!intersection types

let weight: number & string;

type Draggable = {
    drag: (item: number) => void
}

type Resizable = {
    resize: (item: number) => void
}

type UIElement = Draggable & Resizable;

let menu: UIElement = {
    drag: () => {
        console.log("drage");
    }, resize(item) {
        console.log(item);
    },
}

//!literal types
// let quantity: 50|51|100 = 50;

type Quantity = 50|51|100; // a literal type
let quantity: Quantity = 50;

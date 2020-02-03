//operators
//==
let a =100;
let b =100;
let result =  a==b;
console.log(`Equal result  ${result}`)

//this is bug in js language itself.
//the == compares the value portion not type portions
let x = "100" //type of x is string
let y = 100; //type of y is number

//VALE comparsion
let result1= x ==y;
//type + value comparsion : ===
let result2  = x === y;
console.log(` X AND Y result is ${result1}`)
console.log(` X AND Y result is ${result2}`)

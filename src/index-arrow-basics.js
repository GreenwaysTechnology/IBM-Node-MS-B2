
//pattern 2: ES 6 Style : arrow function

let greeter = () => {
    console.log('Greeter function');
};
//invoke
greeter();

//arrow syntax features:

//1. if function has only one line of body: Remove {}
let welcome = () => console.log('Welcome function');
welcome();

//2. Parameters and args : multiple parameter with default value

let add = (a = 1, b = 1) => {
    let c = a + b;
    console.log(`Add ${c}`);
};
add();

//3.parameters and args : single parameter without default value : remove ()
let getStock = value => console.log(value);
getStock(100);
//4: return values: if function more line of body

let calcualte = (a=1,b=1)=>{
    let c = a * b;
    return c;
};
console.log(calcualte(10,10));
//5. single arg, no default value, and return the same, no body : remove return statment

let getStatus = loggedIn => loggedIn;

console.log(getStatus(true))


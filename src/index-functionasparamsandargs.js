
//funcition
//a =x ,b=y
function add(a, b) {
    return a + b;
}
//values
add(10, 10); //passing values directly
let x = 10;
let y = 20;
add(x, y); // passing values via variables

//caller =welcome = function(){}
function sayGreeter(caller) {
    caller();
}

let welcome = function () {
    console.log('Welcome to javascript!');
};
//passing function via variable
sayGreeter(welcome);

//passing function directly
sayGreeter(function () {
    console.log('Greetings!')
});
///////////////////////////////////////////////////////////////////////////////////////

//Arrow version

const greetMe = caller => caller();

let hai = () => console.log('Welcome to javascript:Arrow Version');
greetMe(hai);

//passing function directly
greetMe(()=>console.log('function arrow Version'))
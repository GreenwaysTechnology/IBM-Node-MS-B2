
//function declarations

//pattern 1

//funcition declaration
function sayHello() {
    console.log('Hello')
}
//function invocation.
sayHello();

//pattern 2: ES 5 Style

let greeter = function () {
    console.log('Greeter function');
};
//invoke
greeter();

let add = function (a = 10, b = 10) {
    return a + b;
};
console.log(add(10,10));

//funcition declaration
function sayHello() {
    console.log('Hello')
}
//function invocation.
sayHello();

//parameters and args
//a, and b is args
function add(a, b) {
    let c = a + b;
    console.log(`Add result is ${c}`)
}
//10,10 is parameters
add(10, 10);
//args without values
//solution : 1 es 5 style
/**function multiply(a, b) {
    let c = (a || 1) * (b || 1);
    console.log(`multiply result is ${c}`)
}**/

//es6 style :default args
function multiply(a = 1, b = 1) {
    let c = a * b;
    console.log(`multiply result is ${c}`)
}
multiply(10, 2)
multiply();//without parameters a,b are undefined
multiply(10);//single parameter

//i want function that should take more no of args , but i dont know how many parameters in
//pass in runtime
//variable args : var args : ES 5
/**function logger() {
    console.log(arguments)
}**/
//var args in es 6 : REST OPERATOR 
function logger(...logMessage) {
    console.log(logMessage)
}
logger('hello');
logger('hai', 'hello');
logger('hai', 'hello', 'welcome', 'test')

////////////////////////////////////////////////////////////////////////////////////

function getCounter(){
    return 10;
}
console.log(getCounter());

function substract(a=10,b=10){
  return a - b;
}
console.log(substract(100,10))
console.log(substract())

function login(userName='admin',password='admin'){
   if(userName === 'admin' && password === 'admin'){
       return true;
   }
   return  //false
}
login('guest','guest') ? console.log('login success') : console.log('login failed')
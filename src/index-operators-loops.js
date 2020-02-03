

//or

let isWorking = true;
let hasProject = true;
//if
if(isWorking || hasProject){
  console.log('You are in the Company')
}else{
    console.log('You are out of company')
}
//boolean expression

let a =10; //number
if(a){
   console.log('A') 
}else{
    console.log('Not a')
}

let firstName = 'subramanian';
if(firstName){
    console.log('You have firstName')
}else{
    console.log('You have no first name')
}

let counter;
if(counter){
    console.log('counter')
}else{
    console.log('no counter')
}

counter ? console.log('counter-1 ') : console.log('no counter-1')
///////////////////////////////////////////////////////////////////////////////////////////
//operator

let  start;//undefined
let result = start || 100;
console.log(`The result is ${result}`)

let end;
end = end || 1000;
console.log(`The end is ${end}`)

let message="Hello";
let resultMessage =  message || "boom!";
console.log(resultMessage);


let shouldbeDone;
console.log(!shouldbeDone)

let done = false;
console.log(!done);
console.log(!!done)

//type of 

let price =100;
let name ="subramanian"
let qty;
let totalPrice = price * qty;
console.log(`The type of price is ${typeof price}`)
console.log(`The type of name is ${typeof name}`)
console.log(`The type of totalPrice is ${typeof totalPrice}`)

////////////////////////////////////////////////////////////////////////////////////

for(let i =0;i<10;i++){
    console.log(i)
}
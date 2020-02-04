
//Async implementation Using timer


function sayGreeter(handler) {
 //Delegate to kernal /os
 setTimeout(function(){
     handler();
 },1000);
}

function add(a, b) {
    return a + b;
}

sayGreeter(function(){
    console.log(' i wil be called late')
});//pushed into stack--settimeout---delegate to os---timer is 
 //ticking--|control is released starts execution next line --timeout----
   //--->signal "wake up"---node stores message in the event queue--loop--pick up message from
// event queue-- check whether stack is empty----push that handler into stack--display message
 //"i will be called late"
console.log(add(10,10));
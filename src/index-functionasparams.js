
//caller =welcome = function(){}
function sayGreeter(caller) {
    let result = caller('Hello');
    console.log(result);
}

let welcome = function (message='foo') {
    //console.log(message);
    return message;
};
//passing function via variable
sayGreeter(welcome);

//passing function directly
sayGreeter(function (message='bar') {
    //console.log(message)
    return message;
});
//////////////////////////////////////////////////////////////////////////////////////

const print = caller=>{
    caller('Error Message')
};

let warning = (message='Warning Message')=>console.log(message);
print(warning);

print((message='Warning Message')=>console.log(message))
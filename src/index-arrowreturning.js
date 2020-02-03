
function increment() {

    // let inner= function(){
    //     console.log('inside increment')
    // };
    // return inner;
    return function (message) {
        console.log(`Inside increment ${message}`)
    }
}

let myfunc = increment() // =>function
myfunc('Hello');

//short cut
increment()('Hai')

// let decrement = () => {
//     return message => console.log(`Inside decrement ${message}`)
// }
let decrement = () => message => console.log(`Inside decrement ${message}`)
decrement()('Hello')


//async await

async function sayGreeter() {
    return "Welcome"; //Promise.resolve("Welcome")
}
console.log('start')
sayGreeter().then(result => console.log(result));
console.log('end')

async function getCounter() {
    return Promise.resolve(10);
}
getCounter().then(result => console.log(result));


async function startFlow() {
    //promise
    try {
        let fakeUser = {
            name: 'subramanain'
        }
        //let fakeUser;
        let promise = fakeUser ? Promise.resolve(fakeUser) : Promise.reject({
            err: 'Something went wrong'
        });
        let result = await promise; //await keyword passes the current 
        //execution in background ,once success , it result result
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
startFlow();
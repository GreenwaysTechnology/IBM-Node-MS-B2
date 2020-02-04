//promise design pattern using ES 6 Promise Object.

//Promise is by default async: you need not use timer.

function getPromise() {
    //Promise witout constructor
    return Promise.resolve('done'); // Promise Object
    // return Promise.reject('something went wrong')
}

// let result = getPromise();
// result.then(res => console.log(res));
// result.catch(err => console.log(err));
// result.finally(() => console.log('finally'))

//code refactoring using builder /command chain pattern.

console.log('start')
getPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));
console.log('end')



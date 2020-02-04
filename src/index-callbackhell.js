//callback hell
const getUser = (success, failure) => {
    //fake data
    let user = {
        id: 1,
        name: 'admin',
        password: 'admin'
    };
    //let user = null;
    if (user) {
        setTimeout(() => success(user), 1000);
    } else {
        setTimeout(() => failure({ err: 'User Not found' }))
    }
};

const login = (user, success, failure) => {
    //biz logic
    if (user.name === 'admin') {
        setTimeout(() => {
            success({ status: 'Login Success' })
        })
    } else {
        setTimeout(() => {
            failure({ status: 'Login failed' })
        })
    }
};

//two callback functions
//getUser(user => console.log(user), err => console.log(err));

//with input to login functon
getUser(user =>
    login(user, authInfo => console.log(authInfo), err => console.log(err)),
    err => console.log(err));


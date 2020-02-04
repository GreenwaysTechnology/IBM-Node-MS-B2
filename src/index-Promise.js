//Complex Callback pattens using promise

/**
const getUser = () => {
    let fakeUser = {
        id: 1,
        name: 'admin',
        password: 'admin'
    };
    if (fakeUser) {
        return Promise.resolve(fakeUser);
    } else {
        return Promise.reject({
            err: 'No User found'
        });
    }
};
**/
const getUser = () => {
    return new Promise((resolve, reject) => {
        let fakeUser = {
            id: 1,
            name: 'admin',
            password: 'admin'
        };
        if (fakeUser) {
            setTimeout(() => {
                resolve(fakeUser)
            }, 2000);
        } else {
            setTimeout(() => {
                reject({
                    err: 'User not Available'
                })
            }, 2000);
        }
    });
};

const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(() => resolve({
                loginsuccess: 'valid User'
            }), 1000);
        } else {
            setTimeout(() => reject({
                err: 'Invaild User',
                code: 400,
            }), 1000);
        }
    });
}

// getUser()
//     .then(user => console.log(user))
//     .catch(err => console.log(err))
//     .finally(() => console.log('finally'))

getUser()
    .then(user => login(user))
    .then(() => console.log('login Success'))
    .catch(err => {
        console.log(err)
    })
    .finally(() => console.log('async operation is done'))

console.log('going on')
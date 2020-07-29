const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('This is my resolved data');
        // reject('Error');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return 'chain chain chain';
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Other promise');
        }, 1500);
    });
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');
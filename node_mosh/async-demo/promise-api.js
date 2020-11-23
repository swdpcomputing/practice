//const p = Promise.reject(new Error('Reason for rejection...'));
//p.catch(error => console.log(error));

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1');
        resolve(1);
    }, 2000)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2');
        resolve(2);
    }, 2000)
});

Promise.all([p1, p2]) // .race returns forst that finishes
    .then(result => console.log(result));
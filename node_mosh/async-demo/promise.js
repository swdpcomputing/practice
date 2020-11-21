const p = new Promise((res, rej) => {
    setTimeout(() => {
        // res(1);
        rej(new Error("message_err"));
    }, 2000);
});

p
.then(result => console.log("Result", result))
.catch(err => console.log("Error", err.message));

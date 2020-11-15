const getUser = (id) => {
    setTimeout(() => {
        // timeout is asyncronous
        console.log("Reading a user from a database");
        return { id: id, gitHubUserName: "mosh" };
    }, 2000);
};

console.log("Before");

const user = getUser(1);
console.log(user);

console.log("After");

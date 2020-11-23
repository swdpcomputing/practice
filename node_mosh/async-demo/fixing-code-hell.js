console.log("Before");

// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });
// console.log("After");

// Promise based await approach
// getUser(1)
//     .then((user) => getRepositories(user.gitHubUsername))
//     .then((repos) => getCommits(repos[0]))
//     .then((commits) => console.log("Commits", commits))
//     .catch((err) => console.log("Error", err.messsage));

// Async and await approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (error) {
        console.log("Error", error.message);
    }
};

displayCommits();

function getUser(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Reading a user from a database...");
            res({ id: id, gitHubUsername: "mosh" });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Calling GitHub API...");
            res(["repo1", "repo2", "repo3"]);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Calling GitHub API...");
            res(["commit"]);
        }, 2000);
    });
}

// IN THE BEFORE TIME
// console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });
// console.log('After');

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...');
//     callback({ id: id, gitHubUsername: 'mosh' });
//   }, 2000);
// }

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log('Calling GitHub API...');
//     callback(['repo1', 'repo2', 'repo3']);
//   }, 2000);
// }

// function getCommits(repo, callback) {
//   setTimeout(() => {
//     console.log('Calling GitHub API...');
//     callback(['commit']);
//   }, 2000);
// }

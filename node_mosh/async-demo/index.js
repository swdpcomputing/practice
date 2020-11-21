console.log("Before");

getUser(1, getRepositories);

function getRepositories(user) {
    console.log('x');
    getRepositories(user.getHubUserName, getCommits);     
};

function getCommits(repos) {
    getCommits(repos, displayCommits);
};

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database");
        callback({ id: id, gitHubUserName: 'Mosh' })
    }, 500);
};

function getRepositories (username, callback) {
    setTimeout(() => {
        console.log(`Calling Github API for ${username}'s repos`);
        callback(['repo1', 'repo2', 'repo3'])
    }, 500);
};
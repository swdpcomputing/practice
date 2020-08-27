// element variables
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');
const doors = [door1, door2, door3];
const startButton = document.getElementById('start');
const curentStreakResult = document.getElementById('current-streak-result');
const bestStreakResult = document.getElementById('best-streak-result');

//path variables
const doorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const doorPathArray = [botDoorPath, beachDoorPath, spaceDoorPath];

//game logic variables
let choiceIndex = 0;
let currentStreak = 0;
let bestStreak = 0;
let chosenDoorPath = '';
let gameIsRunning = true;
let door1Closed = true;
let door2Closed = true;
let door3Closed = true;

//event functions
door1.onclick = () => {
  if (door1Closed) {doorClicked(door1)};
  door1Closed = false;
}

door2.onclick = () => {
  if (door2Closed) {doorClicked(door2)};
  door2Closed = false;
}

door3.onclick = () => {
  if (door3Closed) {doorClicked(door3)};
  door3Closed = false;
}

startButton.onclick = () => {
  resetDoors();
  closeDoors();
  randomiseDoors();
  resetChoiceIndex();
  resetChosenDoor();
  resetStartButton();
  startGame();
}

//game logic functions
const doorClicked = (door) => {
  if (gameIsRunning) {  
    chosenDoorPath = doorPathArray[choiceIndex];
    door.src = chosenDoorPath;
    choiceIndex++;
    if (checkIfWon()) return;
    if (checkIfChosenBot()) return;
  }
};

const checkIfWon = () => {
  if (choiceIndex === 3) {
    startButton.innerHTML = 'You Win!';
    currentStreak++;
    endGame();   
    return true;
  }
};

const checkIfChosenBot = () => {
  if (chosenDoorPath === botDoorPath) {
    startButton.innerHTML = 'Game over!';
    currentStreak = 0;
    endGame(); 
    return true;
  }
};

const resetDoor = (door) => {door.src = doorPath;};
const resetDoors = () => {for (i in doors) resetDoor(doors[i])};
const randomiseDoors = () => {doorPathArray.sort(function(a, b){return 0.5 - Math.random()})};
const resetChoiceIndex = () => {choiceIndex = 0};
const resetChosenDoor = () => {chosenDoorPath = ''};
const resetStartButton = () => {startButton.innerHTML = 'Good Luck!'};
const startGame = () => {gameIsRunning = true};
const endGame = () => {
  gameIsRunning = false;
  curentStreakResult.innerHTML = currentStreak;
  if (currentStreak > bestStreak) {
    bestStreak = currentStreak;
    bestStreakResult.innerHTML = bestStreak;
  }
};

const closeDoors = () => {
  door1Closed = true;
  door2Closed = true;
  door3Closed = true;
}
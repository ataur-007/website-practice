let car = document.getElementById("car");
let obstacle = document.getElementById("obstacle");
let gameInterval;

function startGame() {
    gameInterval = setInterval(updateGame, 20);
}

function updateGame() {
    moveCar();
    moveObstacle();
    checkCollision();
}

function moveCar() {
    if (car.style.left) {
        let carPosition = parseInt(car.style.left);
        if (carPosition >= 0 && carPosition < 360) {
            car.style.left = (carPosition + 5) + "px";
        }
    } else {
        car.style.left = "0px";
    }
}

function moveObstacle() {
    let obstaclePosition = parseInt(obstacle.style.left);
    if (obstaclePosition < 360) {
        obstacle.style.left = (obstaclePosition + 5) + "px";
    } else {
        obstacle.style.left = "0px";
    }
}

function checkCollision() {
    let carRect = car.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();
    
    if (
        carRect.left < obstacleRect.left + obstacleRect.width &&
        carRect.left + carRect.width > obstacleRect.left &&
        carRect.top < obstacleRect.top + obstacleRect.height &&
        carRect.top + carRect.height > obstacleRect.top
    ) {
        clearInterval(gameInterval);
        alert("Game Over");
    }
}

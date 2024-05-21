const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let food;
let score = 0;
let gamePaused = true;

function startGame() {
    if (gamePaused) {
        snake = new Snake();
        food = new Food();
        food.pickLocation();

        window.setInterval(() => {
            if (!gamePaused) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                food.draw();
                snake.update();
                snake.draw();

                if (snake.eat(food)) {
                    score += 10;
                    document.getElementById('score').innerText = score;
                    food.pickLocation();
                }

                if (snake.checkCollision()) {
                    endGame();
                }
            }
        }, 200); // Change interval time here for slower speed

        gamePaused = false;
        document.getElementById('startButton').innerText = 'Pause';
    } else {
        pauseGame();
    }
}

function pauseGame() {
    gamePaused = true;
    document.getElementById('startButton').innerText = 'Resume';
}

function endGame() {
    alert('Game Over! Your score: ' + score);
    pauseGame();
}

window.addEventListener('keydown', e => {
    if (e.key === ' ') {
        if (gamePaused) {
            startGame();
        } else {
            pauseGame();
        }
    } else if (!gamePaused) {
        const direction = e.key.replace('Arrow', '');
        snake.changeDirection(direction);
    }
});

document.getElementById('startButton').addEventListener('click', startGame);

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = '#000';
        for (let i = 0; i < this.tail.length; i++) {
            const transitionX = this.x + (this.tail[i].x - this.x) * (1 / scale);
            const transitionY = this.y + (this.tail[i].y - this.y) * (1 / scale);
            ctx.fillRect(transitionX, transitionY, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[score / 10 - 1] = { x: this.x, y: this.y };
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Check if snake touches border
        if (this.x >= canvas.width || this.x < 0 || this.y >= canvas.height || this.y < 0) {
            endGame();
        }

        // Check if snake touches itself
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                endGame();
            }
        }
    }

    this.changeDirection = function(direction) {
        switch (direction) {
            case 'Up':
                if (this.ySpeed !== scale * 1) {
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                }
                break;
            case 'Down':
                if (this.ySpeed !== -scale * 1) {
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                }
                break;
            case 'Left':
                if (this.xSpeed !== scale * 1) {
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                }
                break;
            case 'Right':
                if (this.xSpeed !== -scale * 1) {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                }
                break;
        }
    }

    this.eat = function(food) {
        if (this.x === food.x && this.y === food.y) {
            score += 10;
            document.getElementById('score').innerText = score;
            return true;
        }
        return false;
    }

    this.checkCollision = function() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                return true;
            }
        }
        return false;
    }
}

function Food() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows)) * scale;
        this.y = (Math.floor(Math.random() * columns)) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = '#f00';
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}

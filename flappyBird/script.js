const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let birdX = 50;
let birdY = 150;
let birdWidth = 20;
let birdHeight = 20;
let gravity = 0.5;
let lift = -10;
let birdVelocity = 0;

let obstacles = [];
let obstacleWidth = 30;
let obstacleGap = 100;
let frameCount = 0;
function drawBird() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(birdX, birdY, birdWidth, birdHeight);
}

function updateBird() {
  birdVelocity += gravity;
  birdY += birdVelocity;
  if (birdY + birdHeight > canvas.height) {
    birdY = canvas.height - birdHeight;
    birdVelocity = 0;
  } else if (birdY < 0) {
    birdY = 0;
    birdVelocity = 0;
  }
}

function createObstacle() {
  console.log("canvas width ", canvas.width, "canvas height ", canvas.height);
  let obstacleHeight = Math.random() * (canvas.height - obstacleGap);
  let newObstacle = {
    x: canvas.width,
    topHeight: obstacleHeight,
    bottomHeight: canvas.height - obstacleHeight - obstacleGap,
  };
  console.log(
    "newObstacle is created:",
    newObstacle.x,
    newObstacle.topHeight,
    newObstacle.bottomHeight
  );
  obstacles.push(newObstacle);
}

function updateObstacles() {
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].x -= 2;
    if (obstacles[i].x + obstacleWidth < 0) {
      console.log("Removing Obstacle:", obstacles[i]);
      obstacles.splice(i, 1);
    }
  }
}
function drawObstacles() {
  ctx.fillStyle = "green";
  obstacles.forEach((obstacle) => {
    console.log("Drawing obstacle at x :", obstacle.x);
    ctx.fillRect(obstacle.x, 0, obstacleWidth, obstacle.topHeight);
    ctx.fillRect(
      obstacle.x,
      canvas.height - obstacle.bottomHeight,
      obstacleWidth,
      obstacle.bottomHeight
    );
  });
}
function detectCollision() {
  for (let i = 0; i < obstacles.length; i++) {
    let obs = obstacles[i];
    if (
      birdX < obs.x + obstacleWidth &&
      birdX + birdWidth > obs.x &&
      (birdY < obs.topHeight ||
        birdY + birdHeight > canvas.height - obs.bottomHeight)
    ) {
      return true;
    }
  }
  return false;
}

function animate() {
  console.log("animation");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frameCount++;
  if (frameCount % 90 === 0) {
    createObstacle();
  }
  updateBird();
  drawBird();
  updateObstacles();
  drawObstacles();

  if (detectCollision()) {
    alert("Game Over!");
    document.location.reload();
  } else {
    requestAnimationFrame(animate);
  }
}

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    console.log("space");
    birdVelocity = lift;
  }
});
console.log("start");
animate();

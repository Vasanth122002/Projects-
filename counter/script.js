const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
let count = 0;
function updateCounter() {
  counterDisplay.textContent = count;
}
incrementButton.addEventListener("click", function () {
  count++;
  updateCounter();
});
decrementButton.addEventListener("click", function () {
  count--;
  updateCounter();
});
resetButton.addEventListener("click", function () {
  count = 0;
  updateCounter();
});

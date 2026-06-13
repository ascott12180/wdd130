const healthElement = document.querySelector('#health');
const levelElement = document.querySelector('#level');

const attackBtn =  document.querySelector('#attackBtn');
const levelBtn = document.querySelector('#levelBtn');

let health = 100
let level = 1

attackBtn.addEventListener('click', () => {
    health -=10;


if (health < 0) {
    heath = 0;
}

healthElement.textContent = health;
});

levelBtn.addEventListener("click", () => {
    level += 1;
    levelElement.textContent = level;
});
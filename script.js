const POWERS_OF_TWO = [1, 2, 4, 8, 16, 32, 64, 128];

const overlay44 = document.getElementById("overlay-4-4");
const overlay21128 = document.getElementById("overlay-21-128");
const soundNoise = document.getElementById("sound-noise");

let buttonLocked = false;
let overlayLocked = false;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPowerOfTwo() {
  const index = Math.floor(Math.random() * POWERS_OF_TWO.length);
  return POWERS_OF_TWO[index];
}

function showOverlay(overlay, fadeIn = true) {
  overlay.style.transition = fadeIn ? "opacity 2s ease" : "opacity 0.5s ease";
  overlay.classList.add("show");
}

function hideOverlay(overlay) {
  overlay.style.transition = "opacity 0.5s ease";
  overlay.classList.remove("show");
}

function block(overlay) {
  buttonLocked = true;

  setTimeout(() => { showOverlay(overlay); }, 3000);
  setTimeout(() => { buttonLocked = false; }, 4000);
}

function updateValues() {
  if (buttonLocked) return;
  
  let x, y;

  if (Math.random() < 1/30) {
    x = 21;
    y = 128;
  } else if (Math.random() < 1/20) {
    x = 4;
    y = 4;
  } else {
    x = getRandomInt(0, 21);
    y = getRandomPowerOfTwo();
  }

  document.getElementById('x-value').textContent = x;
  document.getElementById('y-value').textContent = y;

  [overlay44, overlay21128].forEach(overlay => hideOverlay(overlay));

  if (x === 4 && y === 4) {
    buttonLocked = true;
    setTimeout(() => { showOverlay(overlay44); }, 3000);
    setTimeout(() => { buttonLocked = false; }, 4000);
    setTimeout(() => { hideOverlay(overlay44); }, 9000);
  } else if (x === 21 && y === 128) {
    buttonLocked = true;
    overlayLocked = true;

    soundNoise.currentTime = 0;
    setTimeout(() => { soundNoise.play(); }, 3000);

    setTimeout(() => { showOverlay(overlay21128); }, 3000);
    setTimeout(() => {
        buttonLocked = false;
        overlayLocked = false;
        hideOverlay(overlay21128);
     }, 9000);
  }
}

updateValues();

document.getElementById('more-btn').addEventListener('click', updateValues);

overlay44.addEventListener("click", () => hideOverlay(overlay44));
overlay21128.addEventListener("click", () => { if (!overlayLocked) { hideOverlay(overlay21128) } } );
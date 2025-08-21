// Polaroid images
const images = [
  "assets/prits1.jpg",
  "assets/prits2.jpg",
  "assets/prits3.jpg",
  "assets/prits4.jpg",
  "assets/prits5.jpg",
  "assets/prits7.jpg"
];

// Captions for each image
const captions = [
  "Kumortuli 24'",
  "Panchami 24'",
  "One fine day at Maidan",
  "Bestest of 367days with me",
  "Gola tipe debo!!",
  "First movie date??"
];

// Duplicate for infinite loop
const duplicatedImages = [...images, ...images];
const duplicatedCaptions = [...captions, ...captions];

// Add images to slider
const slider = document.getElementById("slider");
duplicatedImages.forEach((src, i) => {
  const div = document.createElement("div");
  div.className = "polaroid";
  div.innerHTML = `<img src="${src}" alt="${duplicatedCaptions[i]}"><p>${duplicatedCaptions[i]}</p>`;
  slider.appendChild(div);
});

// Sparkles
const sparkles = document.getElementById("sparkles");
for (let i = 0; i < 70; i++) {
  const dot = document.createElement("span");
  dot.style.position = "absolute";
  dot.style.width = "4px";
  dot.style.height = "4px";
  dot.style.borderRadius = "50%";
  dot.style.background = "#bfdbfe";
  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random() * 100 + "%";
  dot.style.boxShadow = "0 0 8px rgba(0,200,255,0.9)";
  dot.style.animation = `twinkle 2.2s linear infinite`;
  dot.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
  sparkles.appendChild(dot);
}

// Fireworks Confetti
window.addEventListener("load", () => {
  const duration = 2200;
  const end = Date.now() + duration;

  const defaults = { startVelocity: 45, spread: 360, ticks: 200, zIndex: 9999 };

  const interval = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: 0.5, y: 0.5 } });
  }, 180);

  confetti({
    particleCount: 200,
    spread: 90,
    origin: { x: 0.5, y: 0.6 },
    startVelocity: 55,
    gravity: 0.9,
    zIndex: 9999,
  });
});

window.addEventListener('click', function unmuteAudioOnce() {
  const audio = document.getElementById('birthday-audio');
  if (audio) {
    audio.muted = false;
    audio.volume = 1.0;
    audio.play();
    window.removeEventListener('click', unmuteAudioOnce);
  }
});

// Example script: intentionally missing semicolon to trigger ESLint "semi" rule
console.log('Script loaded') // <-- missing semicolon on purpose to test lint step

// small helper to show a message in console
function showNote() {
  console.log('This site has an automated JS linter in CI.')
}
showNote()

// -------------------------------------------------------------
// 🎉 Animated Confetti Effect on Page Load
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  createConfetti();
});

function createConfetti() {
  const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FFB5E8"];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

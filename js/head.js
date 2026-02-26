// Check if offline and redirect to game
window.addEventListener("offline", function () {
  if (confirm("You are offline! Do you want to play the game?")) {
    window.location.href = "indexgame.html";
  }
});

// Show online/offline status
window.addEventListener("load", function () {
  if (!navigator.onLine) {
    window.location.href = "indexgame.html";
  }
});

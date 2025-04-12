document.getElementById("start-new-game-btn").addEventListener("click", function() {
    // Logic for starting a new game
    // For now, let's display a message or redirect to a new page
    alert("Starting a new game...");

    // Store some basic info for the game (we will expand this later)
    localStorage.setItem("gameStarted", true);
    localStorage.setItem("universityName", "My New University");

    // Redirect to the next page or update UI with game info
    window.location.href = "game.html"; // You can create a new page for the game
});

document.getElementById("continue-game-btn").addEventListener("click", function() {
    // Logic to continue an existing game
    const gameStarted = localStorage.getItem("gameStarted");

    if (gameStarted) {
        alert("Continuing the game...");
        window.location.href = "game.html"; // Redirect to the game page
    } else {
        alert("No saved game found. Start a new game.");
    }
});

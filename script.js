// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    // Start button
    const startGameButton = document.getElementById('start-game-btn');
    
    startGameButton.addEventListener('click', () => {
        // Show a welcome message and game dashboard when the game starts
        const universityInfo = document.getElementById('university-info');
        universityInfo.innerHTML = `<h3>Welcome to your new University!</h3><p>Let's begin building your campus.</p>`;
        
        // Hide the "Create University" section
        document.getElementById('create-university').style.display = 'none';
    });
});


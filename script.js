document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedColor = localStorage.getItem('preferredColor') || '#4CAF50';
    setColor(savedColor);

    // Event listeners
    document.getElementById('triggerBtn').addEventListener('click', triggerAnimation);
    
    document.querySelectorAll('.color-option').forEach(option => {
        option.style.backgroundColor = option.dataset.color;
        option.addEventListener('click', () => setColor(option.dataset.color));
    });
});

function setColor(color) {
    // Update CSS variable
    document.documentElement.style.setProperty('--main-color', color);
    
    // Update color picker UI
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.toggle('selected', option.dataset.color === color);
    });
    
    // Save to localStorage
    localStorage.setItem('preferredColor', color);
}

function triggerAnimation() {
    const box = document.getElementById('mainBox');
    
    // Trigger animation
    box.classList.add('animate');
    
    // Remove animation class after completion
    box.addEventListener('animationend', () => {
        box.classList.remove('animate');
    }, {once: true});
}
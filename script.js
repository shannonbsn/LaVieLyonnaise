// Select the button
const toggleButton = document.getElementById('dark-mode-toggle');

// Add event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');
});

// Optional: Save the user's preference in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    let darkMode = localStorage.getItem('dark-mode');
    if (darkMode !== 'enabled') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
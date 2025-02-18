const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
   
    document.body.classList.toggle('dark-mode');
});


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
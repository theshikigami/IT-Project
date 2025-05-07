document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-switcher button');
    const themeStyle = document.getElementById('theme-style');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('autohub-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
    
    // Add event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            localStorage.setItem('autohub-theme', theme);
        });
    });
    
    function setTheme(theme) {
        let themeFile;
        switch(theme) {
            case 'dark':
                themeFile = 'css/theme-dark.css';
                break;
            default:
                themeFile = 'css/theme-light.css';
        }
        themeStyle.setAttribute('href', themeFile);
    }
});
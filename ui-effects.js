document.addEventListener('DOMContentLoaded', () => {
    // --- THEME SWITCHER LOGIC ---
    const themeToggle = document.getElementById('theme-checkbox');
    const currentTheme = localStorage.getItem('theme');

    function setTheme(theme) {
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
            themeToggle.checked = true;
        } else {
            themeToggle.checked = false;
        }
    }

    if (currentTheme) {
        setTheme(currentTheme);
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // --- BUTTON RIPPLE EFFECT ---
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            const ripples = document.createElement('span');
            ripples.className = 'ripple';
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 600); // Match animation duration
        });
    });
});
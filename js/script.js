document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme") || "dark"; 

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.add("fa-sun");
        themeIcon.classList.remove("fa-moon");
    } else {
        body.classList.add("light-mode");
        themeIcon.classList.add("fa-moon");
        themeIcon.classList.remove("fa-sun");
    }


    toggleThemeBtn.addEventListener("click", () => {
        const isDark = body.classList.toggle("light-mode");

        localStorage.setItem("theme", isDark ? "light" : "dark");

        if (isDark) {
            themeIcon.classList.add("fa-moon");
            themeIcon.classList.remove("fa-sun");
        } else {
            themeIcon.classList.add("fa-sun");
            themeIcon.classList.remove("fa-moon");
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('main');

    const options = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


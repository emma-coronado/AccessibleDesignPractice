// navbar color/styling change on scroll
window.onscroll = () => {
    const navbar = document.getElementById("navbar");
    const navItems = document.getElementById("nav-items");
    const menuToggle = document.getElementById("menu-toggle");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.remove("dark");
        navbar.classList.add("light");
        navbar.style.boxShadow = "0px 0px 12px 12px rgba(0, 0, 0, 0.05)";
        navbar.style.borderBottom = "1px solid rgba(0, 38, 87, 0.30)";

        navItems.classList.remove("dark");
        navItems.classList.add("light");

        menuToggle.style.stroke = "var(--Brand-Colors-Dark-Blue)";
    }
    else {
        navbar.classList.remove("light");
        navbar.classList.add("dark");
        navbar.style.boxShadow = "";
        navbar.style.borderBottom = "";

        navItems.classList.remove("light");
        navItems.classList.add("dark");

        menuToggle.style.stroke = "var(--Brand-Colors-White)";
    }
}; 

// Responsive navbar functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-link-group');
    const menuIcon = menuToggle.querySelector('svg path');

    menuToggle.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!isExpanded));
        navLinks.style.display = isExpanded ? 'none' : 'flex';

        // Toggle the icon between hamburger and "X"
        menuIcon.setAttribute(
            'd',
            isExpanded
                ? 'M3 6h18M3 12h18M3 18h18' // Hamburger icon
                : 'M4.5 4.5L19.5 19.5M4.5 19.5L19.5 4.5' // "X" icon
        );
    });
});

// accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach (button => {
        button.addEventListener('click', function() {
            // Determine if this button is already expanded
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle the button's aria-expanded attribute
            this.setAttribute('aria-expanded', String(!isExpanded));
            
            // Find related panel using the button's aria-controls attribute
            const panelId = this.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            
            // Toggle panel's aria-hidden attribute
            panel.setAttribute('aria-hidden', String(isExpanded));
            
            var chevron = this.getElementsByTagName("svg");

            if (isExpanded) {
                panel.style.display = 'none'; //expand panel
                chevron[0].setAttribute('transform', 'rotate(0 0 0)'); // flip chevron
            }
            else {
                panel.style.display = 'flex';
                chevron[0].setAttribute('transform', 'rotate(180 0 0)');
            }
        });
    });
});

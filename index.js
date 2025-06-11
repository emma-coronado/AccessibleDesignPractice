// navbar color change on scroll
window.onscroll = () => {
    const navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.remove("dark");
        navbar.classList.add("light");
        navbar.style.boxShadow = "0px 0px 12px 12px rgba(0, 0, 0, 0.05)";
        navbar.style.borderBottom = "1px solid rgba(0, 38, 87, 0.30)";
    }
    else {
        navbar.classList.remove("light");
        navbar.classList.add("dark");
        navbar.style.boxShadow = "";
        navbar.style.borderBottom = "";
    }
};

// accordion functionaliy
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
            
            if (isExpanded) 
                panel.style.display = 'none';
            else
                panel.style.display = 'block';
            
        });
    });
});

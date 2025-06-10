// navbar color change on scroll
window.onscroll = () => {
    const navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.remove("dark");
        navbar.classList.add("light");
        navbar.style.boxShadow = "0 6px 10px 2px rgba(0, 0, 0, 0.15)";
    }
    else {
        navbar.classList.remove("light");
        navbar.classList.add("dark");
        navbar.style.boxShadow = "";
    }
};


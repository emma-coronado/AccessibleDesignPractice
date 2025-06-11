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


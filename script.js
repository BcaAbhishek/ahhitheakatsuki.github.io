const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 🔴 CURSOR EFFECT
const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";

    trail.style.top = e.clientY - 10 + "px";
    trail.style.left = e.clientX - 10 + "px";
});

// ⚡ SCROLL REVEAL
const reveals = document.querySelectorAll(".about div, .home, .contact");

window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("reveal", "active");
        }
    });
});




// ⚡ LIGHTNING ON CLICK
document.addEventListener("click", (e) => {
    const bolt = document.createElement("div");
    bolt.classList.add("lightning");

    bolt.style.top = e.clientY + "px";
    bolt.style.left = e.clientX + "px";

    document.body.appendChild(bolt);

    setTimeout(() => {
        bolt.remove();
    }, 300);
});



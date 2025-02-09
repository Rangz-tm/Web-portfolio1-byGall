// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    if (burger && navList) { // Cek elemen sebelum digunakan
        burger.addEventListener("click", () => {
            navList.classList.toggle("nav-active");
            burger.classList.toggle("toggle-burger");
        });
    }
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) { // Perbaikan selector
        form.reset();
    }
};

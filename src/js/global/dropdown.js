document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const arrowButton = dropdown.querySelector(".dropdown__arrow");

    arrowButton.addEventListener("click", () => {
        dropdown.classList.toggle("dropdown_active");
    });
});

document.addEventListener("click", (event) => {
    if (
        !event.target.closest(".dropdown") &&
        document.querySelector(".dropdown_active")
    ) {
        document
            .querySelector(".dropdown_active")
            .classList.remove("dropdown_active");
    }
});

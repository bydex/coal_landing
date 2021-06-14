window.addEventListener("scroll", setNavRowStatus);
setNavRowStatus();

function setNavRowStatus() {
    const offsetTop = window.pageYOffset;
    const hasClass = document
        .querySelector(".page-wrapper")
        .classList.contains("page-wrapper_active");

    if (offsetTop > 0 && !hasClass) {
        document
            .querySelector(".page-wrapper")
            .classList.add("page-wrapper_active");
    } else if (offsetTop === 0 && hasClass) {
        document
            .querySelector(".page-wrapper")
            .classList.remove("page-wrapper_active");
    }
}

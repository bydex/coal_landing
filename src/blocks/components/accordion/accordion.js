const accordionToplines = document.querySelectorAll(".accordion__header");

accordionToplines.forEach((topline) => {
    topline.addEventListener("click", toggleAccordion.bind(null, topline), {
        once: true,
    });
});

function toggleAccordion(topline) {
    const accordion = topline.parentNode;
    const accordionBody = accordion.querySelector(".accordion__body");

    accordion.classList.toggle("accordion__item_active");
    accordionBody.style.maxHeight = isVisible(accordionBody)
        ? accordionBody.scrollHeight + "px"
        : 0;

    setTimeout(() => {
        topline.addEventListener("click", toggleAccordion.bind(null, topline), {
            once: true,
        });
    }, 500);
}

function isVisible(element) {
    return !(element.offsetWidth > 0 && element.offsetHeight > 0);
}

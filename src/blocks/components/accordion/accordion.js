const accordionToplines = document.querySelectorAll(".accordion__header");

accordionToplines.forEach((topline) => {
    topline.addEventListener("click", toggleAccordion.bind(null, topline), {
        once: true,
    });
});

function toggleAccordion(topline) {
    const accordion = topline.parentNode;
    const accordionBody = accordion.querySelector(".accordion__body");

    Array.from(accordion.parentNode.children).forEach((accordionItem) => {
        const accordionBody = accordionItem.querySelector(".accordion__body");
        if (
            accordionItem !== accordion &&
            accordionItem.classList.contains("accordion__item_active")
        ) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            setTimeout(() => {
                accordionBody.style.maxHeight = 0;
            }, 0);
            accordionItem.classList.remove("accordion__item_active");
        }
    });

    if (accordion.classList.contains("accordion__item_active")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        setTimeout(() => {
            accordionBody.style.maxHeight = 0;
        }, 0);
        accordion.classList.remove("accordion__item_active");
    } else {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        accordion.classList.add("accordion__item_active");

        setTimeout(() => {
            if (accordion.classList.contains("accordion__item_active")) {
                accordionBody.style.maxHeight = "none";
            }
        }, 500);
    }

    setTimeout(() => {
        topline.addEventListener("click", toggleAccordion.bind(null, topline), {
            once: true,
        });
    }, 500);
}

function isVisible(element) {
    return !(element.offsetWidth > 0 && element.offsetHeight > 0);
}

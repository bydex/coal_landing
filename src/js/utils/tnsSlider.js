import { tns } from "tiny-slider/src/tiny-slider";

function tnsSlider({ sliderBlock, options = {} }) {
    const activePagination = sliderBlock.querySelector(
        "[data-active-pagination]"
    );
    const totalPagination = sliderBlock.querySelector(
        "[data-total-pagination]"
    );

    // eslint-disable-next-line no-inner-declarations
    function setPagination(sliderInfo) {
        activePagination.textContent = `0${sliderInfo.displayIndex}`.slice(-2);
        totalPagination.textContent = `0${sliderInfo.slideCount}`.slice(-2);
    }

    sliderBlock.querySelectorAll(".gallery__slide").forEach((slide, index) => {
        slide.dataset.slideIndex = index;
    });

    const slider = tns({
        container: sliderBlock.querySelector(".gallery__list"),
        controlsText: ["←", "→"],
        controlsContainer: sliderBlock.querySelector("[data-controls]"),
        navContainer: sliderBlock.querySelector("[data-thumbnails]"),
        lazyload: true,
        lazyloadSelector: ".tns-lazy",
        ...options,
    });

    setPagination(slider.getInfo());
    slider.events.on("indexChanged", setPagination);

    sliderBlock.querySelectorAll(".tns-slide-cloned").forEach((clonedSlide) => {
        const lightbox = clonedSlide.querySelector("[data-fslightbox]");

        if (lightbox) {
            lightbox.addEventListener("click", function (e) {
                e.preventDefault();

                const linkedSlide = sliderBlock.querySelector(
                    `[data-slide-index="${this.parentNode.dataset.slideIndex}"]:not(.tns-slide-cloned)`
                );

                linkedSlide.querySelector("[data-fslightbox]").click();
            });
            lightbox.removeAttribute("data-fslightbox");
        }
    });

    sliderBlock.addEventListener("mouseleave", function () {
        slider.play();
    });
}

export default tnsSlider;

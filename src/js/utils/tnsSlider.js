import { tns } from "tiny-slider/src/tiny-slider";

function tnsSlider({ sliderBlock, options = {} }) {
    const activePagination = sliderBlock.querySelector("#active-pagination");
    const totalPagination = sliderBlock.querySelector("#total-pagination");

    // eslint-disable-next-line no-inner-declarations
    function setPagination(sliderInfo) {
        activePagination.textContent = `0${sliderInfo.displayIndex}`.slice(-2);
        totalPagination.textContent = `0${sliderInfo.slideCount}`.slice(-2);
    }

    const slider = tns({
        container: sliderBlock.querySelector(".gallery__list"),
        controlsText: ["←", "→"],
        controlsContainer: sliderBlock.querySelector("#controls"),
        navContainer: sliderBlock.querySelector("#thumbnails"),
        lazyload: true,
        lazyloadSelector: ".tns-lazy",
        ...options,
    });

    setPagination(slider.getInfo());
    slider.events.on("indexChanged", setPagination);

    sliderBlock.querySelectorAll(".tns-slide-cloned").forEach((clonedSlide) => {
        clonedSlide
            .querySelector("[data-fslightbox]")
            ?.removeAttribute("data-fslightbox");
    });

    sliderBlock.addEventListener("mouseleave", function () {
        slider.play();
    });
}

export default tnsSlider;

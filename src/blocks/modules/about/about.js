import { tnsSlider } from "%js%/utils/index";

const gallery = document.querySelector("#about-gallery");

gallery &&
    tnsSlider({
        sliderBlock: gallery,
        options: {
            items: 1,
            slideBy: "page",
            mode: "gallery",
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            autoHeight: true,
            autoplayTimeout: 4000,
        },
    });

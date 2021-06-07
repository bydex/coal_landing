import { tnsSlider } from "%js%/utils/index";

const gallery = document.querySelector("#intro-gallery");

gallery &&
    tnsSlider({
        sliderBlock: gallery,
        options: {
            items: 1,
            slideBy: "page",
            mode: "gallery",
        },
    });

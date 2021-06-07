import { tnsSlider } from "%js%/utils/index";
import config from "%js%/config";

const gallery = document.querySelector("#certificates-gallery");

gallery &&
    tnsSlider({
        sliderBlock: gallery,
        options: {
            items: 3,
            slideBy: 1,
            nav: false,
            loop: true,
            responsive: {
                0: {
                    items: 2,
                    gutter: 15,
                },
                [config.media.xss]: {
                    gutter: 30,
                },
                [config.media.sm]: {
                    items: 3,
                },
                [config.media.md]: {
                    items: 2,
                    gutter: 30,
                },
                [config.media.xl]: {
                    items: 3,
                },
            },
        },
    });

import { tnsSlider } from "%js%/utils/index";
import config from "%js%/config";

const gallery = document.querySelector("#clients-gallery");

gallery &&
    tnsSlider({
        sliderBlock: gallery,
        options: {
            slideBy: 1,
            nav: false,
            loop: true,
            responsive: {
                0: {
                    gutter: 30,
                },
                [config.media.xss]: {},
                [config.media.sm]: {
                    items: 2,
                },
                [config.media.md]: {
                    items: 1,
                },
                [config.media.xl]: {
                    items: 2,
                },
            },
        },
    });

const galleryAdvantages = document.querySelector("#clients-advantages-gallery");

galleryAdvantages &&
    tnsSlider({
        sliderBlock: galleryAdvantages,
        options: {
            slideBy: 1,
            nav: false,
            mode: "gallery",
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                [config.media.xss]: {},
                [config.media.sm]: {},
                [config.media.md]: {},
                [config.media.xl]: {},
            },
        },
    });

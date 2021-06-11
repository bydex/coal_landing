import { tnsSlider } from "%js%/utils/index";
import config from "%js%/config";

const gallery = document.querySelector("#contacts-gallery");

gallery &&
    tnsSlider({
        sliderBlock: gallery,
        options: {
            slideBy: 1,
            nav: false,
            loop: true,
            items: 2,
            responsive: {
                0: {
                    gutter: 15,
                },
                [config.media.xss]: {
                    gutter: 30,
                },
            },
        },
    });

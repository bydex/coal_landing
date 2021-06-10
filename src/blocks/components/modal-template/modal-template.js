import { tnsSlider } from "%js%/utils/index";
import config from "%js%/config";

Array.from(document.querySelectorAll(".modal-template")).forEach((modal) => {
    const gallery = modal.querySelector("#modal-template-gallery");

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
});

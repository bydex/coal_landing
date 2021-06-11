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
});

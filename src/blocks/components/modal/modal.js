import MicroModal from "micromodal";

let modalScrollTop = 0;

function openModal(modalId) {
    MicroModal.show(modalId, {
        onShow: function (modal) {
            modalScrollTop = window.pageYOffset;

            const openedModals = Array.from(
                document.querySelectorAll(".modal.is-open")
            ).filter((openedModal) => openedModal !== modal);

            if (openedModals.length > 0) {
                openedModals.forEach((modal) => {
                    MicroModal.close(modal.id);
                });
            }

            document
                .querySelector("body, html")
                .classList.add("overflow-hidden");

            document.querySelector("body").scroll(0, modalScrollTop);
        },
        onClose: function () {
            // if (modal.id === "request-modal") {
            //     delete modal.querySelector(".form").dataset.good;
            // }
            // if (modal.id === "video-modal") {
            //     setTimeout(() => {
            //         modal.querySelector(".modal__content").empty();
            //     }, 200);
            // }
            document
                .querySelector("body, html")
                .classList.remove("overflow-hidden");
            document.querySelector("body").scroll(0, modalScrollTop);
        },
    });
}

function openModalVideo(modalId, videoSrc) {
    openModal(modalId);

    const htmlTemplateVideo = function (src) {
        return `
            <div class="aspect-ratio">
                <iframe
                    src="${src}"
                    class="aspect-ratio__inner"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        `;
    };

    const modalContainer = document.querySelector(
        `#${modalId} .modal__content`
    );

    modalContainer.empty().append(htmlTemplateVideo(videoSrc));
}

document.addEventListener("click", function (event) {
    if (event.target.closest("[data-custom-open]")) {
        const modalId = event.target.dataset.customOpen;

        openModal(modalId);
    }
    if (event.target.closest("[data-video-open]")) {
        const videoSrc = event.target.dataset.videoOpen;

        openModalVideo("video-modal", videoSrc);
    }
    if (event.target.closest(".modal__container")) {
        event.stopPropagation();
    }
    if ("customClose" in event.target.dataset) {
        const modalId = event.target.closest(".modal").id;

        MicroModal.close(modalId);
    }
});

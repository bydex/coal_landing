import "@yaireo/fakescroll/fakescroll";

document.querySelectorAll(".custom-scroll").forEach((scrollItem) => {
    const myScrollbar = scrollItem.fakeScroll({
        onChange: () => {
            myScrollbar.DOM.bar.style.top = myScrollbar.scrollRatio * 100 + "%";
        },
    });
});

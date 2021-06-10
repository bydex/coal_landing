import SmoothScroll from "smooth-scroll";

new SmoothScroll("a[href*='#']", {
    header: ".header",
    speed: 1000,
    speedAsDuration: true,
});

import Hamburger from "%components%/hamburger/hamburger";
import Nav from "%components%/nav/nav";

const nav = new Nav();

const hamburger = new Hamburger({
    button: "#hamburger-menu",
    onOpen: nav.open.bind(nav),
    onClose: nav.close.bind(nav),
});
hamburger.init();

document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-menu]")) {
        hamburger.close();
    }
});

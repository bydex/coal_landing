import Hamburger from "%components%/hamburger/hamburger";
import Nav from "%components%/nav/nav";

const nav = new Nav();

new Hamburger({
    button: "#hamburger-menu",
    onOpen: nav.open.bind(nav),
    onClose: nav.close.bind(nav),
}).init();

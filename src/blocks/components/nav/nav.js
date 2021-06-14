import Hamburger from "%components%/hamburger/hamburger";
const hamburger = new Hamburger({
    button: "#hamburger-menu",
});

class Nav {
    constructor() {
        this.nav = document.querySelector("#nav");
        this.activeClass = "nav_active";

        this.initClickOutside();
    }

    initClickOutside() {
        this.nav.addEventListener("click", (e) => {
            if (e.target.classList.contains("nav") && this.isOpen()) {
                this.close();
                hamburger.close();
            }
        });
    }

    open() {
        this.nav.classList.add(this.activeClass);
    }

    close() {
        this.nav.classList.remove(this.activeClass);
    }

    toggle() {
        if (this.isOpen()) this.close();
        else this.open();
    }

    isOpen() {
        return this.nav.classList.contains(this.activeClass);
    }
}

export default Nav;

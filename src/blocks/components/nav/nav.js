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
        document.addEventListener("click", (event) => {
            if (
                !event.target.closest(`#${this.nav.id}, #hamburger-menu`) &&
                this.isOpen()
            ) {
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

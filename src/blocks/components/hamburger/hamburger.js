class Hamburger {
    constructor({ button, onOpen = false, onClose = false }) {
        this.button = document.querySelector(button);
        this.activeClass = "hamburger_active";
        this.onOpen = onOpen;
        this.onClose = onClose;
    }

    open() {
        this.button.classList.add(this.activeClass);
        !this.onOpen || this.onOpen();
    }

    close() {
        this.button.classList.remove(this.activeClass);
        !this.onClose || this.onClose();
    }

    isOpen() {
        return this.button.classList.contains(this.activeClass);
    }

    toggle() {
        if (this.isOpen()) this.close();
        else this.open();
    }

    init() {
        this.button.addEventListener("click", () => this.toggle());
    }
}

export default Hamburger;

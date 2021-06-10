import maskInput from "vanilla-text-mask";

class Input {
    constructor() {
        this.filledClass = "input_filled";
        this.input = document.querySelectorAll(".input");
        this.inputTel = document.querySelectorAll("input[type='tel']");
        this.phoneMask = [
            "+",
            "7",
            " ",
            "(",
            /[1-9]/,
            /\d/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
        ];
    }
    maskInputTel() {
        if (this.inputTel !== undefined) {
            this.inputTel.forEach((el) => {
                maskInput({
                    inputElement: el,
                    mask: this.phoneMask,
                });
            });
        }
    }
    isFilled(input) {
        return !!input.querySelector("input, textarea").value;
    }
    setFilled(input) {
        input.classList.add(this.filledClass);
    }
    removeFilled(input) {
        input.classList.remove(this.filledClass);
    }
    manageFilled(input) {
        console.log(input, this.isFilled(input));
        if (this.isFilled(input)) {
            this.setFilled(input);
        } else {
            this.removeFilled(input);
        }
    }
    mountInputFilled() {
        const context = this;

        this.input.forEach((input) => {
            input.addEventListener("input", function () {
                context.manageFilled(this);
            });
            input.addEventListener("focus", function () {
                context.manageFilled(this);
            });
            input.addEventListener("blur", function () {
                context.manageFilled(this);
            });
        });
        this.input.forEach((input) => {
            context.manageFilled(input);
        });
    }
    init() {
        this.maskInputTel();

        this.mountInputFilled();
    }
}

new Input().init();

class Form {
    constructor() {
        this.forms = document.querySelectorAll("form");
        this.errorClass = "input__error";
        this.errorStateClass = "input_error";
    }
    init() {
        const context = this;

        Array.from(this.forms).forEach((form) => {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                if (context.validate(this)) {
                    context.sendForm(
                        context.serialize(this),
                        () => (window.location = "/thanks")
                    );
                }
            });
        });
    }
    sendForm(data, success = () => {}) {
        fetch("./mail.php", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(success);
    }
    serialize(form) {
        const formElements = this.getInputs(form);

        let serialized = formElements
            .filter((item) => item[0] !== "checkbox")
            .map((item) => {
                const [key, input] = item;

                if (key === "checkbox") return false;

                if (key === "phone") {
                    return [key, input.value.replace(/[^\d//+]/g, "")];
                } else if (key === "subject" || key === "good") {
                    return [key, input];
                } else {
                    return [key, input.value];
                }
            });
        serialized = Object.fromEntries(serialized);

        return serialized;
    }
    getInputs(form) {
        let formElements = {
            name: form.querySelector("input[type='text']"),
            tel: form.querySelector("input[type='tel']"),
            checkbox: form.querySelector("input[type='checkbox']"),
            message: form.querySelector("textarea"),
            email: form.querySelector("input[type='email']"),
            subject: form.querySelector("subject"),
            good: form.querySelector("good"),
        };

        formElements = Object.entries(formElements).filter((item) =>
            item[1] ? item[1] : false
        );

        console.log(formElements);

        return formElements;
    }
    validate(form) {
        let formElements = this.getInputs(form);

        const isValid = formElements.map((item) => {
            const [key, input] = item;

            if (key === "name") {
                return this.validateElement(input, input.value.length < 1);
            }
            if (key === "tel") {
                return this.validateElement(
                    input,
                    input.value.replace(/[^\d//+]/g, "").length !== 12
                );
            }
            if (key === "checkbox") {
                return this.validateElement(input, !input.checked);
            }
            if (key === "email") {
                return this.validateElement(input, input.value.length < 1);
            }
            if (key === "subject") {
                return true;
            }
            if (key === "good") {
                return true;
            }
        });

        for (let val of isValid) {
            if (val === false) {
                return false;
            }
        }
        return true;
    }
    validateElement(input, condition) {
        if (condition) {
            this.setErrorState(input);
            this.createError(input, "Поле не заполнено");
            return false;
        } else {
            this.removeErrorState(input);
            this.removeError(input);
            return true;
        }
    }
    setErrorState(input) {
        input.closest("label").classList.add(this.errorStateClass);
    }
    removeErrorState(input) {
        input.closest("label").classList.remove(this.errorStateClass);
    }
    createError(input, text) {
        if (this.hasError(input)) return;

        const errorBlock = document.createElement("div");
        errorBlock.classList.add(this.errorClass);
        errorBlock.textContent = text;

        input.parentNode.appendChild(errorBlock);
    }
    removeError(input) {
        if (!this.hasError(input)) return;

        input
            .closest("label")
            .querySelector("." + this.errorClass)
            .remove();
    }
    hasError(input) {
        return input.parentNode.querySelectorAll("." + this.errorClass).length;
    }
}
const form = new Form();

form.init();

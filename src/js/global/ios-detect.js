import { isIOS } from "%js%/utils";

if (isIOS()) {
    document.body.classList.add("ios");
}

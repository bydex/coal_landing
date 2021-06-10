/* eslint-disable no-undef */
import lozad from "lozad";

const map = document.querySelector("#map");

if (map) {
    const observer = lozad(map, {
        loaded: loadYandexMap,
    });

    observer.observe();
}
function loadYandexMap() {
    const script = document.createElement("script");
    script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=46abbcff-30dc-44f3-a84c-81899671e35c&lang=ru";

    script.addEventListener("load", () => ymaps.ready(init));

    document.querySelector("head").appendChild(script);
}
function init() {
    map.classList.remove("preloader");

    const yandexMap = new ymaps.Map("map", {
        center: [49.8147076, 73.1113403],
        zoom: 15,
        controls: ["zoomControl"],
    });

    const mark = new ymaps.Placemark(
        [49.8147076, 73.1113403],
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "./img/mark.svg",
            iconImageSize: [37, 50],
            iconImageOffset: [-18.5, -50],
        }
    );

    yandexMap.behaviors.disable("scrollZoom");

    yandexMap.geoObjects.add(mark);
}

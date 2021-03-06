"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: ["./src/views/index.pug", "./src/views/pages/*.pug"],
            dist: "./dist/",
            watch: ["./src/blocks/**/*.pug", "./src/views/**/*.pug"],
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}",
            ],
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}",
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/svg/*.svg",
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}",
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: [
                "./src/.htaccess",
                "./src/mail.php",
                "./src/испытательная_лаборатория.pdf",
                "./src/анкета_удовлетворенности_потребителей.pdf",
                "./src/знаки_соответствия.pdf",
                "./src/информация_о_финансировании.pdf",
                "./src/нормативные_документы_по_сертификации_углей_и_продуктов_их_переработки.pdf",
                "./src/политика_по_беспристрастности_ОПС.pdf",
                "./src/порядок_подтверждения_соответствия.pdf",
                "./src/порядок_рассмотрения_жалоб_и_апелляций.pdf",
                "./src/права_и_обязанности_заявителей.pdf",
                "./src/приостановление_и_отмена_действия_выданных_сертификатов_соответствия.pdf",
            ],
            dist: "./dist/",
        },
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series(
    "clean",
    "smart-grid",
    gulp.parallel([
        "views",
        "styles",
        "scripts",
        "images",
        "webp",
        "sprites",
        "fonts",
        "favicons",
    ]),
    gulp.parallel("serve")
);

export const prod = gulp.series(
    "clean",
    gulp.parallel([
        "views",
        "styles",
        "scripts",
        "images",
        "webp",
        "sprites",
        "fonts",
        "favicons",
        "gzip",
    ])
);

export default development;

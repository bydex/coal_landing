"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container",
        },
        container: {
            maxWidth: "1200px",
            fields: "15px", // side fields - 15px
        },
        breakPoints: {
            xss: {
                width: "360px",
            },
            sm: {
                width: "420px",
            },
            md: {
                width: "767px",
            },
            lg: {
                width: "991px",
            },
            xl: {
                width: "1200px",
            },
        },
    });
    cb();
});

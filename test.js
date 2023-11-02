const https = require("https");
const parser = require("node-html-parser");

let url = "https://www.melon.com/new/index.htm";

let titles = [];
let names = [];

https.get(url, (resp) => {
    let data = "";

    resp.on("data", (d) => {
        data += d;
    });

    resp.on("end", () => {
        let root = parser.parse(data);

        root.querySelectorAll(".rank01").forEach((item) => {
            titles.push(item.querySelector("a").innerText);
        });
        root.querySelectorAll(".rank02").forEach((item) => {
            names.push(item.querySelector("a").innerText);
        });

        for (let i = 0; i < titles.length; i++) {
            let line = `${i + 1}. ${titles[i]} - ${names[i]}`;
            console.log(line);
        }
    });
});


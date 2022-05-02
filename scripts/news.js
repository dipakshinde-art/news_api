// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();


let newsdata = JSON.parse(localStorage.getItem("news"))||[];
console.log("search",newsdata);
let con=document.querySelector("#detailed_news");
newsdata.forEach(function (elem) {

    let img = document.createElement("img");
    img.src = elem.urlToImage;

    let h4 = document.createElement("h4");
    h4.innerHTML = elem.title;

    let p = document.createElement("p");
    p.innerHTML = elem.description;

    con.append(img,h4,p)
})
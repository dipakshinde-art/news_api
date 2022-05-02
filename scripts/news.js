// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

let newsdata = JSON.parse(localStorage.getItem("news")) || [];
console.log("search_page", newsdata);


let con = document.querySelector("#detailed_news");

for(let i=0;i<1;i++)
{
    let img = document.createElement("img");
    img.src = newsdata[0]
    img.setAttribute("id","news_img")
  
    let h4 = document.createElement("h4");
    h4.innerHTML =  newsdata[1];
  
    let p = document.createElement("p");
    p.innerHTML =  newsdata[2];
    con.append(img, h4, p);

}  

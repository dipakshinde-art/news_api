// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import { Search_news, appendTobody, _country_news } from "./fetch.js";
//search

let search = (e) => {
  let search_value = document.querySelector("#search_input").value;
  console.log(search_value);

  let x = Search_news(search_value).then((data) => {
    console.log(data);

    let container = document.querySelector("#results");
    appendTobody(data.articles, container);
   // window.location.href="search.html"
  });
};

document.querySelector("#search_input").addEventListener("keydown", search);
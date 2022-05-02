// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import { Search_news, appendTobody, _country_news } from "./fetch.js";
//search

let search = () => {
  let search_value = document.querySelector("#search_input").value;
  // console.log(search_value);
  Search_news(search_value).then((data) => {
    // console.log("yes",data);
    if (data === "Error" || data === undefined) {
      return false;
    }
    let container = document.querySelector("#results");
    appendTobody(data.articles, container);
  });
};

document.querySelector("#search_input").addEventListener("keydown", search);

//category_search

let category = document.querySelector("#sidebar").children;

function show_category_news() {
  console.log("category_search", this.id);
  _country_news(this.id).then((data) => {
    let container = document.querySelector("#results");
    appendTobody(data.articles, container);
    console.log(data);
  });
}

for (let e of category) {
  e.addEventListener("click", show_category_news);
}

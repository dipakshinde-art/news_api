let Search_news = async (search) => {
  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news?q=${search}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
let appendTobody = (data, _Container) => {
  _Container.innerHTML = null;
  console.log(data);
  data.map(({ urlToImage, description, title }) => {
    let main = document.createElement("div");
    main.setAttribute("class","main")
    let img = document.createElement("img");
    img.src = urlToImage;

    let div = document.createElement("div");
    div.setAttribute("id","newsinfo")
    let h4 = document.createElement("h4");
    h4.innerHTML = title;

    let p = document.createElement("p");
    p.innerHTML = description;

    div.append(h4, p);
    
    main.append(img, div);
    main.addEventListener("click",function(){
      console.log("click")
      show_to_news(data)
     
    });
    _Container.append(main);
  });
};


let _country_news = async (code)=>{
  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
let newsdata=[];
 //newsdata = JSON.parse(localStorage.getItem("news"));
let show_to_news=(data)=>{
  console.log(data);
 // console.log("yes",urlToImage, description, title);
  newsdata.push(data);
  localStorage.setItem("news", JSON.stringify(newsdata));
  window.location.href="./news.html"
}
export { Search_news, appendTobody,_country_news };

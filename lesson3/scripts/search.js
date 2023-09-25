const body = document.querySelector("body");
const searchInput = document.querySelector("#search");
const URL = "https://jsonplaceholder.typicode.com/";
let URLFind;
const className = JSON.parse(localStorage.getItem("class"));
let dataArr = [];
let searchDataArr = [];

searchInput.classList.add(className);

switch (className) {
  case "postsSearch":
    URLFind = `${URL}posts`;
    break;
  case "albumsSearch":
    URLFind = `${URL}albums`;
    break;

  default:
    URLFind = `${URL}todos`;
    break;
}

fetch(URLFind)
  .then((response) => response.json())
  .then((data) => {
    dataArr = data;
  });

searchInput.addEventListener("keyup", () => {
    try { 
        body.removeChild(document.querySelector(".find-list"));
    } catch (error) {
        console.log("нет такого обьекта");
    }
    const ul = document.createElement("ul");
    searchDataArr = dataArr.filter((el) => {
        return el.title.indexOf(searchInput.value) != -1; 
    });
    searchDataArr.forEach((el)=> {
        ul.classList.add("find-list");
        const li = document.createElement("li");
        li.textContent = el.title;
        ul.append(li);
    })
    body.append(ul);
});

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
        
        ul.append(makeLi(el.title, searchInput.value, searchInput.value.length));
    })
    body.append(ul);
});

function makeLi(string, find, findLength){
    const findIndex = string.indexOf(find);
    const li = document.createElement("li");
    const left = string.slice(0, findIndex);
    const findSpan = document.createElement("span");
    findSpan.textContent = find;
    const right = string.slice(findIndex + findLength, string.length - 1);
    li.append(left, findSpan, right);
    return li;
}

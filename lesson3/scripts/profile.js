import { postsLink, albumsLink, todosLink, userInfo, logout, editBtn} from "./variables.js";

editBtn.textContent = "edit";

logout.addEventListener("click", () => {
    localStorage.removeItem("user");
    location.href = "authorization.html";
})

const userData = JSON.parse(localStorage.getItem("user"));

for (const key in userData) {
    if(typeof userData[key] != "object"){
        const el = document.createElement("span");
        el.classList.add("userinfo");
        el.textContent = `${key}: ${userData[key]}`;
        userInfo.append(el);

        if(key === "website"){
             userInfo.append(editBtn);
        }
    }
}

postsLink.addEventListener("click", () => {
    localStorage.setItem("class" ,JSON.stringify("postsSearch"));
})
albumsLink.addEventListener("click", () => {
    localStorage.setItem("class" ,JSON.stringify("albumsSearch"));
})
todosLink.addEventListener("click", () => {
    localStorage.setItem("class" ,JSON.stringify("todosSearch"));
})
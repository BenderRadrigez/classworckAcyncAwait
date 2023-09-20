const userInfo = document.querySelector("#user-info");
const logout = document.querySelector("#logout");
const editBtn = document.createElement("button");
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
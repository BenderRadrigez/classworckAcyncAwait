import {container, name, email, btn, p, URL} from "./scripts/variables.js"

btn.addEventListener("click", () => {
    fetchData(URL).then((response) => {
        return response.json();
    }).then((user) =>{
        user.length === 0 ? printMessage() : (location.href = "profile.html");
    })
})

async function fetchData(url){
    const user = await fetch(`${url}?username=${name.value}&email=${email.value}`);
    return user;
}

function printMessage() {
    p.textContent = "введите правильные данные"
    container.append(p);
}
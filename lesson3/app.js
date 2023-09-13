const container = document.querySelector(".container");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const btn = document.querySelector(".btn");

const p = document.createElement("p");

const URL = "https://jsonplaceholder.typicode.com/users";

btn.addEventListener("click", () => {
    fetchData(URL).then((response) => {
        return response.json();
    }).then((user) =>{
        console.log(user);
        user.length === 0 ? printMessage() : (location.href = "index2.html");
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
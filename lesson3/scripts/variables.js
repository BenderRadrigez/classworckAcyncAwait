const container = document.querySelector(".container");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const btn = document.querySelector(".btn");

const p = document.createElement("p");

const URL = "https://jsonplaceholder.typicode.com/users";
let dataUser = {};

export {container, name, email, btn, p, URL, dataUser}
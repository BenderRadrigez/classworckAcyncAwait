// data from authorization
const container = document.querySelector(".container");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const btn = document.querySelector(".btn");
const p = document.createElement("p");

const URL = "https://jsonplaceholder.typicode.com/";


// data from profile
const postsLink = document.querySelector(".posts")
const albumsLink = document.querySelector(".albums")
const todosLink = document.querySelector(".todos")
const userInfo = document.querySelector("#user-info");
const logout = document.querySelector("#logout");
const editBtn = document.createElement("button");


export {container, name, email, btn, p, URL, userInfo, logout, editBtn,postsLink, albumsLink, todosLink}
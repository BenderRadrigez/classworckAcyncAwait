const inputCompany = document.querySelector("input");
const fetchBtn = document.querySelector(".btn");
const body = document.querySelector("body");
const cards = document.querySelector(".cards");

const URL = "https://jsonplaceholder.typicode.com/users";

fetchBtn.addEventListener("click", () => {
  fetch(`${URL}?company.name=${inputCompany.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const card = document.createElement("div");
      card.classList.add("card");
      if (data.length === 0)
        card.append((document.createElement("p").textContent = "Invalid data"));
      else {
        data.forEach((el) => {
          card.append(
            (document.createElement("p").textContent = el["company"]["name"])
          );
        });
      }
      cards.append(card);
    });
});

import { container, name, email, btn, p, URL } from "./scripts/variables.js";

btn.addEventListener("click", () => {
  fetchData(URL)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      user.length === 0 ? printMessage() : (location.href = "profile.html");
    });
});

email.addEventListener("keyup", () => {
    let colorEmail = "";
    if (!validEmail(email.value)) colorEmail = "red";
    else colorEmail = "green";
    email.style.color = colorEmail;
})

async function fetchData(url) {
  const user = await fetch(
    `${url}?username=${name.value}&email=${email.value}`
  );
  return user;
}

function printMessage() {
  p.textContent = "введите правильные данные";
  container.append(p);
}

function validEmail(value) {
  let indexAt = value.search(/\@/g);
  let indexDot = value.substring(indexAt + 1).search(/\./g);
  let postfix = value.substring(indexDot + 1);

  return indexAt === -1 || indexDot === -1
    ? false
    : value.substring(indexAt + 1, indexDot) < 2
    ? false
    : postfix.length < 2 || postfix.search(/\./g) === -1
    ? false
    : true;
}
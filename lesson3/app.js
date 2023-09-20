import { container, name, email, btn, p, URL } from "./scripts/variables.js";

// log In
btn.addEventListener("click", () => {
  fetchData(URL)
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      user.length === 0 ? printMessage() : goToProfile(user[0]);
    });
});

// listener: is valid email or not
email.addEventListener("keyup", () => {
    email.style.color = !isValidEmail(email.value) ? "red" : "green";
})

// get data
async function fetchData(url) {
  const user = await fetch(
    `${url}?username=${name.value}&email=${email.value}`
  );
  return user;
}

// err message
function printMessage() {
  p.textContent = "введите правильные данные";
  container.append(p);
}

// validation
function isValidEmail(value) {
  let indexAt = value.search(/\@/g);
  let indexDot = value.substring(indexAt + 1).search(/\./g);
  let postfix = value.substring(indexDot + 1);

  return indexAt === -1 || indexDot === -1
    ? false
    : postfix.length < 2 || postfix.search(/\./g) === -1
    ? false
    : true;
}

// chenge location
function goToProfile(data){
    localStorage.setItem("user", JSON.stringify(data));
    location.href = "profile.html";
}

const email = document.getElementById("input-email");
const formBtn = document.getElementById("form-btn");
const alert = document.querySelector(".alert");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateEmail(email.value)) {
    email.value = "";
    alert.style.color = "green";
    alert.textContent = "Email sended succesfully!";
    alert.style.display = "block";
    disapearAlert();
  } else {
    alert.textContent = "Please enter a valid email address";
    alert.style.color = "var(--lightRed)";
    alert.style.display = "block";
    disapearAlert();
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function disapearAlert() {
  setTimeout(() => {
    alert.style.display = "none";
  }, 2500);
}

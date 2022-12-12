const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked button");
  checkInputs();
});

function checkInputs() {
  //get the values from the inputs and remove whitespace
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();

  if (nameValue === "") {
    //show error
    setErrorFor(name, "Name cannot be blank");
  } else if (emailValue === "") {
    //show another error
    setErrorFor(email, "E-mail cannot be blank");
  } else {
    //success
    setSuccessFor(name);
    setSuccessFor(email);
    alert(
      "O usuário " + name.value + "foi registrado com o e-mail " + email.value
    );
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control success";
}

const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const confirmationMessage = document.getElementById("confirmation-message");

const textArea = document.getElementById("messaggio");
const counter = document.getElementById("char-counter");
counter.innerHTML = "Caratteri rimanenti: " + textArea.maxLength;

const togglePassword = document.getElementById("toggle-password");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const domainRegex = /@[^\s.]+\.[^\s.]+$/;
  const domain = email.match(domainRegex);
  if (!domain) {
    return false;
  }
  const domainName = domain[0].slice(1);
  const domainParts = domainName.split(".");
  const lastPart = domainParts[domainParts.length - 1];
  if (lastPart.length < 2 ) {
    return false;
  }
  return emailRegex.test(email);
}

function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(username);
}

function validatePassword(password) {
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function validateLength(value, maxLength) {
  return value.length <= maxLength;
}

textArea.addEventListener("input", () => {
  const remaining = textArea.maxLength - textArea.value.length;
  counter.innerHTML = "Caratteri rimanenti: " + remaining;
});

togglePassword.addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.innerHTML = "Nascondi Password";
  } else {
    passwordInput.type = "password";
    togglePassword.innerHTML = "Mostra Password";
  }
});

function showConfirmation(message) {
  confirmationMessage.innerHTML = message;
}

function clearForm() {
  form.reset();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = form.elements["nome"].value;
  const cognome = form.elements["cognome"].value;
  const email = form.elements["email"].value;
  const cellNumber = form.elements["telefono"].value;
  const messaggio = form.elements["messaggio"].value;
  const username = form.elements["username"].value;
  const password = form.elements["password"].value;
  const confirmPassword = form.elements["confirm-password"].value;

  const errorMessages = [];

  if (!/^[a-zA-Z]+$/.test(nome)) {
    errorMessages.push("Il nome puo contenere solo lettere.");
  }

  if (!/^[a-zA-Z]+$/.test(cognome)) {
    errorMessages.push("Il cognome puo contenere solo lettere.");
  }

  if (nome.length < 3) {
    errorMessages.push("Il nome deve avere almeno 3 caratteri.");
  }

  if (cognome.length < 3) {
    errorMessages.push("Il cognome deve avere almeno 3 caratteri.");
  }

  if (!validateEmail(email)) {
    errorMessages.push("L'email inserita non è valida.");
  }

   if (!validateUsername(username)) {
    errorMessages.push("L'username inserito non è valido.");
  }

  if (!validatePassword(password)) {
    errorMessages.push("La password deve contenere almeno 8 caratteri di cui: una lettera minuscola, una lettera maiuscola, un numero, un carattere speciale");
  }

  if (!validateConfirmPassword(password, confirmPassword)) {
    errorMessages.push("La conferma della password non corrisponde a quella inserita.");
  } 

if (!/^3[1-9][0-9]{8}$/.test(cellNumber)) {
  errorMessages.push("Il numero di cellulare non è corretto.");
}

  if (/<script>/i.test(messaggio)) {
    errorMessages.push("Non è permesso inserire script di codice nella text area.");
  }

  if (!validateLength(messaggio, 150)) {
    errorMessages.push("Il messaggio non può superare i 150 caratteri.");
  }

  const errorDiv = document.getElementById("error-message");
  errorDiv.innerHTML = "";
  errorMessages.forEach((message) => {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.innerHTML = message;
    errorDiv.appendChild(errorMessage);
  });

  if (errorMessages.length === 0) {
    showConfirmation("Form inviato!");
    clearForm();
  }
});
 
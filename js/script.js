let password = "";
const correctPassword = "060805";
const passwordInput = document.getElementById("password");

function addNumber(number) {
  if (password.length < 6) {
    password += number;
    passwordInput.value = password;
    passwordInput.classList.add("active");
  }
}

function clearPassword() {
  password = "";
  passwordInput.value = password;
  passwordInput.classList.remove("active");
}

function checkPassword() {
  if (password === correctPassword) {
    alert("Embee đoán đúng òii, chuẩn bị đón bất ngờ nhaaa!!");
    window.location.href = "./html/sinhnhat.html";
  } else {
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
      alert("Sai bét òiii, embee đoán lại dii");
      clearPassword();
    }, 500);
  }
} 

function createHeartEffects() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.backgroundColor = `hsl(${Math.random() * 20 + 330}, 80%, ${Math.random() * 20 + 60}%)`;
    document.body.appendChild(heart);
  }
}

window.addEventListener("load", () => {
  createHeartEffects();
});
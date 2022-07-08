let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$@"
let newPassword = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generatePassword() {
  let createPassword = ""
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    createPassword += charset.charAt(Math.floor(Math.random() * n))
  }
  containerPassword.classList.remove("hide")
  password.innerHTML = createPassword
  newPassword = createPassword

}

function copyPassword() {
  alert("SENHA COPIADA COM SUCESSO!")
  navigator.clipboard.writeText(newPassword)
}
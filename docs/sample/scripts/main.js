"use strict";

// Initializes MailForm.
function MailForm() {
  // get DOM Elements.
  this.nameInput = document.getElementById("name");
  this.emailInput = document.getElementById("email");
  this.messageInput = document.getElementById("message");
  this.snackbar = document.getElementById("snackbar");
  this.sendButton = document.getElementById("send");
  this.sendButton.addEventListener("click", this.sendMessage.bind(this));

  const buttonTogglingHandler = this.toggleButton.bind(this);
  this.nameInput.addEventListener("change", buttonTogglingHandler);
  this.nameInput.addEventListener("keyup", buttonTogglingHandler);
  this.emailInput.addEventListener("change", buttonTogglingHandler);
  this.emailInput.addEventListener("keyup", buttonTogglingHandler);
  this.messageInput.addEventListener("change", buttonTogglingHandler);
  this.messageInput.addEventListener("keyup", buttonTogglingHandler);
}

MailForm.prototype.sendMessage = async function (e) {
  // e.preventDefault();
  // const data = {
  //   name: this.nameInput.value,
  //   email: this.emailInput.value,
  //   message: this.messageInput.value,
  // };
  // try {
  //   await firebase.functions().httpsCallable("sendMail")(data);
  //   this.successSnackbar();
  //   this.resetForm();
  // } catch {
  //   this.errorSnackbar();
  // }
};

MailForm.prototype.toggleButton = function () {
  if (this.nameInput.value && this.emailInput.value && this.messageInput.value) {
    this.sendButton.removeAttribute("disabled");
  } else {
    this.sendButton.setAttribute("disabled", "true");
  }
};

MailForm.prototype.resetForm = function () {
  this.nameInput.value = "";
  this.emailInput.value = "";
  this.messageInput.value = "";
  this.toggleButton();
};

MailForm.prototype.successSnackbar = function () {
  this.snackbar.style.backgroundColor = "#2196f3";
  this.snackbar.MaterialSnackbar.showSnackbar({ message: "送信に成功しました" });
};

MailForm.prototype.errorSnackbar = function () {
  this.snackbar.style.backgroundColor = "#f44336";
  this.snackbar.MaterialSnackbar.showSnackbar({ message: "送信に失敗しました" });
};

window.onload = function () {
  // Initializes MailForm.
  window.mailForm = new MailForm();
};

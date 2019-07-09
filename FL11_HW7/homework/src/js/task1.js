let adminGmail = "admin@gmail.com";
let userGmail = "user@gmail.com";
let adminPass = "AdminPass";
let userPass = "UserPass";
let email = prompt("Enter your email please:");
let password;
let anotherPass;
let oldPass
let newPass
const emailLenght = 6;
const passwordLength = 5;


if (email === null || email === "") {
  alert("Canceled");
} else if (email === adminGmail || email === userGmail) {
  password = prompt("Enter your password please:");
} else if (email.length < emailLenght) {
  alert("I don't know any emails having name length less than 6 symbols.");
} else {
  alert("I don’t know you.");
}

if (password !== undefined) {
    if (password === null || password === "") {
      alert("Canceled");
    } else if (password === adminPass || password === userPass) {
      anotherPass = confirm("Do you want change password?");
    } else {
      alert("Wrong password.");
    }
  }

if (anotherPass !== undefined) {
  if (anotherPass === true) {
    oldPass = prompt("Enter old password please:");

    if (oldPass === null || oldPass === "") {
      alert("You have failed the change.");
    } else if (oldPass === adminPass) {
        newPass = prompt("Enter new password please:");

      if (newPass === null || newPass === "") {
        alert("You have failed the change.");
      } else if (newPass.length < passwordLength) {
        alert("It’s too short password. Sorry.");
      } else {
        let repeatPassword = prompt("Repeat new password please:");

        if (repeatPassword === null || repeatPassword === "") {
          alert("You have failed the change.");
        } else if (repeatPassword === newPass) {
          adminPass = newPass;
          alert("You have successfully changed your password. ");
        } else {
          alert("Wrong password.");
        }
      }
    } else if (oldPass === userPass) {
      let newPass = prompt("Enter new password please:");

      if (newPass === null || newPass === "") {
        alert("You have failed the change.");
      } else if (newPass.length < passwordLength) {
        alert("It’s too short password. Sorry.");
      } else {
        let repeatPassword = prompt("Repeat new password please:");

        if (repeatPassword === null || repeatPassword === "") {
          alert("You have failed the change.");
        } else if (repeatPassword === newPass) {
          userPass = newPass;
          alert("You have successfully changed your password. ");
        } else {
          alert("Wrong password.");
        }
      }
    } else {
      alert("Wrong password.");
    }
  } else {
    alert("You have failed the change.");
  }
}

let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");

let signupform = document.querySelectorAll("section")[0];
let successmsg = document.querySelectorAll("section")[1];

let email = document.querySelector("input");
let errormsg = document.querySelector(".error");

btn1Array = Array.from(btn1);
btn2Array = Array.from(btn2);

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

if (validateEmail) {
    btn1Array.forEach(elem => {
        elem.onclick = () => {
            signupform.classList.add("hidden");
            successmsg.classList.remove("hidden");
        }
    });
} else {
    errormsg.classList.remove("hidden");
}

btn2Array.forEach(elem => {
    elem.onclick = () => {
        successmsg.classList.add("hidden");
        signupform.classList.remove("hidden");
    }
});

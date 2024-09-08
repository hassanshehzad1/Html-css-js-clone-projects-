console.log("Hello");

let dropDown = document.querySelector(".drop_down");
let dropDownContent = document.querySelector(".drop_down_div");
dropDown.addEventListener("click", function (e) {
  e.preventDefault();
  dropDownContent.classList.toggle("hide");
});

// sign in button

let landingContent = document.getElementById("landing_content");
let signUpCondition = document.getElementById("sign_up_condition");

function pageDisplay() {
  if (landingContent.classList.contains("block")) {
    landingContent.classList.remove("block");
    landingContent.classList.add("none");

    // signUpCondition.classList.add("block");
    // signUpCondition.classList.remove("none");
    signUpCondition.classList.remove("margin_top");
    signUpCondition.classList.add("transition");
  } else {
    landingContent.classList.remove("none");
    landingContent.classList.add("block");
    // signUpCondition.classList.add("none");
    // signUpCondition.classList.remove("block");
    signUpCondition.classList.add("margin_top");
    signUpCondition.classList.remove("transition");
  }
}

let SignInBtn = document.getElementById("sign_in");
SignInBtn.addEventListener("click", pageDisplay);

let toggleBtn = document.querySelector(".btn_cross");

toggleBtn.addEventListener("click", pageDisplay);

// getting the height of div section
let bottomArrow = document.getElementsByClassName("bottom_arrow");

window.onscroll = function checkHeight() {
  let divElement = document.querySelector("#myDiv");
  if (divElement) {
    let divHeight = divElement.offsetHeight;
    let pageOffSet = window.scrollY;
    console.log(divHeight + " " + pageOffSet);
    if (pageOffSet > 300) {
      bottomArrow[0].style.bottom = "25px";
    } else {
      bottomArrow[0].style.bottom = "-200px";
    }
  }
};

// hamuburger

let lines = document.getElementById("lines");
let cross = document.getElementById("cross");
let navUl = document.getElementsByClassName("nav_ul");
let respNavbar = document.querySelector(".resp_navbar")
if (lines) {
  function navToggle() {
    if (cross.classList.contains("none")) {
      lines.classList.remove("block");
      lines.classList.add("none");
      cross.classList.add("block");
      cross.classList.remove("none");
      landingContent.classList.remove("block");
      landingContent.classList.add("none");
      respNavbar.classList.add("block")
      respNavbar.classList.remove("none")
    
    } else {
      lines.classList.add("block");
      lines.classList.remove("none");
      cross.classList.add("none");
      cross.classList.remove("block");
      landingContent.classList.add("block");
      landingContent.classList.remove("none");
      respNavbar.classList.add("none")
      respNavbar.classList.remove("block")
    }
  }
}
lines.addEventListener("click", navToggle);
cross.addEventListener("click", navToggle);

// elemHeight = divElement.offsetHeight;

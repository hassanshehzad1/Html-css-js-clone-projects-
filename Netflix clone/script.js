// acessing faqs questions and answer

// variable intitailization and decalretization
let plusBtn = document.getElementsByClassName("faqs_btn");
let faqsAnswers = document.getElementsByClassName("faqs_answer");
// checking if faqs_btn class exists
if (plusBtn.length > 0) {
  // using built in fucntion add event lsietener
  // when clicked it will run the fucntion name show
  // plusBtn.addEventListener("click", show);
  //  function to show faqs answer
  function show() {
    for (let i = 0; i < plusBtn.length; i++) {
      const element = plusBtn[i];
      element.addEventListener("click", function () {
        // toggles the display of faqs_answer
        faqsAnswers[i].classList.toggle("hide");
      });
    }
  }
}

show();

//now making function of image slider

let slideIndex = 0;

function showSlide(terms) {
  let slide = document.querySelectorAll(".slide");

  if (terms >= slide.length) {
    slideIndex = 0;
  }

  if (terms < 0) {
    slideIndex = slide.length - 1;
  }

  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  let num1 = slideIndex + 4;
  let num5 = slideIndex + 5;
  let num2 = slideIndex++;
  let num3 = slideIndex + 2;
  let num4 = slideIndex + 3;
  slide[num1].style.display = "block";
  slide[num2].style.display = "block";
  slide[num3].style.display = "block";
  slide[num4].style.display = "block";
  slide[num5].style.display = "block";
}

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function () {
  console.log("hello");
  slideIndex--;
  showSlide(slideIndex);
});

nextBtn.addEventListener("click", function () {
  // console.log("hello");
  slideIndex++;
  showSlide(slideIndex);
});


// focus of email address and passowrd
// accesing te input field
// let email = document.querySelector('input').focus.;

const steps = Array.from(document.querySelectorAll("form .action"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const radioInputs = document.querySelectorAll("form input");

const landingPage = document.querySelector(".landing");
const survey = document.querySelector(".survey");

function switchVisible() {
  if (document.getElementById("landing")) {
    if (document.getElementById("landing").style.display == "none") {
      document.getElementById("landing").style.display = "block";
      document.getElementById("survey").style.display = "none";
    } else {
      document.getElementById("landing").style.display = "none";
      document.getElementById("survey").style.display = "block";
    }
  }
}

radioInputs.forEach((input) => {
  if (input.type === "radio") {
    input.addEventListener("click", function () {
      changeStep("next");
    });
  }
});

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];

  form.querySelectorAll("input").forEach((input) => {
    if (input.type !== "submit" && input.type !== "checkbox") {
      if (input.type === "radio" && input.checked) {
        const { name, value } = input;
        inputs.push({ name, value });
      } else if (input.type !== "radio") {
        const { name, value } = input;
        inputs.push({ name, value });
      }
    }
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".current");
  index = steps.indexOf(active);
  steps[index].classList.remove("current");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("current");
}

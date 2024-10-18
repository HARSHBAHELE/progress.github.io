const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
let h1 = document.querySelector("#h1");

const progressEl = document.querySelector(".progress-bar-front");

const stepsEl = document.querySelectorAll(".step");

let currenChecked = 1;

nextEl.addEventListener("click",() => {
    currenChecked++
    if(currenChecked > stepsEl.length) {
        currenChecked = stepsEl.length;
    }
    updateStepProgress();
});

prevEl.addEventListener("click",() => {
    currenChecked--;
    if(currenChecked < 1) {
        currenChecked = 1;
    }
    updateStepProgress();
});

function updateStepProgress() {
    stepsEl.forEach((stepEl, idx) => {
      if (idx < currenChecked) {
        stepEl.classList.add("checked");
        stepEl.innerHTML = `
        <i class="fas fa-check"></i>
        <small>${
          idx === 0
            ? "Start"
            : idx === stepsEl.length - 1
            ? "Final"
            : "Step " + idx
        }</small>
        `;
        if(idx === 1) {
            h1.innerHTML="You Reached Step 2 ❤️😊";
        }
        if(idx === 2) {
            h1.innerHTML="You Reached Step 3 ❤️😊";
        }
        if(idx === 3) {
            h1.innerHTML="You Reached Step 4❤️😊";
        }
        if(idx === 4) {
            h1.innerHTML="You Reached Final Step 🎉😍";
        }
        if(idx === 0) {
            h1.innerHTML="Start the Progress bar Again😊❤️❤️😊";
        }
      } else {
        stepEl.classList.remove("checked");
        stepEl.innerHTML = `
        <i class="fas fa-times"></i>
        `;
      }
    });
let checkNumber = document.querySelectorAll(".checked");
progressEl.style.width = ((checkNumber.length - 1)/(stepsEl.length-1)) * 100 + "%";

if(currenChecked === 1) {
    prevEl.disabled = true;
} else if (currenChecked === stepsEl.length) {
    nextEl.disabled = true;
} else {
    prevEl.disabled = false;
    nextEl.disabled = false;
   }
}




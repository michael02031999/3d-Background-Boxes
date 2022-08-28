let container = document.getElementById("container3");

let magic = document.getElementById("magic");
magic.addEventListener("click", rotateGif);

let allBoxes = document.querySelectorAll(".box");

console.log(allBoxes);

let count = 0;

function rotateGif() {
  if (count % 2 == 0) {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].style.transform = "rotate(-360deg)";
      container.style.gridGap = "0px";
    }
  }
  if (count % 2 == 1) {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].style.transform = "rotate(0deg)";
      container.style.gridGap = "25px";
    }
  }
  count++;
}

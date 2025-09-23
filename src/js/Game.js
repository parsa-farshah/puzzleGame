let btnMenu = document.querySelector("#btnMenu");
let subMenu = document.querySelector("#subMenu");
let congratulation = document.querySelector("#congratulation");
let divHeight = document.querySelectorAll("#boxImage>div");
let xh = 0;
let divSHeightWidth = [];

divHeight.forEach((val) => {
  xh = val.getBoundingClientRect();
  divSHeightWidth.push(xh);
});
console.log(divSHeightWidth);
let divNinewidth = divSHeightWidth[0].x;
let divNineHeight = divSHeightWidth[0].y;
let divEightWidth = divSHeightWidth[1].x;
let divEightHeight = divSHeightWidth[1].y;
let divSevenWidth = divSHeightWidth[2].x;
let divSevenHeight = divSHeightWidth[2].y;
let divSixWidth = divSHeightWidth[3].x;
let divSixHeight = divSHeightWidth[3].y;
let divFiveWidth = divSHeightWidth[4].x;
let divFiveHeight = divSHeightWidth[4].y;
let divFourWidth = divSHeightWidth[5].x;
let divFourHeight = divSHeightWidth[5].y;
let divThreeWidth = divSHeightWidth[6].x;
let divThreeHeight = divSHeightWidth[6].y;
let divTwoWidth = divSHeightWidth[7].x;
let divTwoHeight = divSHeightWidth[7].y;
let divOneWidth = divSHeightWidth[8].x;
let divOneHeight = divSHeightWidth[8].y;
console.log(divSixHeight);

console.log(divSixWidth);

// let mx = 0;
// let my = 0;
let flag = 0;
btnMenu.addEventListener("click", () => {
  subMenu.classList.toggle("hidden");
  subMenu.classList.toggle("flex");
});
let _imagesBox = document.querySelector("#imagesBox");
let _images = document.querySelectorAll(".imagesBox>img");
let width = window.innerWidth;
let height = window.innerHeight;
_images.forEach((val) => {
  val.ondragstart = () => false;
  val.addEventListener("mousedown", () => {
    val.addEventListener("mousemove", para);
    val.style.zIndex = "49";
  });
  val.addEventListener("mouseup", () => {
    val.removeEventListener("mousemove", para);
    val.style.zIndex = "0";
    let status = val.getAttribute("data-numb");
    console.log(`status:${status}`);

    if (
      y > divOneHeight - 93 &&
      y < divOneHeight + 93 &&
      status == 1 &&
      divOneWidth - 57 <= x &&
      x <= divOneWidth + 57
    ) {
      flag++;
    } else if (
      y > divTwoHeight - 93 &&
      y < divTwoHeight + 93 &&
      status == 2 &&
      divTwoWidth - 57 <= x &&
      x <= divTwoWidth + 57
    ) {
      flag++;
    } else if (
      y > divThreeHeight - 93 &&
      y < divThreeHeight + 93 &&
      status == 3 &&
      divThreeWidth - 57 <= x &&
      x <= divThreeWidth + 57
    ) {
      flag++;
    } else if (
      y > divFourHeight - 93 &&
      y < divFourHeight + 93 &&
      status == 4 &&
      divFourWidth - 57 <= x &&
      x <= divFourWidth + 57
    ) {
      flag++;
    } else if (
      y > divFiveHeight - 93 &&
      y < divFiveHeight + 93 &&
      status == 5 &&
      divFiveWidth - 57 <= x &&
      x <= divFiveWidth + 57
    ) {
      flag++;
    } else if (
      y > divSixHeight - 93 &&
      y < divSixHeight + 93 &&
      status == 6 &&
      divSixWidth - 57 <= x &&
      x <= divSixWidth + 57
    ) {
      flag++;
    } else if (
      y > divSevenHeight - 93 &&
      y < divSevenHeight + 93 &&
      status == 7 &&
      divSevenWidth - 57 <= x &&
      x <= divSevenWidth + 57
    ) {
      flag++;
    } else if (
      y > divEightHeight - 93 &&
      y < divEightHeight + 93 &&
      status == 8 &&
      divEightWidth - 57 <= x &&
      x <= divEightWidth + 57
    ) {
      flag++;
    } else if (
      y > divNineHeight - 93 &&
      y < divNineHeight + 93 &&
      status == 9 &&
      divNinewidth - 57 <= x &&
      x <= divNinewidth + 57
    ) {
      flag++;
    }
    console.log(flag);
    console.log(x);
    console.log(y);
    if (flag === 9) {
      congratulation.classList.remove("hidden");
      congratulation.classList.add("flex");
      setTimeout(() => {
        congratulation.classList.add("hidden");
        congratulation.classList.remove("flex");
      }, 1500);
    }
  });
});
let x;
let y;
function para(e) {
  x = e.clientX;
  y = e.clientY;
  e.target.classList.add("myDrag");
  e.target.style.top = `${y}px`;
  e.target.style.left = `${x}px`;
}

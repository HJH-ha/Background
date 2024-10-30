// alert("테스트"); // 링크 확인용
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const h3 = document.querySelector("h3");

// const setcolor = () => {
//   body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
// };

// 2개의 컬러입력에 이벤트 달기
// color1.addEventListener(이벤트종류, 실행할 함수)
color1.addEventListener("input", setcolor); // 콜백 함수라서 () <붙이지 않고 이름만 함.
color2.addEventListener("input", setcolor);
// color1.addEventListener("input, linear-gradient(to right, red, blue)");

function setcolor() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.textContent = body.style.background + ";";
}

import {
  getNode,
  getNodes,
  removeClass,
  addClass,
  data,
  AudioPlayer,
} from "./lib/index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const listItems = getNodes("li");
const visual = getNode(".visual img");
const nickName = getNode(".nickName");

function handleClick(e) {
  const target = e.target;
  console.log("event.target:", target);
  const li = target.closest("li");
  console.log(li);
  const index = +li.dataset.index - 1;

  setBgColor(index);
  setImage(visual, index);
  setNameText(nickName, index);
  setClass(li, "is-active");
  setAudio(index);
}

function setBgColor(index) {
  const elem = document.body;
  elem.style.background = `linear-gradient(to bottom, ${data[index].color[0]},${data[index].color[1]})`;
}

function setImage(node, index) {
  if (typeof node === "string") node = getNode(node);

  node.src = `./assets/${data[index].name.toLowerCase()}.jpeg`;
  node.alt = data[index].alt;
}

function setNameText(node, index) {
  if (typeof node === "string") node = getNode(node);

  node.textContent = `${data[index].name}`;
}

function setClass(node, className) {
  listItems.forEach((node) => {
    removeClass(node, className);
  });

  addClass(node, className);
}

function setAudio(index) {
  const audio = new AudioPlayer(
    `./assets/audio/${data[index].name.toLowerCase()}.m4a`
  );
  audio.play();
}

listItems.forEach((li) => {
  li.addEventListener("click", handleClick);
});

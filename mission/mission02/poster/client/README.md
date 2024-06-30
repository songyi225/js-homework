# Mission - 2

---

썸네일 이미지를 클릭하면 메인 이미지와 배경, 타이틀이 바뀌고 오디오가 재생될 수 있도록 로직을 작성합니다.

---

## 구현 화면

![구현](/mission/md-assets/elemental.gif)

- 소리도 나는데 영상 녹화한걸 어떻게 올리는지 모르겠어용...ㅠ

## 구조

![tree](/mission/md-assets/mission02-tree.png)

### 코드 설명

### 1. 클릭 이벤트 활성화

#### [1]

```js
const listItems = getNodes("li");

listItems.forEach((li) => {
  li.addEventListener("click", handleClick);
});
```

- li 노드를 찾고 forEach를 돌려 클릭 이벤트를 걸어줍니다.
- 클릭 시 handleClick 함수가 실행되도록 작성합니다.

#### [2]

```js
function handleClick(e) {
  const target = e.target;
  const li = target.closest("li");
  const index = +li.dataset.index - 1;

  setBgColor(index);
  setImage(visual, index);
  setNameText(nickName, index);
  setClass(li, "is-active");
  setAudio(index);
}
```

- handleClick 함수에서 e 라는 매개변수를 통해 실제 event가 일어난 요소를 `e.target` 속성으로 뽑아낼 수 있습니다.
- 해당 target에서 가장 가까운 `li`요소를 closest를 통해 뽑아내고 변수 li에 담아줍니다.
- li 요소의 `data-index` 값은 1부터 4까지로 선언되어있고 해당 index를 data 배열의 index와 맞추기 위해 변수 index에 `숫자` 형태로 저장하고 `-1`을 해주었습니다.
- 배경색이 바뀌는 함수, 이미지가 바뀌는 함수, 닉네임이 바뀌는 함수, 버튼에 포커스를 주는 함수, 오디오를 실행하는 함수를 모두 실행합니다.

### 2. 배경 색상 변경 ( setBgColor )

```js
function setBgColor(index) {
  const elem = document.body;
  elem.style.background = `linear-gradient(to bottom, ${data[index].color[0]},${data[index].color[1]})`;
}
```

- 배경색을 변경하는 함수를 분리하여 작성합니다.
- 선택한 li 요소의 index값을 함수의 인자로 받아오기 위해 `setBgColor(index)`로 선언해줍니다.
- 내부에서 body 태그의 `background`를 변경하기 위해 태그를 찾아줍니다.
- linear-gradient에 필요한 색상 2가지 값은 `data의 color값`을 가져옵니다.

### 3. 포스터 이미지 변경 ( setImage )

```js
function setImage(node, index) {
  if (typeof node === "string") node = getNode(node);

  node.src = `./assets/${data[index].name.toLowerCase()}.jpeg`;
  node.alt = data[index].alt;
}
```

- 중앙의 포스터 이미지를 변경하는 함수를 분리하여 작성합니다.
- node 와 index를 받아서 해당 노드(요소)의 `src` 와 `alt`를 변경합니다.
- src의 경로에 data의 name을 `toLowerCase`로 소문자로 바꿔주고 최종 경로를 설정합니다.

### 4. 닉네임 변경 ( setNameText )

```js
function setNameText(node, index) {
  if (typeof node === "string") node = getNode(node);

  node.textContent = `${data[index].name}`;
}
```

- 닉네임을 변경하는 함수를 분리하여 작성합니다.
- node와 index를 받아서 해당 노드(요소)의 `textContent`를 변경합니다.
- 변경할 닉네임은 data의 name 값을 가져와서 출력합니다.

### 5. 'is-active' 클래스 추가 ( setClass )

```js
function setClass(node, className) {
  listItems.forEach((node) => {
    removeClass(node, className);
  });

  addClass(node, className);
}
```

- li 선택 시 해당 이미지에 포커싱되어 border값이 적용될 수 있도록 'is-active' 클래스가 추가되는 함수를 분리하여 작성합니다.
- 기존에 따로 빼서 사용하고 있던 css.js 파일을 import하여 활용하였습니다.
- 모든 요소의 className을 제거하고 (`removeClass`) , 선택한 요소에만 className을 추가하는 (`addClass`) 로직의 함수입니다.

### 6. 오디오 추가 ( setAudio )

```js
function setAudio(index) {
  const audio = new AudioPlayer(
    `./assets/audio/${data[index].name.toLowerCase()}.m4a`
  );
  audio.play();
}
```

- `AudioPlayer.js`를 import하고 audio 변수에 호출합니다.
- 오디오 경로도 포스터 이미지와 동일하게 data의 name을 소문자로 변환하여 설정합니다.
- `audio.play()` 로 오디오를 재생합니다.

## 느낀점

```js
제일 힘들었던 점은 함수를 따로 분리하는 작업이었습니다.
200줄이 넘게 코드를 짜다가 마지막에 함수로 분리했는데,
분리해보니 코드가 80줄도 안되게 바뀐 것을 보고 함수의 유용함을 느낄 수 있었습니다.

또한, 이벤트를 줄 때 forEach 구문을 사용하였는데
이를 통해 forEach에 대해 조금 더 깊이있게 이해할 수 있었던 것 같습니다.

제가 짠 코드보다 더 가독성 좋고 괜찮은 코드가 있겠죠?
자바스크립트 공부란 참 어려운 것 같습니다..ㅠㅠ
```

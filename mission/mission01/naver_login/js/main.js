const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
const emailInput = getNode(".user-email-input");
const pwInput = getNode(".user-password-input");
const loginBtn = getNode(".btn-login");

const emailError = getNode("#userEmailError");
const pwError = getNode("#userPasswordError");

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validationCheck() {
  if (emailReg(emailError) === true) {
    emailError.classList.remove("is--invalid");
  }
  if (emailReg(emailError) === false) {
    emailError.classList.add("is--invalid");
  }

  if (!pwReg(pwError)) {
    pwError.classList.add("is--invalid");
  } else {
    pwError.classList.remove("is--invalid");
  }

  /* if (!emailReg(email)) {
    addClass("#userEmailError", "is--invalid");
  } else {
    removeClass("#userEmailError", "is--invalid");
  }

  if (!pwReg(password)) {
    addClass("userPasswordError", "is--invalid");
  } else {
    removeClass("#userPasswordError", "is--invalid");
  } */
}

function loginCheck() {
  const email = emailInput.value;
  const password = pwInput.value;

  if (emailInput === user.id && pwInput === user.pw) {
    console.log("로그인고고");
  }
  if (emailInput === user.id && !(pwInput === user.pw)) {
    console.log("해당 유저의 비밀번호가 아닙니다.");
  }
  if (!(emailInput === user.id) && pwInput === user.pw) {
    console.log("해당 유저가 없습니다.");
  }
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validationCheck();
  loginCheck();
});

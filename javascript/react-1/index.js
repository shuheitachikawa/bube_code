
// const userInputValue = "ぶべ";

// const userName = userInputValue || "名無しさん";


// ユーザー入力を元にユーザー名を生成する関数
const userName = (inputValue) => {
  if (inputValue) {
    return inputValue;
  } else {
    return "名無しさん";
  }
};

// ↓ こう書き換えられる
const userName_2 = (inputValue) => {
  return inputValue || "名無しさん";
};


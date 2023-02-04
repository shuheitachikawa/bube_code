location.reload();

const copyText = "コピーしたい文字列";

navigator.clipboard.writeText(copyText);

navigator.mediaDevices.getUserMedia({video: true})

const text = "おはよう";

speechSynthesis.speak(new SpeechSynthesisUtterance(text));


const title = "表示したいタイトル";
const url = "シェアしたいURL";

navigator.share({ title, url }) 

alert("こんにちは");

const confirmed = confirm("実行しますか？");

navigator.userAgent
// -> 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'


navigator.share({ title, url }) 
// ↓本来は
window.navigator.share({ title, url }) 

location.reload();
// ↓本来は
window.location.reload();

console.log("こんにちは");
// ↓本来は
window.console.log("こんにちは");



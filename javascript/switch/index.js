// 信号機の色を受け取り、色に応じたメッセージを返す
const trafficLightMessage = (color) => {
  switch (color) {
    case '赤':
      return '止まれ';
    case '黄':
      return '注意';
    case '青':
      return '進め';
    default:
      return '信号の色ではありません';
  }
};
console.time("処理時間");
console.log(trafficLightMessage('赤')); // => '止まれ'
console.log(trafficLightMessage('黄')); // => '注意'
console.log(trafficLightMessage('青')); // => '進め'
console.log(trafficLightMessage('白')); // => '信号の色ではありません'
console.timeEnd("処理時間");

const trafficLightMessage2 = (color) => {
  if (color === '赤') {
    return '止まれ';
  } else if (color === '黄') {
    return '注意';
  } else if (color === '青') {
    return '進め';
  } else {
    return '信号の色ではありません';
  }
};

console.time("処理時間2");
console.log(trafficLightMessage2('赤')); // => '止まれ'
console.log(trafficLightMessage2('黄')); // => '注意'
console.log(trafficLightMessage2('青')); // => '進め'
console.log(trafficLightMessage2('白')); // => '信号の色ではありません'
console.timeEnd("処理時間2");
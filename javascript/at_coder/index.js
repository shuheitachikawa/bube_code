
const main = input => (input.split(' ')[0] * input.split(' ')[1]) % 2 === 0 ? '偶数' : '奇数';


main("3 4"); // => "偶数"
main("1 3"); // => "奇数"




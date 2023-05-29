let number = parseInt(prompt('Nhập vào một số nguyên dương tùy ý:'));
let result = 0;
while (number > 0) {
  rightmost = number % 10;
  result = result * 10 + rightmost;
  number = Math.floor(number / 10);
}
console.log('Số đảo ngược: ' + result);
